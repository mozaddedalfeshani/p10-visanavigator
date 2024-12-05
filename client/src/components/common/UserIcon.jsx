import React from "react";

const UserIcon = ({ user }) => {
  const firstName = user?.displayName?.split(" ")[0] || "Anonymous";
  return (
    <div className="flex-row flex gap-3 shadow-sm items-center justify-around">
      <button className="flex flex-row justify-center items-center gap-1">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src={user?.photoURL || "default-avatar.png"}
              alt={`${user?.displayName || "User"}'s avatar`}
            />
          </div>
        </div>
        <p>Logout</p>
        {/* <FiLogOut className="w-10" /> */}
      </button>
    </div>
  );
};

export default UserIcon;
