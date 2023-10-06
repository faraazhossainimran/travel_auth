import { Link } from "react-router-dom"
import NavBar from "../Shared/NavBar/NavBar"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProviders"


const Register = () => {
    const {createAccount, user} = useContext(AuthContext)
    const handleRegister = (e) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget);
      const email = form.get('email')
      const password = form.get('password')
      createAccount(email, password)
      .then(result => {
       console.log( result.user);
      })
      .catch(error => {
        console.log(error);
      })
    }
    return (
        <div>
                <div>
      <NavBar></NavBar>
      <div className="container mx-auto">
        <div className="hero">
          <div className="hero-content w-[500px] p-4 flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full border rounded-sm">
              <form className="card-body" onSubmit={handleRegister}>
              {user && <p>you are logged in</p>}
                <h1 className="text-xl font-bold">Create an account</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username or Email</span>
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
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                    required
                  />
                  <div className="flex ">
                    <label className="label grow ">
                      <div>
                        <input
                          type="checkbox"
                          className="checkbox"
                        />
                        <a href="#" className="label-text-alt link link-hover">
                          Remember me
                        </a>
                      </div>
                    </label>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover font-semibold text-[#F9A51A]">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                </div>
                
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-[#F9A51A] rounded-sm">Resigter</button>
                </div>
              </form>
              <p className="text-center pb-8">
                Already have an account?
                <Link className="text-[#F9A51A]" to={'/login'}> Login</Link>
              </p>
            </div>
          </div>
        </div>
        <p className="text-center mb-8">Or</p>
        <div className="text-center flex flex-col items-center">
          <button className="border w-[400px] p-4 m-2 rounded-3xl" >Continue with Facebook</button>
          <button className="border w-[400px] p-4 m-2 rounded-3xl">Continue with Google</button>
        </div>
      </div>
    </div>
  
        </div>
    )
}

export default Register