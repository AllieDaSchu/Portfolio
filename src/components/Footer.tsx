import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faPaperclip} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <>
            <div className="bg-celtic-950 text-white pt-[30px] pb-[10px] raleway-regular text-sm">
                <div className="flex flex-col sm:flex-row w-auto px-[20%] sm:px-[0px] justify-around max-w-[1000px] m-auto">
                    <div>
                        <h3 className="merriweather-regular text-xl">Allison Schuliger</h3>
                        <p className="italic pt-[10px]">Persistent problem-solver, passionate developer.</p>
                    </div>
                    <div className="flex flex-col pb-[10px] sm:pb-[0px]">
                        <h3 className="merriweather-regular text-xl">Resources and Contact</h3>
                        <a className="cursor-default" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><p className="cursor-pointer inline-block"><FontAwesomeIcon icon={faPaperclip} className="pr-[5px]" />Resume</p></a>
                        <a className="cursor-default" href="https://github.com/AllieDaSchu?tab=repositories"><p className="cursor-pointer inline-block"><FontAwesomeIcon icon={faGithub} className="pr-[5px]" />GitHub</p></a>
                        <a className="cursor-default" href="https://www.linkedin.com/in/allison-schuliger/"><p className="cursor-pointer inline-block"><FontAwesomeIcon icon={faLinkedin} className="pr-[5px]" />LinkedIn</p></a>
                        <a className="cursor-default" href="mailto:aschuliger@gmail.com"><p className="cursor-pointer inline-block"><FontAwesomeIcon icon={faEnvelope} className="pr-[5px]" />aschuliger@gmail.com</p></a>
                    </div>
                </div>
                <p className="merriweather-regular text-center pt-[30px]">Allison Schuliger - © 2025</p>
            </div>
        </>
    )
}

export default Footer