import { ApolloError } from "@apollo/client";
import * as React from "react";

interface Props {
  data: ApolloError | undefined;
}

const Error: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ border: "1px solid red" }}>
      {data?.message} {JSON.stringify(data)}
    </div>
  );
};

export default Error;
