import React from "react"
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard"

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
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
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  )
}

export default Experience
