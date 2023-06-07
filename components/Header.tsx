import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image
          src="\McDonalds_Logo_2018.svg"
          width={70}
          height={70}
          alt="Logo"
        />
      </Link>

      
      <div className="flex items-center space-x-2.5 text-sm">
        <Link href="/">
        <button className="button bg-transparent border-zinc-200 hover:bg-red-500 hover:text-yellow-300 hover:border-transparent">
         Shop
        </button>
        </Link>
        <Link href="/cart">
        <button className="button bg-transparent border-zinc-200 hover:bg-red-500 hover:text-yellow-300 hover:border-transparent">
          Cart
          </button>
          </Link>
      </div>
    </header>
  );
}

export default Header;
