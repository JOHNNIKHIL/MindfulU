//part 6 of the code
// This is the navbar
const Nav =()=>{
    return(
    <div className="flex text-slate-400 bg-gray-900  items-center justify-between px-12 drop-shadow-xl ">
        <h1 className="">Tech-Esterz</h1>
        
        <nav className=" space-x-4">
      <ul className="flex flex-row content-around align-middle justify-around m-2 ">
        <li className="mx-5">
          <a href="/">Home</a>
        </li>
        <li className="mx-5">
          <a href="/about">About</a>
        </li>
       
      </ul>
    </nav>
        
    </div>
    );
}
export default Nav;