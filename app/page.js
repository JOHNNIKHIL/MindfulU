//Part 1 of the code
import Nav from "@/components/Nav";
import MainClass from "@/components/MainClass";
import {Analytics} from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  return (
   
   <main>
    <Nav />
    <MainClass />
<Analytics />
<SpeedInsights/>
    
    </main>
  );
};

// This is the main Entry to the app. It contains all of the components which are in Component folder . It has two main parts : Navbar and MainClass .
// The components in component folders are : MainClass , Nav , CardSection , CardMain , SideSection .