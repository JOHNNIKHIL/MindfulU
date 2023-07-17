import CardTemplate from "@/components/CardTemplate";

const BlogTen = ()=>{
    
    const topic = "Guest Experts and Interviews: Amplifying Mental Health Expertise and Insights";
    const information ="Invite mental health professionals and experts for interviews, guest articles, and Q&A sessions to enhance understanding and provide expert advice. Access diverse perspectives, evidence-based insights, and practical strategies for students' well-being. Collaborate with counseling services, promote engagement, and provide follow-up support for a meaningful impact."

    const slug ="blogs/BlogNoTen"

    return <CardTemplate  topic={topic} information={information} slug={slug} />
     
     
    
    
    
};
export default BlogTen;
