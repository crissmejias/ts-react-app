import { Inter } from "next/font/google";
import {
  EventHandler,
  HtmlHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import { LazyImage } from "@/components/LazyImage";
import Head from "next/head";
const generateRandomId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
const inter = Inter({ subsets: ["latin"] });
const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setImages] = useState<ImageItem>([]);
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    setImages([
      ...images,
      {
        id: generateRandomId(),
        url: `https://randomfox.ca/images/${random()}.jpg`,
      },
    ]);
  };
  const handleLazyLoad = (node: any): void => {
    console.log(node);
  };
  return (
    <>
      <Head>
        <title>TypeScript & React</title>
      </Head>
      <main className="bg-gray-800 w-full min-h-screen flex justify-center items-center flex-col gap-12">
        <h1 className="text-5xl text-center break-words text-gray-100 mt-24 ">
          Get A Random Fox
        </h1>
        <button
          onClick={addNewFox}
          className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md shadow-md shadow-gray-500 active:translate-y-2 transition">
          Add a Fox
        </button>
        <div className=" w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center py-12">
          {images.map(({ url, id }) => (
            <LazyImage
              src={url}
              alt={"A Random Fox"}
              key={id}
              onClick={() => console.log("clicked")}
              onLazyLoad={handleLazyLoad}
            />
          ))}
        </div>
      </main>
    </>
  );
}
