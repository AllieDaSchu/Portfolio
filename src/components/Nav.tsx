import {Link} from 'react-router-dom'

const Nav = () => {

    return (
        <>
            <div className="fixed w-[100%] h-[60px] top-0 bg-linear-to-br from-celtic-950 to-celtic-700 z-1000">
                <nav className="flex items-center px-[50px] h-[100%] justify-between text-white items-center">
                    <div className="flex text-zinc-200 justify-center items-center dancing-script-regular text-3xl size-[2.5rem] outline-2 relative before:content-[''] before:block before:bg-radial/decreasing before:from-tan-100 before:to-tan-500 before:h-[calc(100%+10px)] before:w-[calc(100%+10px)] before:absolute before:z-[-1] before:[filter:blur(5px)] before:opacity-0 hover:before:opacity-100 hover:text-zinc-800 transition-all duration-500 ease-in-out before:transition-all before:duration-500 before:ease-in-out">
                        <Link to="/" className="h-[2.25rem]">AS</Link>
                    </div>
                    <div className="merriweather-regular items-center h-[100%] flex gap-[20px]">
                            <Link className="flex items-center h-[100%] px-[10px] relative before:content-[''] before:bg-celtic-600 before:absolute before:z-[-1] before:top-[0px] before:left-[0px] before:h-[0px] before:w-[100%] hover:before:h-[100%] before:transition-h before:duration-300 before:ease-in-out hover:decoration-inherit underline decoration-transparent transition-all duration-300 ease-in-out" to="/webProjects">Web Projects</Link>
                            <Link className="flex items-center h-[100%] px-[10px] relative before:content-[''] before:bg-celtic-600 before:absolute before:z-[-1] before:top-[0px] before:left-[0px] before:h-[0px] before:w-[100%] hover:before:h-[100%] before:transition-h before:duration-300 before:ease-in-out hover:decoration-inherit underline decoration-transparent transition-all duration-300 ease-in-out" to="/contact">Contact</Link>
                    </div>
                </nav>
            </div>
        </>
        
    )
}

export default Nav;