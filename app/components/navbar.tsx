import Link from "next/link";
import { usePathname } from "next/navigation";

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
    }
]
const Navbar = ({ hide = false }: { hide: boolean }) => (
    <nav className={`px-5 py-3 transition-all diration-300 opacity-${hide ? '0' : '1'}`}>
        <ul className="flex gap-x-4 text-sm">
            {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                    <HeaderLink href={href}>{label}</HeaderLink>
                </li>
            ))}          
        </ul>
    </nav>
)

export default Navbar;