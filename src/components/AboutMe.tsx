

const AboutMe = () => {
    return (
        <>
            <div className="m-auto px-[25px] py-[50px] max-w-[1000px] w-[100%]">
                <div id="about">
                    <h2 className="merriweather-regular text-3xl pb-[15px]">About Me</h2>
                    <p className="raleway-regular text-xl">I am a student at Purdue University studying Web
                        Programming and Design with a minor in Computer
                        Science. I currently work as a Student Website
                        Developer for Purdue’s Department of Forestry and
                        Natural Resources. I am in search of a full stack/front end
                        development or software engineering opportunity for August of 2026.</p>
                </div>
                <div id="skills" className="pt-[50px] w-[100%] max-w-[1000px]">
                    <h2 className="merriweather-regular text-3xl pb-[15px]">Software, Technical, and Design Skills</h2>
                    <div className="raleway-regular grid grid-cols-2 sm:grid-cols-4 text-xl">
                        <div className="flex">
                            <ul>
                                <li>React</li>
                                <li>Java</li>
                                <li>Next.js</li>
                                <li>Vite</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div className="flex">
                            <ul>
                                <li>MySQL</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>TailwindCSS</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        <div className="flex">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>CMS</li>
                            </ul>
                        </div>
                        <div className="flex">
                            <ul>
                                <li>Figma</li>
                                <li>Adobe Suite</li>
                                <li>Microsoft Suite</li>
                                <li>Canva</li>
                                <li>Maya 2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;