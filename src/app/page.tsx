import {
  getFrameMetadata,
  FrameMetadataType,
} from "@usedispatch/solarplex-frame-sdk";
import type { Metadata } from "next";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

const frameMetadata: FrameMetadataType = {
  buttons: [
    {
      label: "Mint a cNFT from Solarplex",
      action: "post",
    },
  ],
  image: `${NEXT_PUBLIC_URL}/default.png`,

  input: {
    text: "Enter your wallet or .sol or email address",
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
};
const framemetadata = getFrameMetadata(frameMetadata);

export const metadata: Metadata = {
  title: "Mint a cNFT from Solarplex",
  description: "Mint a cNFT from Solarplex",
  openGraph: {
    title: "Mint a cNFT from Solarplex",
    description: "Mint a cNFT with a single click",
    images: [`${NEXT_PUBLIC_URL}/default.png`],
  },
  other: {
    ...framemetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Mint a cNFT from Solarplexs</h1>
    </>
  );
}
