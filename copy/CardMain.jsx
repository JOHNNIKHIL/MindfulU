//Part 4 of the code
// this component is the actual card for the blog 
const CardMain = () => {
    return (
      <div className="p-4 mx-4 my-6 bg-gray-200 rounded-lg">
        <div className="border-b border-black">
          <h3 className="text-lg font-semibold">Topic</h3>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            This is just a sample text. This is just a sample text. This is just
            a sample text. This is just a sample text. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sapiente neque, nobis modi dolores
            veniam, recusandae accusantium ut repellendus blanditiis, esse tempore
            nesciunt? Nobis eligendi quo voluptatum tempora iure deleniti sed.
          </p>
        </div>
        <div>
            
                
            
        </div>
        <button className="px-2 py-1 mt-5 text-sm rounded-md bg-blue-500 text-white">
  Small Button
</button>

      </div>
    );
  };
  
  export default CardMain;