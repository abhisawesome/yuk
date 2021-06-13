import Link from 'next/link'

const NavBar = () => {
    return (
        <div className="bg-gray-400  dark:bg-gray-800 shadow-xl">
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Yuk</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
                    <div className="text-sm lg:flex-grow text-white ">
                        <Link
                            href="/dashboard"
                        >
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-6 hover:bg-indigo-300">Home</a>
                        </Link>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}

export default NavBar;