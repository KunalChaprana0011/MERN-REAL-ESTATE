import { useSelector } from "react-redux";
import { useRef } from "react";
const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-4xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file" ref={fileRef} hidden accept="image/*"/>
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover self-center mt-2 cursor-pointer"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="rounded-lg border p-3 mt-4"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="rounded-lg border p-3"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="rounded-lg border p-3"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-4">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5 font-semibold">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
