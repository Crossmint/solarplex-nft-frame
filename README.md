# The First Solarplex Frame to Mint Compressed NFTs (cNFTs) on Solana

This is the First Solarplex Frame that allows your users to mint a cNFT on Solana, directly to their wallet address. All you need to do is like the post and re-post it, and then click on "Mint" to mint the NFT. The NFT will be delivered to your wallet address in a few seconds.

<Note>
    Ensure that you have linked your Solana wallet address to your Solarplex account! Otherwise, this will not work for you. 
</Note>

## Create and Deploy an NFT Collection on Solana using [Crossmint](http://crossmint.com/?utm_source=rohit&utm_medium=github&utm_campaign=solana-solarplex)

> The collection that I created and deployed is on Production, i.e., Solana Mainnet(Beta). However, it is recommended that you familiarize yourself with this on Staging (Testnet/Devnet) first before migrating to Production (Mainnet). Click to proceed to Crossmint's [Staging Console](https://staging.crossmint.com/console/overview?utm_source=rohit&utm_medium=github&utm_campaign=solana-solarplex). Click to proceed to Crossmint's [Production Console](https://crossmint.com/console/overview?utm_source=rohit&utm_medium=github&utm_campaign=solana-solarplex)

Refer to this step-by-step guide to learn how you can create an NFT Collection on Solana using Crossmint and also mint compressed NFTs (cNFTs) using both no-code and low-code approach. Click [here](https://blog.crossmint.com/compressed-nfts-explained/?utm_source=rohit&utm_medium=github&utm_campaign=solana-solarplex) for the guide.

## Create a Next App - Create and Configure the Solarplex Frame

Refer to the repository's src for the code that lets you create an NFT Minting Solarplex Frame on Solana.

## Configure the ENV variables

- `NEXT_PUBLIC_URL` - The URL of your deployed Next app
- `CROSSMINT_ENV` - The Crossmint environment that you are using to deploy the NFT Collection. If it is on Production or Mainnet, use `www`. If it is on Staging or Testnet, use `staging`.
- `CROSSMINT_API_KEY` - The Crossmint API Key that you created using Crossmint Console. You will be using this key to create an NFT Collection and mint an NFT on Solana.
- `CROSSMINT_COLLECTION_ID` - The Collection Id of the NFT Collection you deployed on Solana. You can obtain this from the Crossmint Console after you created a collection on Solana using the API.

## Built using

- [Next.js](https://nextjs.org/)
- [Crossmint](http://crossmint.com/?utm_source=rohit&utm_medium=github&utm_campaign=solana-solarplex)
- [SolarplexSDK](https://github.com/usedispatch/solarplex-frame-sdk)

## Tutorial

Check out the complete tutorial [here](https://blog.crossmint.com/how-to-create-a-solarplex-frame-to-mint-cnfts-on-solana/?utm_source=rohit&utm_medium=github&utm_campaign=solana-solarplex)
