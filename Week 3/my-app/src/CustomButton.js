const CustomButton = () => {
    const handleClick = () => {
      console.log("Button clicked!");
    };
  
    return (
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={handleClick}
      >
        Click Me
      </button>
    );
  };
  
  export default CustomButton;
  