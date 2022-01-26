import { useRouter } from "next/router";
import * as React from "react";
import Layout from "../../components/Layout";
import { useDetailPageQuery } from "../../_codegen";
import Error from "../../components/Error";
import LoadingPage from "../../components/LoadingPage";
interface Props {}

const Page: React.FC<Props> = ({}) => {
  const router = useRouter();

  const { loading, error, data } = useDetailPageQuery({
    variables: { id: String(router.query.id) },
  });

  if (error)
    return (
      <Layout>
        <Error data={error} />
      </Layout>
    );
  if (loading)
    return (
      <Layout>
        <LoadingPage />
      </Layout>
    );

  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{
          __html: data?.page?.content ?? "",
        }}
      />
    </Layout>
  );
};

export default Page;
