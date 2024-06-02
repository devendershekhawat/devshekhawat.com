'use client';
import Image from 'next/image';
import { useWindowSize, useWindowScroll } from '@uidotdev/usehooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import { useRef } from 'react';

const getPageTitle = (pathname: string) => {
    switch (pathname) {
        case '/':
            return 'About Me';
        case '/blog':
            return 'Blog';
        default:
            return 'About Me';
    }
};

export default function Header() {
    const { width } = useWindowSize();
    const pathname = usePathname();
    const [{ y: scrollY = 0 }] = useWindowScroll();
    const ref = useRef<HTMLDivElement>(null);

    return (
        <header className={`z-10 border-b border-b-purple-500 w-full bg-[url('/herobg.gif')] bg-no-repeat bg-center bg-cover sticky top-[-${ref.current?.offsetTop}px]`}>
            <div className="bg-gray-700/70">
                <div className="max-w-[1024px] mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="w-[100px] h-[40px] md:hidden relative">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />    
                    </div>
                    <div className="w-[200px] h-[80px] hidden md:block relative">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />    
                    </div>
                    <Navbar hide={scrollY! > ref.current?.offsetHeight!} />
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
                <div ref={ref} className="max-w-[1024px] flex justify-between px-6 py-4 mx-auto">
                    <h1 className="text-xl md:text-3xl">{getPageTitle(pathname)}</h1>
                    <Navbar hide={(!scrollY || !ref.current) ? true : scrollY! < ref.current?.offsetHeight!} />
                </div>
            </div>
        </header>
    )
}