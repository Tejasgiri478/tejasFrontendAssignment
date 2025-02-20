import React from "react";

const UserCard = ({ name, age, location }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Location: {location}</p>
    </div>
  );
};

export default UserCard;