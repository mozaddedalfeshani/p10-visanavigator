import React from "react";

const UserIcon = ({ user }) => {
  return (
    <div className="flex-row flex gap-3  shadow-sm btn items-center justify-center">
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <p>Name</p>
    </div>
  );
};

export default UserIcon;
