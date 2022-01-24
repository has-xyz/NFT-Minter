const main = async () => {
	const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNft");
	const nftContract = await nftContractFactory.deploy();
	await nftContract.deployed();
	console.log(`Contract deployed to: ${nftContract.address}`);

	// Call the function
	let txn = await nftContract.makeAnEpicNFT();
	// Wait for it to be minted
	await txn.wait();
	console.log("Minted NFT #1");

	// Mint another NFT for fun
	txn = await nftContract.makeAnEpicNFT();
	await txn.wait();
	console.log("Minted NFT #2");

};

const runMain= async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(`Error: ${error}`);
		process.exit(1);
	}
};

runMain();