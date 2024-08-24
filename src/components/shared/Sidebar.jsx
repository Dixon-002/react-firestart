import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faUsers, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";

export default function Sidebar({ isShowing = false, onClose = () => {}, onSignOut = () => {} }) {

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const translate = isShowing ? 'translate-x-0' : '-translate-x-full lg:translate-x-0';

    return (
        <aside className={"fixed top-0 left-0 flex flex-col w-80 h-full z-20 transition-transform duration-300 ease-in-out " + translate}>
            <div className="relative flex flex-col flex-1 bg-white border-r p-6">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-medium">React <span style={{ color: '#fd642b' }}>Firestart</span></h2>
                    <button onClick={onClose} className="lg:hidden">
                        <FontAwesomeIcon icon={faXmark} size="xl" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <ul className="max-h-[calc(100vh-200px)]">
                        <li>
                            <Link to="/" className={"flex items-center gap-4 px-4 py-2.5 font-medium rounded-2xl mt-4 " + 
                                (isActive("/") ? 'bg-orange-50 text-orange-500 hover:bg-orange-100' : "hover:bg-gray-100") }
                            >
                                <FontAwesomeIcon icon={faChartColumn} className="h-4 w-4" />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/example" className={"flex items-center gap-4 px-4 py-2.5 font-medium rounded-2xl mt-4 " + 
                                (isActive("/example") ? 'bg-orange-50 text-orange-500 hover:bg-orange-100' : "hover:bg-gray-100") }
                            >
                                <FontAwesomeIcon icon={faUsers} className="h-4 w-4" />
                                Example
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr />
                <button onClick={onSignOut} className="flex items-center gap-4 px-4 py-2.5 font-medium rounded-2xl mt-4 hover:bg-gray-100">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="h-4 w-4" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
};