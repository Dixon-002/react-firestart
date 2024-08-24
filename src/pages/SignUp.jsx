import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearMessage, signUpAction } from "../redux/actions/authActions";
import AUTH_ERROR_CODES from "../constants/authErrorMessages";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    dispatch(clearMessage());

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);

    await dispatch(signUpAction(formData, navigate));
    
    setLoading(false);
  };

  const signUpError = useSelector((state) => state.auth?.signUpError);

  return (
    <section className="bg-white">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h3 className="text-2xl font-medium">Create your account</h3>
          <div className="mt-6">
            <div>
              <label className="text-gray-500">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border bg-white px-4 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Enter your full name"
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-4">
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
            <div className="mt-4">
              <label className="text-gray-500">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border bg-white px-4 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Enter your password"
                required
                autoComplete="off"
              />
            </div>

            {signUpError && <p className="mt-4 text-red-700">{AUTH_ERROR_CODES[signUpError]}</p>}
            <button 
              type="submit"
              className="bg-black text-white mt-6 px-6 py-2.5 rounded-lg min-w-40 text-center w-full"
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>

            <div className="mt-6">
              <span className="text-gray-500">Have an account? </span><Link to="/signin">Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};