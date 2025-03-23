import React from "react";
import TextUpdater from "./TextUpdater";
import SimpleForm from "./SimpleForm";
import UserCard from "./UserCard";
import CustomButton from "./CustomButton";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">React.js Assignment</h1>

      {/* Text Updater Component */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold mb-2">Text Updater</h2>
        <TextUpdater />
      </div>

      {/* Simple Form Component */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold mb-2">Simple Form</h2>
        <SimpleForm />
      </div>

      {/* UserCard Component */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold mb-2">User Card</h2>
        <UserCard name="John Doe" email="john.doe@example.com" />
      </div>

      {/* Custom Button Component */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-2">Styled Button</h2>
        <CustomButton />
      </div>

      {/* Login Form Component */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold mb-2">Login Form</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
