"use client";
import BlogOne from "@/app/blogContent/BlogOne";
import BlogTwo from "@/app/blogContent/BlogTwo";
import Image from 'next/image'
import Footer from "./Footer";
import BlogThree from "@/app/blogContent/BlogThree";
import BlogFour from "@/app/blogContent/BlogFour";
import BlogFive from "@/app/blogContent/BlogFive";
import BlogSix from "@/app/blogContent/BlogSix";
import BlogSeven from "@/app/blogContent/BlogSeven";
import BlogEight from "@/app/blogContent/BlogEight";
import BlogNine from "@/app/blogContent/BlogNine";
import BlogTen from "@/app/blogContent/BlogTen";


const MainClass = () => {
  
 
  return (<div>
    <div className="px-5 pb-6 bg-violet-700 mix-blend-colors ">
      <div className="text-white ">
        <h1 className=" text-[28px] font-bold md:text-[38px]   md:ml-6 md:p-3 md:pd-1">MindfulU</h1>

        <div className="px-[38px] box-content bg-violet-600 mb-6 z-50 shadow-2xl rounded-xl m-3  mt-1 grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-2  font-light">
      <h1 className=" text-[28px] md:text-[30px] lg:text-[48px]  md:mr-6">Your go-to destination for addressing the mental health challenges faced by students.</h1>
      
      <div><p className="text-[18px] md:text-[20px] lg:text-[30px]">
         We understand the unique pressures and demands that come with student life, and our mission is to provide a comprehensive resource hub designed to empower and support students in their journey towards improved well-being.
      </p></div>
    </div>
    <Image  className= "place-content-center" src="/study.svg"  width={500} height={500} alt="A sad Person" />
    </div>
  
      </div>

      <div className="text-white font-small p-4 m-3  rounded-2xl mb-5 bg-gradient-to-br from-teal-700 to bg-cyan-800 shadow-2xl z-50">
      <h1 className="text-[26px] mb-4 " >Why choose MindfulU</h1>
      <p className="text-lg">
        At MindfulU, we believe that mental health is just as important as physical health. We offer a wealth of information, insights, and practical strategies to help students navigate the complexities of student life while nurturing their mental well-being. Our content covers a wide range of topics, including stress management techniques, self-care practices, effective study strategies, and guidance on balancing academics with personal growth.
      </p>
      <p className="text-lg">
        We are here to be your trusted companion on the path to a healthier mind and a more fulfilling student experience. Join us on this transformative journey towards mental well-being and discover the tools and inspiration you need to flourish as a student. Take the first step today with MindfulU!
      </p>
      <p className="text-lg">
        Remember, your mental health matters, and we are here to help you prioritize it. Together, lets create a healthier and more mindful student community.
      </p>
      <p className="text-lg mt-4 ">
        Please note that while we strive to provide valuable information and resources, our content does not replace professional advice. If you are experiencing severe or ongoing mental health concerns, we strongly recommend seeking assistance from qualified professionals.
      </p>
      </div>

      
        <div className="grid grid-cols-1 box-content p-3 z-50 shadow-2xl rounded-xl bg-gradient-to-br from-blue-500 to-[#706bf4]   mx-4  md:grid-cols-2  lg:grid-cols-3">
          <BlogOne />
          <BlogTwo />
          <BlogThree />
          <BlogFour />
          <BlogFive />
          <BlogSix />
          <BlogSeven />
          <BlogEight />
          <BlogNine />
          <BlogTen />
          
        </div>

        </div>
          <Footer />
        </div>
      
  );
};

export default MainClass;
