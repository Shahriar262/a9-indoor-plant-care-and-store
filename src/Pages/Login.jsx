import React, { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const { login, signInWithEmailFunc, setLoading, sendPassResetEmailFunc } =
    useContext(AuthContext);

  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Logged In successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode);
      });
  };

  const handleGoogleSignin = () => {
    console.log("google signin");
    signInWithEmailFunc()
      .then((res) => {
        console.log(res);
        setLoading(false);
        setUser(res.user);
        navigate("/");
        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleForgetPassword = () => {
    console.log();
    const email = emailRef.current.value;
    sendPassResetEmailFunc(email)
      .then((res) => {
        setLoading(false);
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <form onSubmit={handleLogin} className="space-y-5">
          <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-2 top-9 cursor-pointer z-50"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          <button
            onClick={handleForgetPassword}
            className="hover:underline cursor-pointer"
            type="button"
          >
            Forget password?
          </button>

          <button type="submit" className="my-btn">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 mb-[10px]">
            <div className="h-px w-16 bg-black/30"></div>
            <span className="text-sm text-black/70">or</span>
            <div className="h-px w-16 bg-black/30"></div>
          </div>

          {/* Google Signin */}
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="flex items-center justify-center gap-3 bg-transparent border text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="text-center text-sm text-black/80 mt-3">
            Don’t have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-green-700 hover:text-emerald-500 underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
