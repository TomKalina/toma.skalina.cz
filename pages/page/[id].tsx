import { useRouter } from "next/router";
import * as React from "react";
import Layout from "../../components/Layout";
import { useDetailPageQuery } from "../../_codegen";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  const router = useRouter();

  const data = useDetailPageQuery({
    variables: { id: String(router.query.id) },
  });
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{
          __html: data.data?.page?.content ?? "",
        }}
      />
    </Layout>
  );
};

export default Page;
