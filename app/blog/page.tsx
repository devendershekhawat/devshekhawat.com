import { Metadata } from "next";
import { getPublicationPosts } from "../actions/getAllPosts";
import { getPublication } from "../actions/getPublicationAction";
import { SocialLinks } from "../components/links";
import Posts from "../components/posts";
import Emojis from "../components/emojis";

const BlogPage = async () => {
    const posts = await getPublicationPosts();
    return (
        <main className="w-full min-h-screen bg-[url('/herobg.gif')] bg-fixed bg-no-repeat bg-center bg-cover">
            <div className="bg-slate-800/80 lg:py-10">
                <div className="w-full mx-auto max-w-[1024px] bg-slate-900/80 px-6 py-4">
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
                    <Emojis />
                </div>
            </div>
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
