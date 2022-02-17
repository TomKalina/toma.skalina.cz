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
    </Layout>
  );
};

export default Index;
