import CardTemplate from "@/components/CardTemplate";

const BlogTwo = ()=>{
    
    const topic = "The Importance of Self-Care for Students: Nurturing Well-Being in a Busy World. ";
    const information ="Self-care is vital for students. This article emphasizes the significance of self-care in nurturing well-being amidst a busy student life. It offers suggestions for incorporating self-care into busy schedules, maintaining work-life balance, and nurturing physical and emotional well-being."
    const slug ="blogs/BlogNoTwo"

    return <CardTemplate  topic={topic} information={information} slug={slug} />
     
    
    
    
};
export default BlogTwo;
