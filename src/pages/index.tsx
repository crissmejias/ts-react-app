import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-800 w-full min-h-screen flex justify-center items-center">
      <h1 className="text-4xl  text-gray-100 ">Hello world</h1>
    </main>
  );
}
