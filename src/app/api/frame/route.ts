import {
  FrameRequest,
  getFrameMessage,
  getFrameHtmlResponse,
} from "@usedispatch/solarplex-frame-sdk";
import { NextRequest, NextResponse } from "next/server";
import { getDomainKeySync, NameRegistryState } from "@bonfida/spl-name-service";
import { Connection, PublicKey } from "@solana/web3.js";

export async function POST(req: NextRequest): Promise<Response> {
  let input: string | undefined = "";
  let recipientAddress = "";
  const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
  let isEmail = false;
  const body: FrameRequest = await req.json();
  const env = process.env.CROSSMINT_ENV || "staging";

  try {
    const { message } = await getFrameMessage(body);

    if (message?.input) {
      input = message.input;
    }

    if (!input) {
      return new NextResponse(
        getFrameHtmlResponse({
          image: `${NEXT_PUBLIC_URL}/error2.png`,
        })
      );
    }

    if (input.slice(-4) === ".sol") {
      const { pubkey } = getDomainKeySync(input);
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const { registry } = await NameRegistryState.retrieve(connection, pubkey);

      const pubKey = new PublicKey(registry.owner);
      recipientAddress = pubKey.toBase58();
    } else if (input.includes("@")) {
      isEmail = true;
      recipientAddress = `email:${input}:solana`;
    } else {
      recipientAddress = `solana:${input}`;
    }

    const crossmintURL = `https://${env}.crossmint.com/api/2022-06-09/collections/${process.env.CROSSMINT_COLLECTION_ID}/nfts`;
    const crossmintOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": process.env.CROSSMINT_API_KEY!,
      },
      body: JSON.stringify({
        recipient: recipientAddress,
        metadata: {
          name: "The First Solarplex Frame to Mint NFTs",
          image: `${NEXT_PUBLIC_URL}/nft.png`,
          description:
            "This is the first NFT that was minted from Solarplex. Powered by Crossmint",
        },
        compressed: true,
      }),
    };

    const response = await fetch(crossmintURL, crossmintOptions);
    await response.json();

    return new NextResponse(
      getFrameHtmlResponse({
        image: `${NEXT_PUBLIC_URL}/success.png`,
        buttons: [
          isEmail
            ? {
                label: "View your NFT on crossmint.com",
              }
            : {
                label: "Your NFT will be delivered to your wallet soon!",
              },
        ],
      })
    );
  } catch (error) {
    return new NextResponse(
      getFrameHtmlResponse({
        image: `${NEXT_PUBLIC_URL}/error.png`,
      })
    );
  }
}

export const dynamic = "force-dynamic";
