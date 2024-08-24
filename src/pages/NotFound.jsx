import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="bg-white">
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6">
                <div className="w-full max-w-md">
                    <h1 className="text-8xl font-medium">404</h1>
                    <h4 className="text-2xl font-medium mt-4">Ooops! Page Not Found</h4>
                    <p className="text-gray-600 mt-4">This page doesn't exist or was removed! We suggest you back to home page</p>
                    <Link to="/" className="inline-block bg-black text-white mt-6 px-6 py-2.5 rounded-lg min-w-40 text-center w-full">Back to Home</Link>
                </div>
            </div>
        </section>
    );
};
