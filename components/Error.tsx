import { ApolloError } from "@apollo/client/errors";

export default function Error(props: { data: ApolloError | undefined }) {
  return (
    <div style={{ border: "1px solid red" }}>
      {props.data?.message} {JSON.stringify(props.data)}
    </div>
  );
}
