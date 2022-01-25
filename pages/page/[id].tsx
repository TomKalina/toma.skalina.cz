import { useRouter } from "next/router";
import * as React from "react";
import App from "../../components/App";
import { useDetailPageQuery } from "../../_codegen";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  const router = useRouter();

  const data = useDetailPageQuery({
    variables: { id: String(router.query.id) },
  });
  return (
    <App>
      <div
        dangerouslySetInnerHTML={{
          __html: data.data?.page?.content ?? "",
        }}
      />
    </App>
  );
};

export default Page;
