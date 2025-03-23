const UserCard = ({ name, email }) => {
    return (
      <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200 text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  };
  
  export default UserCard;
  