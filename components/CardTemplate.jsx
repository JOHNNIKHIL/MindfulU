// this component is the actual card for the blog 
import Link from "next/link";
const CardTemplate = ({topic,information,slug}) => {
    return (
      <div className="p-4 mx-4 my-6 bg-gray-200
       rounded-lg grid box-content
        min-h-[370px]  grid-flow-row">
        <div className="border-b border-black">
          <h3 className="text-lg font-semibold">{topic}</h3>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            {information}
          </p>
        </div>
        <Link href={`/${slug}`}>
        <button className="px-2 py-1 mt-5 text-sm rounded-md shadow-2xl bg-gray-800 text-white hover:bg-pink-800 transition">
          Read More
        </button></Link>
      </div>
    );
  };
  
  export default CardTemplate;
  