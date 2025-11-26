import {Link} from 'react-router-dom'

const Nav = () => {

    return (
        <>
            <div className="fixed w-[100%] top-0 bg-celtic-950 z-1000">
                <nav className="flex px-[50px] py-[10px] justify-between text-white items-center">
                    <div className="flex text-zinc-200 justify-center items-center dancing-script-regular text-3xl size-[2.5rem] outline-2">
                        <Link to="/" className="h-[2.25rem]">AS</Link>
                    </div>
                    <div className="merriweather-regular flex gap-[20px]">
                        <Link to="/webProjects">Web Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
            </div>
        </>
        
    )
}

export default Nav;