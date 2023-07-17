import CardTemplate from "@/components/CardTemplate";

const BlogOne = ()=>{
    
    const topic = "Stress Management 101: Effective Strategies for Students";
    const information ="Effective stress management is essential for students. This article explores practical strategies including mindfulness exercises, time management techniques, relaxation methods, and stress-reducing activities. By implementing these techniques, students can maintain a healthier balance, navigate challenges, and enhance their overall well-being."
    const slug ="blogs/BlogNoOne"

    return (<CardTemplate  topic={topic} information={information} slug={slug}/>

    
    );
     
    
    
    
};
export default BlogOne;

