import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg  disabled:opacity-95 mt-4">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <span>Have an Account?</span>
        <Link to={"/sign-in"}>
          <span className="text-blue-600">SignIn </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
