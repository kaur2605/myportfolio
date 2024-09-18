import React from "react"
import {
  AiFillAppstore,
  AiFillCodeSandboxSquare,
  AiOutlineAntDesign,
} from "react-icons/ai"
import { FaMobile, FaGlobe } from "react-icons/fa"
import {
  SiProgress,
  SiAntdesign,
  SiMdnwebdocs,
  SiAffinity,
  SiAffinitydesigner,
} from "react-icons/si"
import Title from "../layouts/Title"
import Card from "./Card"
import { HiCode } from "react-icons/hi"

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Designing and implementing the visual aspects of a website or web application, including layouts, navigation menus, buttons, forms, and other interactive elements. This involves using HTML, CSS, and JavaScript to create responsive
           and user-friendly interfaces that work across different devices and screen sizes"
          icon={<AiFillCodeSandboxSquare />}
        />
        <Card
          title="Responsive Design"
          des="A user interface is like a joke. If you have to explain it, it's not that good. I strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser"
          icon={<SiAffinitydesigner />}
        />
        <Card
          title="SEO Optimisation"
          des="Improves the visibility and ranking of websites in search engine results.Creating SEO-friendly websites by focusing on performance, structure, and accessibility."
          icon={<SiProgress />}
        />

        <Card
          title="User Experience (UX) Optimization"
          des=" Collaborating with UX designers to translate design mockups and wireframes into functional user interfaces. Optimizing the user experience by implementing smooth transitions,
           animations, and interactive features that enhance usability and engagement.."
          icon={<SiAntdesign />}
        />
        <Card
          title="Version Control"
          des=" Using version control systems such as Git to manage and collaborate on code changes with other team members. Keeping track of revisions, resolving conflicts, and maintaining a clean and organized codebase."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  )
}

export default Features
