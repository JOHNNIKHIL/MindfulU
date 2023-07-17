//part 6 of the code
// This is the navbar
import Link from "next/link";
const Nav = () => {
    return (
      <div className="flex sticky z-50 mix-blend-normal shadow-xl text-white  bg-gradient-to-r from-blue-500  to-violet-500 items-center justify-between px-12 drop-shadow-xl">
        <Link href="/" ><h1 className="text-white text-[24px]">Tech-Esterz</h1></Link>
        <nav className="space-x-4">
          <ul className="flex flex-row content-around align-middle justify-around m-2">
            <li className="mx-5 text-[16px]">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-5 text-[16px]">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Nav;
  