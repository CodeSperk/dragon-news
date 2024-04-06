import { Link } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photoUrl = form.get('photoUrl');
    console.log(name,email,password, photoUrl);
  }


  return (
    <div className="bg-[var(--bg-primary)]">
      <Navbar></Navbar>

      <div className="hero min-h-[calc(100vh-84px)]">
        {/* <div className="hero-content"> */}
         
          <div className="card shadow-xl bg-base-100 w-2/3 max-w-md">
            <form className="card-body" onClick={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photo url"
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
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
             
                <Link to="/login">
                <p className="my-4">Already registred? <span className="font-semibold text-blue-500 hover:underline cursor-pointer">Login</span></p>
                </Link>
              
            </form>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Register;
