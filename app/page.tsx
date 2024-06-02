import { Metadata } from 'next';
import Image from 'next/image';
import { getPublication } from './actions/getPublicationAction';
import Header from './components/header';
import { IoMail } from 'react-icons/io5';
import Link from 'next/link';
import { FaXTwitter, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa6'
import { SocialLinks } from './components/links';

export default async function Home() {
  return (
    <main>
      <div className="max-w-[1024px] mx-auto px-6 pt-4 md:pt-20">
        <div className="grid grid-cols-6 gap-10">
          <div className="col-span-6 md:col-span-2">
            <div className="w-full h-96 relative rounded-md overflow-hidden">
              <Image
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1717257293349/vi2Pjxt_O.jpg?auto=format"
                alt="Dev Shekhawat"
                fill
                className="object-cover"
                loading="eager"
                layout="fill"
              />
            </div>
            <SocialLinks />
          </div>
          <div className="col-span-6 md:col-span-4">
            <h1 className="text-3xl mb-2">Hello 👋🏼, I'm Dev Shekhawat</h1>
            <h1 className="text-2xl">I build awesome stuff for web.</h1>
            <div className="text-gray-400 text-l [&>p]:my-4 leading-8">
              <p>
                I am software engineer from India 🇮🇳.{' '}
                I've been in the tech game for over 6 years now, mainly focusing on building{' '}
                strong and scalable web applications.{' '}
                Currently,{' '}
                I am working on developing innovative features for the rich content editor at{' '}
                <a className="text-purple-500" href="https://hashnode.com" target="_blank">Hashnode. </a>
              </p>
              <p>
                I love writing about JavaScript, engineering productivity,
                and whatever new tech I'm diving into. You can find my blog{' '}
                <Link className="text-purple-500" href="/blog">here</Link>.{' '}
              </p>
              <p>
                I try to learn the best technologies that can solve the problem in hand and don't{' '}
                stay attached to any particular stack or library. I believe in the right tool for the right job.{' '}
              </p>
              <p>A few things I like:</p>
              <ul className="list-disc">
                <li>Seeing my code free of eslint errors.</li>
                <li>Collaborating with early and mid-stage startups that create developer tools.</li>
                <li>Working with smartest people in the industry. The best way to tackle a challenging problem is just simple asking those who know.</li>
                <li>An inspiring work environment where I feel heard.</li>
                <li>Staying up to date with new web technologies.</li>
                <li>Playing story driven open world games. Although, First person shooters make me dizzy.</li>
              </ul>
            </div>
          </div> 
        </div>
        <div className="mb-40 text-xl sm:text-2xl md:text-4xl mt-10 text-center">🛌 🧑‍💻 🧘 🏃 🛀 🧑‍💻 🥣 🧑‍💻 🍻 🧑‍💻 🛌</div>
      </div>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const publication = await getPublication();
  return {
    title: publication?.author.name,
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
