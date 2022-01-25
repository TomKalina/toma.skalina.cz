import { useRouter } from "next/router";
import Link from "next/link";
import { useAllPostsQuery } from "../_codegen";
import Error from "./Error";

export default function Header() {
  const { pathname } = useRouter();
  const { loading, error, data } = useAllPostsQuery();
  if (error) return <Error data={error} />;
  if (loading) return <div>Loading</div>;

  return (
    <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
      {data?.pages?.nodes?.map((post, index) => (
        <Link href={`/page/${post?.id}`} key={index}>
          <a className="py-2 px-6 flex hover:text-black">{post?.title}</a>
        </Link>
      ))}
    </nav>
  );
}
