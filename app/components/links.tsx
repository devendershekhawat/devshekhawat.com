import { FaXTwitter, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5';
import Link from 'next/link';


export const SocialLink = ({ href, label, Icon, breakAt }: { href: string, label: string, Icon: React.ReactNode, breakAt: 'md' | 'lg' }) => (
    <Link
      className={`flex flex-row gap-3 text-3xl md:text-sm lg:text-base`}
      href={href}
    >
      {Icon}
      <span className={`hidden ${breakAt === 'lg' ? 'lg:block' : 'md:block' }`}>
        {label}
      </span>
    </Link>
)

export const SocialLinks = ({ breakAt = 'md' }: { breakAt?: 'md' | 'lg' }) => (
    <div className={`flex flex-row gap-5 mt-4 ${breakAt === 'lg' ? 'lg:flex-col' : 'md:flex-col' }`}>
        <SocialLink
            href="https://x.com/dev_is_a_dev"
            label='Twitter /@dev_is_a_dev'
            Icon={<FaXTwitter />}
            breakAt={breakAt}
        />
        <SocialLink
            href="https://www.linkedin.com/in/devender-shekhawat-659380239/"
            label='Connect on LinkedIn'
            Icon={<FaLinkedinIn />}
            breakAt={breakAt}
        />
        <SocialLink
            href="https://github.com/devendershekhawat"
            label='Check my Github'
            Icon={<FaGithub />}
            breakAt={breakAt}
        />
        <SocialLink
            href="https://x.com/dev_is_a_dev"
            label='My channel on YouTube'
            Icon={<FaYoutube />}
            breakAt={breakAt}
        />
        <SocialLink
            href="mailto:devender.shekhawat0296@gmail.com"
            label='Email me'
            Icon={<IoMail />}
            breakAt={breakAt}
        />
    </div>
)