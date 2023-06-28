import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import { api } from "~/utils/api";

export default function SinglePostPage() {
  const { user, isLoaded: userLoaded, isSignedIn } = useUser();
  api.posts.getAll.useQuery();

  if (!userLoaded) return <div />;

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>SinglePostPage view</div>
      </main>
    </>
  );
}
