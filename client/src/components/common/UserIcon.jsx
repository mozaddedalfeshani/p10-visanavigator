import React from "react";

const UserIcon = ({ user }) => {
  console.log(user);
  const firstName = user?.displayName?.split(' ')[0] || "Anonymous";
  return (
    <div className="flex-row flex gap-3 shadow-sm btn items-center justify-center">
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img
            src={user?.photoURL || "default-avatar.png"}
            alt={`${user?.displayName || "User"}'s avatar`}
          />
        </div>
      </div>
      <p>{firstName}</p>
    </div>
  );
};

export default UserIcon;
