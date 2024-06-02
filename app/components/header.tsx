'use client';
import Image from 'next/image';
import Navbar from './navbar';

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
    return (
        <header className={`z-10 border-b border-b-purple-500 w-full sticky top-0 bg-slate-950`}>
            <div className="max-w-[1024px] mx-auto px-6 py-4 flex justify-between items-center">
                <div className="w-[100px] h-[40px] md:hidden relative">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                    />    
                </div>
                <div className="w-[150px] h-[60px] hidden md:block relative">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                    />    
                </div>
                <Navbar />
            </div>
        </header>
    )
}