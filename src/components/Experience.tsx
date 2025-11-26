import {useState} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faUserGroup} from '@fortawesome/free-solid-svg-icons'


interface Experience {
    name: string;
    years: string;
    company: string;
    desc: string;
    specifics: string[];
}

const experiences: Experience[] = [
    {
        name: "Student Website Developer",
        years: "2024 - Present",
        company: "Purdue University, Forestry and Natural Resources",
        desc: "I serve as a Student Website Developer for Purdue University’s Department of Forestry and Natural Resources, where I manage and maintain a wide range of departmental websites. In this role, I work to ensure sites remain functional, accessible, and up to date. My responsibilities include content management, implementing SEO best practices, performing quality assurance checks to verify links and functionality, building and customizing sites with the Purdue WordPress Theme, uploading events, and handling general website upkeep. Through this experience, I have strengthened my skills in both front‑end development and user experience optimization while supporting the digital presence of the department.",
        specifics: [
            "WordPress",
            "Cascade",
            "CSS3",
            "Plugins",
            "SEO Data",
            "Adobe Photoshop",
            "Adobe Acrobat"
        ],
    },
    {
        name: "Degree in Web Programming and Design",
        years: "2022 - Present",
        company: "Purdue University, Computer Graphics Technology",
        desc: "During my time at Purdue University in the Department of Computer Graphics Technology, I have gained a comprehensive foundation in both design and development. My coursework has spanned user experience design, front‑end development, and full‑stack practices, allowing me to cultivate a balanced skill set that integrates technical proficiency with creative problem‑solving. Through these experiences, I have developed a strong understanding of the demands of modern web development and the ability to create solutions that are both functional and user‑centered.",
        specifics: [
            "React",
            "Next.js",
            "Vite",
            "HTML5",
            "CSS3",
            "JavaScript",
            "PHP",
            "MySQL",
            "PostgreSQL",
            "GitHub",
            "Vercel",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Figma"
        ],
    },
    {
        name: "Minor in Computer Science",
        years: "2023 - Present",
        company: "Purdue University, Computer Science",
        desc: "As a student in Purdue University’s Department of Computer Science, I have built a strong foundation in programming and computational problem‑solving. My coursework has included Problem Solving and Object‑Oriented Programming, Foundations of Computer Science, Programming in C, Computer Architecture, and Data Structures and Algorithms. Through these courses, I gained proficiency in Java, C, and C++, while also developing a deeper understanding of core computer science principles. This experience has equipped me with both the technical skills and analytical approaches necessary to tackle complex programming challenges and contribute effectively to software development projects.",
        specifics: [
            "Java",
            "C",
            "C++",
        ],
    },
    {
        name: "Saxophone Student Leader and Member",
        years: "2022 - Present",
        company: "Purdue All-American Marching Band",
        desc: "During my time at Purdue University, I was an active member of the Purdue “All‑American” Marching Band, serving in the saxophone section for four years. Over the course of my involvement, I advanced through multiple leadership roles, culminating in my position as Section Leader in 2025. In these roles, I guided my section through band camp, rehearsals, sectionals, game days, and performances, ensuring both musical excellence and team cohesion. I also maintained consistent communication with directors to coordinate expectations and support the success of the ensemble. This experience strengthened my leadership, collaboration, and organizational skills while contributing to the tradition and spirit of the Purdue Marching Band.",
        specifics: [
            "2025, Section Leader",
            "2024, Rank Leader",
            "2023, Assistant Rank Leader",
            "2022, Member",
        ],
    },
]

const Experience = () => {
    const [open, setOpen] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setOpen(open === index ? null : index)
    }
    return (
        <>
        <div className="bg-tan-50">
            <div className="m-auto px-[25px] py-[50px] max-w-[1000px] w-[100%]">
                <h2 className="merriweather-regular text-3xl pb-[15px]">Experiences</h2>
                {experiences.map((item, index) => (
                    <>
                        <div className="py-[5px]">
                            <div key={index} onClick={() => handleToggle(index)} className={`${open === index ? "bg-celtic-700" : "bg-celtic-800"} group hover:shadow-all-over transition-all duration-300 ease cursor-pointer flex items-center justify-between raleway-regular max-1-[800px] w-[100%] m-auto px-[20px] py-[10px] text-white rounded-2xl`}>
                                <h3 className="text-lg">{item.name}</h3>
                                <div className="flex text-lg gap-[20px] items-center">
                                    <p className="text-right">{item.years}</p>
                                    <div className={`box-content rounded-full size-[25px] bg-celtic-900 flex items-center justify-center p-[7px]`}>
                                        <FontAwesomeIcon icon={faPlus} className={`${open === index ? "rotate-45" : "rotate-0"} transition-all duration-300 ease`}/>
                                    </div>
                                </div>
                            </div>
                            <div className={`${open === index ? "max-h-[670px] sm:max-h-[370px] md:max-h-[320px] lg:max-h-[250px]" : "max-h-[0]"} overflow-hidden transtion-all duration-500 ease-in-out whitespace-nowrap raleway-regular bg-celtic-600 rounded-xl px-[20px] mt-[10px] text-white`}>
                                <p className="py-[10px] text-wrap"><FontAwesomeIcon icon={faUserGroup} className="pr-[10px]" />{item.company}</p>
                                <p className="pb-[10px] text-wrap">{item.desc}</p>
                                <div className="flex pb-[10px] gap-[5px] flex-wrap">
                                    {item.specifics.map((specific, i) => (
                                        <div key={i} className="bg-celtic-900 rounded-full px-[10px] py-[2px]">
                                            <p>{specific}</p>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
            
        </>
    )
}

export default Experience