import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createUser, loading, setLoading, updateUser} = useContext(AuthContext);

    const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    if(newPassword !== confirmPassword){
        return toast.error("Password not matched!")
    }

    try {
        setLoading(true);
        await createUser(email, newPassword)
        .then(() => {
            updateUser(name)
            .then(()=>{
                toast.success("User created successfully");
                navigate('/');
            })
            .catch(err =>{
                toast.error(err.message);
                setLoading(false);
            })
        })
        .catch(err => {
            toast.error(err.message);
            setLoading(false);
        })
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="Enter Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              name="newPassword"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <div>
            <Link to={"/login"}>
              <h1>Login</h1>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
