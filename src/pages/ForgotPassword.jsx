import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearMessage, resetPasswordAction } from "../redux/actions/authActions";
import AUTH_ERROR_CODES from "../constants/authErrorMessages";

export default function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        dispatch(clearMessage());

        const formData = new FormData();
        formData.append("email", email);

        await dispatch(resetPasswordAction(formData));

        setLoading(false);
    };

    const resetPasswordError = useSelector((state) => state.auth?.resetPasswordError);
    const successMessage = useSelector((state) => state.auth?.successMessage);

    return (
        <section className="bg-white">
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <h3 className="text-2xl font-medium">Forgot password?</h3>
                <p className="text-gray-600 mt-1.5">No worries, we'll send you reset instructions.</p>
                <div className="mt-6">
                <div>
                    <label className="text-gray-500">Email</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1.5 block w-full rounded-lg border bg-white px-4 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    placeholder="Enter your email"
                    required
                    autoComplete="off"
                    />
                </div>
                {resetPasswordError && <p className="mt-4 text-red-700">{AUTH_ERROR_CODES[resetPasswordError]}</p>}
                {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
                <button 
                    type="submit"
                    className="bg-black text-white mt-6 px-6 py-2.5 rounded-lg min-w-40 text-center w-full"
                >
                    {loading ? 'Loading...' : 'Reset Password'}
                </button>

                <div className="mt-6">
                    <span className="text-gray-500">Back to </span><Link to="/signin">Sign In</Link>
                </div>
                </div>
            </form>
            </div>
        </section>
    );
};
