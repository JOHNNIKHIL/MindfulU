//Part 3 of the code
const CardSection = () => {
    return (
      <div className="p-4 mx-4 my-6 bg-gray-200 rounded-lg">
        <div className="border-b border-black">
          <h3 className="text-xl font-semibold text-gray-800">Topic</h3>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            This is just a sample text. This is just a sample text. This is just a sample text.
          </p>
        </div>
        <button className="px-2 py-1 mt-5 text-sm rounded-md bg-blue-500 text-white">
          Small Button
        </button>
      </div>
    );
  };
  
  export default CardSection;
// this is the  section which has blogs which are part of the main class and is displayed as main cards in the 