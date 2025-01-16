import Link from 'next/link';
export default function Header() {
    return (
    
        <header className="flex items-center  justify-between font-semibold">
        <Link className = "text-primary font-semibold text-2xl" href="">ClickShop express</Link>
            <nav className="flex items-center gap-10 text-gray-500 semibold">
            <Link href={''}>Home</Link>
            <Link href={''}>Product Menu</Link>
            <Link href={''}>About</Link>
            <Link href={''}>Contact</Link>
            <Link href={''} className="bg-primary rounded-full text-white px-8 py-2" >Login</Link>
            </nav>
        </header>

    );
}