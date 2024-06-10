import Link from "next/link";

export default function NavBar (){
    return(
        <ul className="bg-black h-20 text-white flex items-center justify-between p-6">
            <Link href="/"><li className="text-2xl">LOKER</li></Link>
            <li>Log in</li>
        </ul>
    );
}