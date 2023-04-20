import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { RandomFox } from "@/components/RandomFox";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const random = () => Math.floor(Math.random() * 123) + 1;
const randomImage: string = `https://randomfox.ca/images/${random()}.jpg`;
export default function Home() {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);
  return (
    <>
      <Head>
        <title>TypeScript & React</title>
      </Head>
      <main className="bg-gray-800 w-full min-h-screen flex justify-center items-center flex-col gap-12">
        <h1 className="text-4xl  text-gray-100 ">A Random Fox</h1>
        {images.map((image, index) => (
          <RandomFox image={image} alt={"A Random Fox"} key={index} />
        ))}
      </main>
    </>
  );
}
