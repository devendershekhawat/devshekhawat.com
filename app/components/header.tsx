'use client';
import Image from 'next/image';
import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type HeaderProps = {
    logo?: string | null;
}

const HeaderLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname();
    console.log({ pathname, href });
    return (
        <Link href={href} className={`${pathname === href ? 'text-gray-200 font-medium bg-purple-700' : 'text-gray-300'} px-3 py-2 rounded-full hover:bg-purple-500/60`}>
            {children}
        </Link>    
    );
}

export const NAV_LINKS = [
    {
        href: '/',
        label: 'About Me',
    },
    {
        href: '/blog',
        label: 'Blog',
    },
    {
        href: 'https://www.linkedin.com/in/devender-shekhawat-659380239/',
        label: 'LinkedIn',
    },
    {
        href: 'https://x.com/dev_is_a_dev',
        label: 'Twitter',
    },
]

export default function Header({ logo }: HeaderProps) {
    const { width } = useWindowSize();
    const pathname = usePathname();
    return (
        <header className="w-full bg-[url('/herobg.gif')]">
            <div className="max-w-[1024px] mx-auto px-6 py-4 flex justify-between items-center">
                <div className="w-[100px] h-[40px] md:w-[200px] md:h-[80px] relative">
                    {
                        logo ? (
                            <Image
                                src={`${logo}?t=${new Date().getTime()}`}
                                alt="Logo"
                                fill
                                className="object-contain"
                            />    
                        ) : <span />
                    }
                </div>
                {
                    width && width > 768 ? (
                        <nav className="px-5 py-3">
                            <ul className="flex gap-x-4 text-sm">
                                {NAV_LINKS.map(({ href, label }) => (
                                    <li key={href}>
                                        <HeaderLink href={href}>{label}</HeaderLink>
                                    </li>
                                ))}          
                            </ul>
                        </nav>
                    ) : <span />
                }
            </div>
            <div className="py-3 px-6 bg-purple-700/70 text-center text-sm">
                🎉 I have launched a YouTube channel. Check it out{' '}
                <a
                    href="https://www.youtube.com/channel/UCPEVAh-XhQj9HihguByCXrQ"
                    target="_blank"
                    className="text-purple-100 underline"
                >
                    here
                </a>.
            </div>
        </header>
    )
}