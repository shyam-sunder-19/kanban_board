import React from 'react';
import { FaUser } from 'react-icons/fa';

const UserIcon = ({ online }) => {
  return (
    <div className={`user-icon ${online ? 'online' : 'offline'}`}>
      <FaUser />
      {online && <div className="online-indicator" />}
    </div>
  );
};

export default UserIcon;