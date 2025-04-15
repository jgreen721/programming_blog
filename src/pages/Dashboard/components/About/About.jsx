import React from 'react'
import { GrCloudComputer } from "react-icons/gr";
import { SiInternetcomputer } from "react-icons/si";
import { GiNestedHexagons } from "react-icons/gi";
import "./About.css"

const About = () => {

    const icons =[
        {id:1,color:"rgb(134, 238, 16)",icon:<GrCloudComputer className="description-icon green-icon"/>,shadow:<GrCloudComputer className="shadow-icon"/>},
        {id:2,color:"rgb(0, 255, 234)",icon:<SiInternetcomputer className="description-icon blue-icon"/>,shadow:<SiInternetcomputer className="shadow-icon"/>},
        // {id:3,color:"rgb(217, 255, 0)",icon:<GiNestedHexagons className="description-icon yellow-icon"/>,shadow:<GiNestedHexagons className="shadow-icon"/>},
    ]
  return (
    <section className="about-blog-description-section about-blog-section">
    <div className="desktop-tablet">
        <div className="icons-row">
            {icons.map(icon=>(
                <div className="icon-div">
                  {icon.icon}
                  {icon.shadow}
                 </div>
             ))}
        </div>
    </div>
    <div className="about-blog-description-div">
        <p className="about-blog-description">
        This blog explores the basics of programming through small, approachable snippets of C — one of the foundational languages in computer science. It’s designed for curious beginners and non-programmers who want to peek under the hood of how computers really work. By breaking down simple concepts and focusing on tiny, self-contained examples, the goal is to make programming feel a little less intimidating and a lot more interesting.
        </p>
        <div>
            <GiNestedHexagons className="bg-icon"/>
        </div>
    </div>
    <div className="mobile">
        <div className="icons-row">
            {icons.map(icon=>(
                 <div className="icon-div">
                  {icon.icon}
                  {icon.shadow}
                </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default About