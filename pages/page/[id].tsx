import { useRouter } from "next/router";
import * as React from "react";
import { useDetailPageQuery } from "../../_codegen";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  const router = useRouter();

  const data = useDetailPageQuery({
    variables: { id: String(router.query.id) },
  });
  console.log(router.query.id);
  console.log(data);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data.data?.page?.content ?? "",
      }}
    />
  );
};

export default Page;
