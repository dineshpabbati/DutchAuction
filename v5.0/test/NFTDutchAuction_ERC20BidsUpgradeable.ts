import { loadFixture, mine } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import {ethers, upgrades} from "hardhat";
import {BigNumber} from "ethers";
import { MyToken } from '../typechain-types'

async function getPermitSignature(signer:any, token:MyToken, spender:string, value:BigNumber, deadline:BigNumber) {

    const [nonce, name, version, chainId] = await Promise.all([
        token.nonces(signer.address),
        token.name(),
        "1",
        signer.getChainId(),
    ])

    return ethers.utils.splitSignature(
        await signer._signTypedData(
            {
                name,
                version,
                chainId,
                verifyingContract: token.address,
            },
            {
                Permit: [
                    {
                        name: "owner",
                        type: "address",
                    },
                    {
                        name: "spender",
                        type: "address",
                    },
                    {
                        name: "value",
                        type: "uint256",
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                    },
                ],
            },
            {
                owner: signer.address,
                spender,
                value,
                nonce,
                deadline,
            }
        )
    )
}

describe("Minting & Auctioning NFT with ERC20", function () {
    async function deployNFTDutchAuctionERC20BidsUpgradeableFixture() {

        const [owner, otherAccount, otherAccount2] = await ethers.getSigners();

        const MyNFTFactory = await ethers.getContractFactory("MyNFT");
        const myNFTFactory = await MyNFTFactory.deploy(10);

        await myNFTFactory.safeMint(owner.address);

        const MyTokenFactory = await ethers.getContractFactory("MyToken");
        const myTokenFactory = await MyTokenFactory.deploy(10000);

        await myTokenFactory.connect(otherAccount).buy(300,{value: 30000});

        const UpgradeableNFTDutchAuctionFactory = await ethers.getContractFactory("NFTDutchAuction_ERC20BidsUpgradeable");
        
        const nftDutchAuction = await upgrades.deployProxy(UpgradeableNFTDutchAuctionFactory,[myTokenFactory.address, myNFTFactory.address, 1, 100, 10, 10],{kind : 'uups'});

        await myNFTFactory.approve(nftDutchAuction.address, 1);
        // await uniqTokenFactory.connect(otherAccount).approve(nftDutchAuction.address, 300);

        return {myNFTFactory, myTokenFactory, nftDutchAuction, owner, otherAccount, otherAccount2};
    }

    describe("MyNFT & Dutch Auction Deployment with ERC20 Permit functionality ", function () {

        it("Safe Mint NFT", async function () {
            const {myNFTFactory, owner} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect(await myNFTFactory.safeMint(owner.address));
            expect(await myNFTFactory.balanceOf(owner.address)).to.equal(2);
            expect(await myNFTFactory.ownerOf(2)).to.equal(owner.address);
        });

        it("Malicious Mint failure", async function () {
            const { myNFTFactory, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            await expect(myNFTFactory.connect(otherAccount).safeMint(otherAccount.address)).to.be.revertedWith( "Ownable: caller is not the owner");
        });

        it("check NFT supply", async function () {
            const {myNFTFactory} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect(await myNFTFactory.maxSupply()).to.equal(10);
            expect(await myNFTFactory.currentSupply()).to.equal(1);

        });

        it("check token supply", async function () {
            const {myTokenFactory} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect(await myTokenFactory.maxSupply()).to.equal(10000);
            expect(await myTokenFactory.totalSupply()).to.equal(300);

        });
        it("Reverts if ether transfer to the owner fails", async function () {
            const { myTokenFactory, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);
            console.log("Owner: ", owner);
            const bigNum = BigInt("6000000000000000000");      
            const testHelperFactory = await ethers.getContractFactory('test')
              testHelper = await testHelperFactory.deploy()
              await testHelper.deployed()   
               await expect(testHelper.connect(otherAccount).targetTest({value: bigNum})
            ).to.be.revertedWith("Ether transfer to donor address is failed");
          });

        it("check token price", async function () {
            const {myTokenFactory} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect(await myTokenFactory.currentPrice()).to.equal(100);

        });

        it("token Balance Check", async function () {
            const {myTokenFactory, otherAccount} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect(await myTokenFactory.balanceOf(otherAccount.address)).to.equal(300);

        });

        it("token Allowance Check", async function () {
            const {myTokenFactory, nftDutchAuction, otherAccount} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            const deadline = ethers.constants.MaxUint256

            const { v, r, s } = await getPermitSignature(
                otherAccount,
                myTokenFactory,
                nftDutchAuction.address,
                await myTokenFactory.balanceOf(otherAccount.address),
                deadline
            )

            await myTokenFactory.permit(
                otherAccount.address,
                nftDutchAuction.address,
                myTokenFactory.balanceOf(otherAccount.address),
                deadline,
                v,r,s
            )

            expect(await myTokenFactory.allowance(otherAccount.address,nftDutchAuction.address)).to.equal(await myTokenFactory.balanceOf(otherAccount.address));

        });

        it('Check seller is owner', async function () {

            const { nftDutchAuction, owner} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);
            expect(await nftDutchAuction.seller()).to.equal(owner.address);

        });

        it("Seller can't Bid", async function () {

            const { nftDutchAuction, owner} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);
            await expect(nftDutchAuction.connect(owner).bid(200)).to.be.revertedWith("Owner can't bid");

        });

        it("Product is still available for bid", async function () {
            const { nftDutchAuction} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect(await nftDutchAuction.buyer()).to.equal(ethers.constants.AddressZero);

        });

        it("Auction Status is Open", async function () {
            const { nftDutchAuction} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect(await nftDutchAuction.auctionStatusOpen()).to.equal(true);

        });


        it("Number of rounds", async function () {
            const { nftDutchAuction} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);
            const hashOfTx = nftDutchAuction.deployTransaction.hash;
            const initBlock = (await nftDutchAuction.provider.getTransactionReceipt(hashOfTx)).blockNumber;
            const currentBlock = await ethers.provider.getBlockNumber();
            expect(10).to.greaterThanOrEqual(currentBlock-initBlock);

        });

        it("Wei is insufficient", async function () {
            const { nftDutchAuction, otherAccount} = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect( nftDutchAuction.connect(otherAccount).bid(10)).to.be.revertedWith("WEI is insufficient");

        });

      /* it("Successful Bid and balance checks", async function () {
            const { myNFTFactory, myTokenFactory, nftDutchAuction, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            expect(await myNFTFactory.balanceOf(owner.address)).to.equal(1);
            expect(await myNFTFactory.balanceOf(otherAccount.address)).to.equal(0);

             expect(await myTokenFactory.balanceOf(owner.address)).to.equal(0);
             expect(await myTokenFactory.balanceOf(otherAccount.address)).to.equal(300);

            const deadline = ethers.constants.MaxUint256

            const { v, r, s } = await getPermitSignature(
                otherAccount,
                myTokenFactory,
                nftDutchAuction.address,
                await myTokenFactory.balanceOf(otherAccount.address),
                deadline
            )

            await myTokenFactory.permit(
                otherAccount.address,
                nftDutchAuction.address,
                myTokenFactory.balanceOf(otherAccount.address),
                deadline,
                v,r,s
            )

            expect(await nftDutchAuction.connect(otherAccount).bid(200));

            expect(await myNFTFactory.balanceOf(otherAccount.address)).to.equal(1);
            expect(await myNFTFactory.balanceOf(owner.address)).to.equal(0);

            expect(await nftDutchAuction.buyer()).to.equal(otherAccount.address);

            expect(await nftDutchAuction.auctionStatusOpen()).to.equal(false)
            expect(await myTokenFactory.balanceOf(otherAccount.address)).to.equal(140);
            expect(await myTokenFactory.balanceOf(owner.address)).to.equal(160);

        }); */

        it("Successful Bid and balance checks", async function () {
            const { myNFTFactory, myTokenFactory, nftDutchAuction, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);
        
            expect(await myNFTFactory.balanceOf(owner.address)).to.equal(1);
            expect(await myNFTFactory.balanceOf(otherAccount.address)).to.equal(0);
        
            expect(await myTokenFactory.balanceOf(owner.address)).to.equal(0);
            expect(await myTokenFactory.balanceOf(otherAccount.address)).to.equal(300);
        
            const deadline = ethers.constants.MaxUint256;
        
            const { v, r, s } = await getPermitSignature(
              otherAccount,
              myTokenFactory,
              nftDutchAuction.address,
              await myTokenFactory.balanceOf(otherAccount.address),
              deadline
            );
        
            await myTokenFactory.permit(
              otherAccount.address,
              nftDutchAuction.address,
              myTokenFactory.balanceOf(otherAccount.address),
              deadline,
              v,
              r,
              s
            );
        
            // Check the scenario where the bid is successful
            await expect(nftDutchAuction.connect(otherAccount).bid(200))
              .to.emit(nftDutchAuction, "BidSuccessful")
              .withArgs(otherAccount.address, 200);
        
            expect(await myNFTFactory.balanceOf(otherAccount.address)).to.equal(1);
            expect(await myNFTFactory.balanceOf(owner.address)).to.equal(0);
        
            expect(await nftDutchAuction.buyer()).to.equal(otherAccount.address);
        
            expect(await nftDutchAuction.auctionStatusOpen()).to.equal(false);
            expect(await myTokenFactory.balanceOf(otherAccount.address)).to.equal(140);
            expect(await myTokenFactory.balanceOf(owner.address)).to.equal(160);
          });

        it("You already bought this product", async function () {
            const { nftDutchAuction,myTokenFactory, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            const deadline = ethers.constants.MaxUint256

            const { v, r, s } = await getPermitSignature(
                otherAccount,
                myTokenFactory,
                nftDutchAuction.address,
                await myTokenFactory.balanceOf(otherAccount.address),
                deadline
            )

            await myTokenFactory.permit(
                otherAccount.address,
                nftDutchAuction.address,
                myTokenFactory.balanceOf(otherAccount.address),
                deadline,
                v,r,s
            )

            expect(await nftDutchAuction.connect(otherAccount).bid(200)).to.be.revertedWith("You already bought this product");

        });

        it("Block passed - Auction closed", async function () {
            const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20BidsUpgradeableFixture);

            await mine(100);

            expect( nftDutchAuction.connect(otherAccount).bid(10)).to.be.revertedWith("Auction is closed");

        });
        

    });
});