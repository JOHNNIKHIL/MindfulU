//Part 2 of the code
import CardMain from "./CardMain";
import SideSection from "./SideSection";

// So this is the component which has bunch of components : Its the place where most of the content is, which is bunch of text, blog which are in the form of cards.
// There are primarily 2 sections. main section and side section . main section houses all of the recent blogs and side section has all of the recomended blogs.
const MainClass = () => {
    const message = "Hey Chat GPT, please add a beautiful code snippet that will show some heading and text.";
  
    return (
      <div className="px-5 bg-black">
        <div className="text-white">
          <h1 className="text-3xl font-bold mb-4 ml-6 p-3">Welcome</h1>
          <p className="text-lg ml-11">{message}</p>
        </div>
  
        <div className="grid grid-cols-[70%,30%] p-3">
          <div className="bg-black box-border border-solid border border-black mx-4">
            <CardMain />
            <CardMain />
            <CardMain />
          </div>
  
          <div className="bg-black border-solid border border-black mx-2">
            <SideSection />
          </div>
        </div>
      </div>
    );
  };
  
  export default MainClass;
  