import Image from "next/image";
import { getPublicationPosts } from "../actions/getAllPosts";
import Link from "next/link";

type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const PostTile = ({ post }: { post: ArrayElement<Awaited<ReturnType<typeof getPublicationPosts>>> }) => {
    return (
        <Link href={post.url} key={post.id} className="mb-10 block group">
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-6">
                <div className="h-48 sm:h-36 w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-4 relative rounded-md overflow-hidden">
                    <Image
                        src={post.coverImage?.url!}
                        fill
                        alt={post.title}
                        className="object-cover transition-all group-hover:scale-125"
                        layout="fill"
                    />    
                </div>
                <div className="col-span-6 sm:col-span-6 md:col-span-7 lg:col-span-6">
                    <h2 className="text-xl text-gray-300 mt-2">{post.title}</h2>
                    <p className="text-gray-400 mt-2">{post.brief.substring(0, 100)}...</p>
                    <div className="mt-2 block">
                        {
                            post.views > 0 && (
                                <span className="text-sm text-gray-300">{post.views} views</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostTile;