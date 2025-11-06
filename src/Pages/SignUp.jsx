import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, updateProfileFunc } = useContext(AuthContext);
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    //Password validation
    const uppercaseLetter = /[A-Z]/;
    const lowercaseLetter = /[a-z]/;

    if (!uppercaseLetter.test(password)) {
      toast.error("Password must have at least one uppercase letter");
      return;
    }

    if (!lowercaseLetter.test(password)) {
      toast.error("Password must have at least one lowercase letter");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
             console.log(result);

            toast.success("Registered Successfully");
            navigate("/");
          })
          .catch((e) => {
            console.log(e);
            toast.error(e.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Photo</label>
            <input
              type="text"
              name="photo"
              placeholder="Your photo URL here"
              required
              className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              required
              className="input input-bordered w-full bg-white/20 placeholder-black/60  focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              required
              className="input input-bordered w-full bg-white/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-2 top-9 cursor-pointer z-50"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          <button type="submit" className="my-btn">
            Register
          </button>

          <div className="text-center mt-3">
            <p className="text-sm text-black/90">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-green-700 hover:text-emerald-500 font-medium underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
