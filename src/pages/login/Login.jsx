import { Link } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const authInfo = useContext(AuthContext);
  const { loginUser } = authInfo;


  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {})
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="bg-[var(--bg-primary)]">
      <Navbar></Navbar>

      <div className="hero min-h-[calc(100vh-84px)]">
        {/* <div className="hero-content"> */}

        <div className="card shadow-xl bg-base-100 w-2/3 max-w-md">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <Link to="/register">
              <p className="my-4">
                Not registred yet?{" "}
                <span className="font-semibold text-blue-500 hover:underline cursor-pointer">
                  Register
                </span>
              </p>
            </Link>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
