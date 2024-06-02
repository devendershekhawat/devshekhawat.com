import { getPublicationPosts } from "../actions/getAllPosts";
import PostTile from "./postTile";

const Posts = ({ posts }: { posts: Awaited<ReturnType<typeof getPublicationPosts>>}) => {
    return (
        <div className="my-10">
            {posts.map((post) => <PostTile post={post} />)}
        </div>
    )
}

export default Posts;