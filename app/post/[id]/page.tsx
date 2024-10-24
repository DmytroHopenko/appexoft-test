import { getPost } from "@/actions/posts";
import { LoaderWrap } from "@/components/shared/LoaderWrap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params;
  const post: PostProps = await getPost(resolvedParams.id);

  return (
    <div className="h-[550px] w-[320px] md:w-full md:max-w-[700px] mx-auto bg-white rounded-xl shadow-xl p-4">
      <div className="w-full mb-5">
        <Link href="/">
          <Button variant="link">Go Back</Button>
        </Link>
      </div>
      {post ? (
        <div className="h-auto w-full">
          <div className="w-full flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-medium">User ID: {post.userId}</span>
              <span className="font-medium">Post ID: {post.id}</span>
            </div>
            <h1 className="text-slate-800 text-center first-letter:uppercase font-semibold">
              {post.title}
            </h1>
            <div>
              <p className="first-letter:uppercase text-center">{post.body}</p>
            </div>
          </div>
        </div>
      ) : (
        <LoaderWrap />
      )}
    </div>
  );
};

export default PostPage;
