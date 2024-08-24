import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearMessage, signInAction } from "../redux/actions/authActions";
import AUTH_ERROR_CODES from "../constants/authErrorMessages";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    dispatch(clearMessage());

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    await dispatch(signInAction(formData, navigate));

    setLoading(false);
  };

  const signInError = useSelector((state) => state.auth?.signInError);

  return (
    <section className="bg-white">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h3 className="text-2xl font-medium">Sign In</h3>
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
            <div className="text-right mt-4">
              <Link to="/forgot-password" className="text-blue-500">Forgot password?</Link>
            </div>
            {signInError && <p className="mt-4 text-red-700">{AUTH_ERROR_CODES[signInError]}</p>}
            <button 
              type="submit"
              className="bg-black text-white mt-6 px-6 py-2.5 rounded-lg min-w-40 text-center w-full"
            >
              {loading ? 'Loading...' : 'Sign In'}
            </button>

            <div className="mt-6">
              <span className="text-gray-500">Don't have an account? </span><Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
