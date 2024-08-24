import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import image from "../assets/fire.svg";

export default function Welcome() {
    const userData = useSelector(state => state.auth?.userData);

    return (
       <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-between min-h-dvh">
            <header className="border-b border-black pb-4">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-medium">React <span style={{ color: '#fd642b' }}>Firestart</span></h2>
                    <div>
                        {userData ? <Link to='/'>Dashboard</Link> : <Link to='/signin'>Sign In</Link>}
                    </div>
                </div>
            </header>
            <main>
                <div className="relative flex flex-col gap-24 md:gap-0 items-center justify-center h-full w-full">
                    <h1 className="text-[80px] md:text-[100px] lg:text-[140px] uppercase text-left w-full">
                        React
                    </h1>
                    <div className="absolute">
                        <img src={image} alt="Firestart" className="max-h-40 md:max-h-80" />
                    </div>
                    <h1 className="text-[80px] md:text-[100px] lg:text-[140px] uppercase text-right w-full">
                        start
                    </h1>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 w-full">
                    <Link to='https://react.dev/learn' target="_blanck" className="bg-black text-white px-6 py-2.5 rounded-3xl min-w-40 text-center">React</Link>
                    <Link to='https://tailwindcss.com/docs/utility-first' target="_blanck" className="bg-black text-white px-6 py-2.5 rounded-3xl min-w-40 text-center">Tailwind</Link>
                    <Link to='https://firebase.google.com/docs/guides' target="_blanck" className="bg-black text-white px-6 py-2.5 rounded-3xl min-w-40 text-center">Firebase</Link>
                </div>
            </main>
            <footer className="py-4 md:py-12 border-t border-black mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="text-5xl">Welcome</div>
                    <div className="text-xl">Optimise your development: Build faster and smarter with powerful integrated tools</div>
                </div>
            </footer>
       </div>
    );
};
