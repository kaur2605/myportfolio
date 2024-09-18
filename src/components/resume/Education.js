import React from "react"
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard"

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MSc in Computer Science"
            subTitle="Roskilde University (2017 - 2020)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the IT or areas of Compute science."
          />
          <ResumeCard
            title="Top up Bchelor in Web Development"
            subTitle="IBA (2015 - 2017)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Bachelor in Computer Science"
            subTitle="IGNOU (2007- 2009)"
            result="5.00/5"
            des="During this time with us, I got theoretical and methodological insight into the core aspects of computer science"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2021 - till date
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Meili Robot Inc - (2021 - Present)"
            result="Denmark"
            des="Designed and Developed UI design for different clients using CSS, HTML,
React and Python.Writing clean, sustainable, and scalable code that follows the UI/UX
designs and specifications"
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Karnov Group Inc - (2020 - 2021)"
            result="Denmark"
            des="Designed and developed new highly responsive, web-based user interface
using React concepts.Worked with Agile practice (Scrum, Code Review, Pair programming, CI/CD,
TDD)"
          />
          <ResumeCard
            title="VueJS Developer"
            subTitle="Meeshop inc - (2020 - 2020)"
            result="Denmark"
            des="Created functional components to develop draggable functionality in the footer
part of ecommerce website using Vue.js, bootstrap where project setup was
with PHP(Laravel 7) as backend."
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Education
