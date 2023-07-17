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
import { useState } from "react";

const MainClass = () => {

  const blogData = [{id:0,},{id:1,},{id:2,},{id:3,},{id:4,},{id:5,},{id:6,},{id:7,},{id:8,},{id:9,},];

  const blogsPerPage = 6;
  const [currentPage,setCurrentPage]=useState(1);
  const indexOfLastBlog = currentPage*blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog,indexOfLastBlog);

  const blogComponents = [
          <BlogOne />,<BlogTwo />,<BlogThree />,
          <BlogFour />,<BlogFive />,<BlogSix />,
          <BlogSeven />,<BlogEight />,<BlogNine />,
          <BlogTen />,          
  ];
   
 
  return (<div>
    <div className=" bg-violet-700 mix-blend-colors pb-5 ">
      <div className="text-white ">
        <h1 className=" text-[28px] font-bold md:text-[38px] ml-[30px] pt-4  md:ml-6 md:p-3 md:pd-1">MindfulU</h1>

        <div className="px-[38px] box-content bg-violet-600 mb-6 z-50 shadow-2xl rounded-xl m-3  mt-1 grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-2  font-light">
      <h1 className=" text-[28px] md:text-[30px] lg:text-[48px]  md:mr-6">Your go-to destination for addressing the mental health challenges faced by students.</h1>
      
      <div><p className="text-[18px] md:text-[20px] lg:text-[30px]">
         We understand the unique pressures and demands that come with student life, and our mission is to provide a comprehensive resource hub designed to empower and support students in their journey towards improved well-being.
      </p></div>
    </div>
    <Image  className= "place-content-center pl-4" src="/study.svg"  width={500} height={500} alt="A sad Person" />
    </div>
  
      </div>

      <div className="text-white font-small font-small p-4 m-3 grid grid-cols-1 md:grid-cols-2 rounded-2xl mb-5 bg-gradient-to-br from-teal-700 to bg-cyan-800 shadow-2xl z-50">
      
      <div className="p-4">
        <h1 className="text-[26px] mb-4" >The Modern Student's Mental State: Navigating Challenges in a Fast-Paced World</h1>
        <h1 className="text-lg m-2">
        In today's fast-paced and demanding academic landscape, students face a myriad of challenges that take a toll on their mental well-being. Juggling rigorous coursework, social pressures, and financial responsibilities can lead to increased stress, anxiety, and feelings of isolation. Moreover, the ever-connected digital world contributes to information overload and negatively impacts sleep patterns. Nurturing student mental health has become imperative to ensure their success and overall quality of life. By prioritizing self-care, seeking support from peers and professionals, and advocating for mental health awareness, students can develop resilience, cope with challenges, and embrace a healthier and more fulfilling academic journey. Addressing mental health concerns empowers students to thrive both academically and personally.
        </h1>
      </div>
      
      <div className="p-4">
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
      </div>
      <div></div>
<div className="box-content pt-3 p-3 mt-3 mb-3 z-50 shadow-2xl  bg-gradient-to-br from-blue-500 to-[#706bf4]">
  <h1 className="text-white pl-5 pr-5 pt-3 pb-2 mr-3 ml-3 text-md md:text-lg lg:text-xl" >
    Discover empowering blogs that nurture your well-being and academic growth. From stress management to resilience-building, MindfulU offers valuable insights and practical strategies tailored for students. Join us on this transformative journey towards a healthier student life and embrace mental well-being with MindfulU blogs.</h1>
      <div className="grid grid-cols-1  mx-4 md:grid-cols-2 lg:grid-cols-3">
        
        {currentBlogs.map((blog,) => (
          <div key={blog.id}>{blogComponents[blog.id]}</div>
        ))}
      </div></div>

      <div className="flex justify-center mt-6">
        <nav>
          <ul className="flex">
            {Array.from({ length: Math.ceil(blogComponents.length / blogsPerPage) }).map((_, id) => (
              <li key={id}>
                <button
                  className={`px-3 py-2 mx-1 rounded-xl ${
                    currentPage === id + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                  }`}
                  onClick={() => setCurrentPage(id + 1)}
                >
                  {id + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        </div>
        </div>
          <Footer />
        </div>
      
  );
};

export default MainClass;
