import Link from "next/link";

export default function Header() {
    const styledLink = `p1 m-2 text-xl hover:underline `;
    return (
        <header className={`bg-amber-950 text-center`}>
            <h2 className={`p1 text-xl`}>Books Page</h2>
            <p>
                A page displaying some books
            </p>
            <nav>
                <ul>
                    <li><Link href={`/`} className={styledLink}>Home</Link></li>
                    <li><Link href={`/about`} className={styledLink}>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}