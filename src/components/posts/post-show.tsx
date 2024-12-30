import { db } from '@/db';
import { notFound } from 'next/navigation';

interface PostShowProps {
  postId: string
}

export default async function PostShow({postId}: PostShowProps) {
  const post = await db.post.findFirst({
    where: { id: postId }
  })

  if (!post) {
    notFound();
  }

  return (
    <div className="m-4 ">
      <h1 className="text-green-400 text-2xl font-bold my-2">{post.title}</h1>
      <p className=" text-white p-4 border rounded ">{post.content}</p>
    </div>
  );
}
