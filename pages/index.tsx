import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const Index = () => {
  return (
    <Layout>
      {/* <Image
        src="https://www.tailwind-kit.com/images/person/11.webp"
        className="rounded-full w-28 mx-auto"
        alt="ja"
      /> */}
      <p className="text-3xl my-6 text-center dark:text-white">
        Hi, I&#x27;m Tom 🤘
      </p>
      <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
        Building digital products, brands, and experiences.
      </h2>
      <div className="flex items-center justify-center mt-4">
        <a
          href="mail:info@tomaskalina.cz"
          className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
        >
          CONNECT WITH ME
        </a>
      </div>
    </Layout>
  );
};

export default Index;
