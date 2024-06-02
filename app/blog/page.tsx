import { Metadata } from "next";
import { getPublicationPosts } from "../actions/getAllPosts";
import { getPublication } from "../actions/getPublicationAction";
import { SocialLinks } from "../components/links";
import Posts from "../components/posts";

const BlogPage = async () => {
    const posts = await getPublicationPosts();
    return (
        <main className="w-full max-w-[1024px] py-10 mx-auto px-6 min-h-screen">
            <h1 className="font-thin text-xl md:text-3xl mb-10">Blog</h1>
            <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-10 relative">
                <div className="w-full">
                    Latest articles:
                    <Posts posts={posts} />
                </div>
                <div className="w-full lg:max-w-56 lg:sticky top-32 h-full">
                    <p>Hope you enjoy my blogs posts. Connect with me on social media using link below and let me know you thoughts.</p>
                    <SocialLinks breakAt="lg" />
                </div>
            </div>
            <div className="mb-40 text-xl sm:text-2xl md:text-4xl mt-10 text-center">🛌 🧑‍💻 🧘 🏃 🛀 🧑‍💻 🥣 🧑‍💻 🍻 🧑‍💻 🛌</div>
        </main>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    const publication = await getPublication();
    return {
      title: `${publication?.author.name} | Blog`,
      description: publication?.author.bio?.markdown,
      openGraph: {
        type: 'website',
        title: publication?.author.name,
        description: publication?.author.bio?.markdown,
        images: [{
          url: publication?.ogMetaData.image!,
          width: 800,
          height: 420,
          alt: publication?.author.name,
        }],
      },
      icons: {
        icon: publication?.favicon!,
      }
    }
  }

export default BlogPage;
