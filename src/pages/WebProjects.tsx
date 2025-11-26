import WebHeader from "../components/WebHeader.tsx"
import hondaWebsite from "../assets/honda-home.png"
import memoryGame from "../assets/memory-game.png"
import fitnessTracker from "../assets/fitness-tracker.png"
import iaaHome from "../assets/iaa-home.png"
import hoverman from "../assets/hoverman-home.png"
import hardiman from "../assets/hardiman-home.png"
import hoskins from "../assets/hoskins-home.png"
import NoT from "../assets/not-home.png"
import tbs from "../assets/tbs-home.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'


const projects = [
    {
        title: "Honda Website Recreation",
        image: hondaWebsite,
        link: "https://alliedaschu.github.io/honda-recreation/",
        types: [
            "React",
            "Vite",
        ],
    },
    {
        title: "Memory Card Matching Game",
        image: memoryGame,
        link: "https://alliedaschu.github.io/MatchingGame/",
        types: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],
    },
    {
        title: "Fitness Tracker",
        image: fitnessTracker,
        link: "https://www.figma.com/proto/F3KhiytNYYwtjA7DKXSUvO/Project-3?node-id=29-5&starting-point-node-id=29%3A5&t=iql1LSQKnkIOwTql-1",
        types: ["UX Design Wireframe"],
    },
    {
        title: "Purdue Tau Beta Sigma",
        image: tbs,
        link: "https://www.purduetbs.com/",
        types: [
            "HTML5",
            "CSS3",
            "Template"
        ],
    },
    {
        title: "Hoverman Ecology Lab",
        image: hoverman,
        link: "https://www.purdue.edu/fnr/hoverman/",
        types: [
            "WordPress",
            "CSS3",
        ],
    },
    {
        title: "Indiana Arborist Association",
        image: iaaHome,
        link: "https://www.indiana-arborist.org/",
        types: [
            "WordPress",
            "CSS3",
        ],
    },
    {
        title: "Dr. Brady Hardiman's Lab",
        image: hardiman,
        link: "https://www.purdue.edu/fnr/sites/hardiman/",
        types: [
            "WordPress",
            "CSS3",
        ],
    },
    {
        title: "Hoskins Ecotoxicology Lab",
        image: hoskins,
        link: "https://www.purdue.edu/fnr/hoskins/",
        types: [
            "WordPress",
            "CSS3",
        ],
    },
    {
        title: "Nature of Teaching",
        image: NoT,
        link: "https://ag.purdue.edu/department/extension/nature/index.html",
        types: [
            "Cascade",
            "CSS3",
        ],
    }
]

function WebProjects() {
    return (
        <>
            <div>
                <WebHeader />
                <div className="max-w-[1200px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-[20px] m-auto mb-[50px]">
                    {projects.map((project) => (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div id="container" style={{ backgroundImage: `url(${project.image})` }} className="cursor-pointer relative overflow-hidden group shadow-all-over bg-top bg-cover bg-no-repeat h-[225px] w-[100%] m-auto rounded-lg">
                            <div className="hidden md:block lg:block bg-celtic-400/0 md:block lg:block overflow-hidden transition-all duration-500 ease-in-out group-hover:bg-celtic-400/80 h-[100%] rounded-lg">
                                <p className="text-white/0 text-lg text-shadow-none group-hover:text-shadow-md transition-all duration-500 ease-in-out group-hover:text-white/100 relative raleway-bold top-[15px] left-[20px]">More Information <FontAwesomeIcon icon={faArrowRightLong} /></p>
                                {project.types.map((type) => (
                                    <div className="inline-block px-[10px] py-[2px] ml-[10px] bg-celtic-900/0 transition-all duration-500 ease-in-out text-white/0 group-hover:bg-celtic-900/100 group-hover:text-white/100 rounded-full text-center relative top-[120px]">
                                        <p>{type}</p>
                                    </div>
                                ))}
                                <div className="group-hover:w-[100%] w-[0px] box-content whitespace-nowrap transition-all duration-500 ease-in-out relative top-[130px] py-[2px] group-hover:pl-[7px] bg-celtic-700 text-white merriweather-regular [filter:drop-shadow(4px_4px_6px_rgba(0,0,0,0.5))] [clip-path:polygon(0%_0%,85%_0%,80%_100%,0%_100%)]">
                                    <p>{project.title}</p>
                                </div>
                                
                            </div>
                            <div className="flex gap-[10px] raleway-regular text-md bg-white py-[15px] px-[15px] justify-between items-center md:hidden lg:hidden">
                                <p>{project.title}</p>
                                <p className="text-right">More Info <FontAwesomeIcon icon={faArrowRightLong} /></p>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WebProjects