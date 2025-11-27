import myImage from "../assets/schuliger-allison.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faPaperclip} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react"


const Header = () => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        setReady(true)
    }, [])
    return (
        <>
            <div className="bg-tan-50 h-[700px] flex shadow-md pt-[60px] flex-col-reverse sm:flex-row sm:h-[400px] md:h-[400px] lg:h-[500px]">
                <div style={{ backgroundImage: `url(${myImage})` }} className={`${ready ? "translate-x-0" : "-translate-x-full"} transform transition-transform duration-1000 ease-in-out w-[100%] h-[100%] [clip-path: none] bg-center bg-cover bg-no-repeat sm:[clip-path:polygon(0%_0%,100%_0%,90%_100%,0%_100%)] sm:w-[50%] md:w-[40%] lg:w-[50%]`} />
                <div className="flex justify-center flex-col w-[100%] px-[50px] py-[30px] sm:w-[40%] sm:p-[0px] md:w-[50%] lg:w-[40%] m-auto gap-[15px]">
                    <h2 className="cormorant-upright-regular text-3xl">Hello, I am</h2>
                    <h1 className={`${ready ? "w-[100%]" : "w-[0px]"} pb-[6px] overflow-hidden transform transition-w duration-1000 ease-in-out merriweather-regular text-5xl text-nowrap sm:text-wrap md:text-nowrap`}>Allison Schuliger</h1>
                    <p className="raleway-regular text-xl">Website Development Student at Purdue University</p>
                    <div className="flex gap-[15px]">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><button className="cursor-pointer text-md rounded-md bg-celtic-800 hover:bg-celtic-950 hover:shadow-all-over scale-100 hover:scale-110 transition-all duration-500 ease text-white px-[7px] py-[2px] gap-[2px]"><FontAwesomeIcon className="pr-[3px]" icon={faPaperclip} />Resume</button></a>
                        <a href="https://github.com/AllieDaSchu?tab=repositories" target="_blank" rel="noopener noreferrer"><button className="cursor-pointer text-md rounded-md bg-celtic-800 hover:bg-celtic-950 hover:shadow-all-over scale-100 hover:scale-110 transition-all duration-500 ease text-white px-[7px] py-[2px] gap-[2px]"><FontAwesomeIcon className="pr-[3px]" icon={faGithub} />GitHub</button></a>
                        <a href="https://www.linkedin.com/in/allison-schuliger/" target="_blank" rel="noopener noreferrer"><button className="cursor-pointer text-md rounded-md bg-celtic-800 hover:bg-celtic-950 hover:shadow-all-over scale-100 hover:scale-110 transition-all duration-500 ease text-white px-[7px] py-[2px] gap-[2px]"><FontAwesomeIcon className="pr-[3px]" icon={faLinkedin} />LinkedIn</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header