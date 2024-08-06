const CategoryButtons = () => {
  return (
    <div className="w-full flex space-x-4">
      <button className="flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm">
        Action
      </button>
      <button className="flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm">
        Comedy
      </button>
      <button className="flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm ">
        Horror
      </button>
    </div>
  );
};

export default CategoryButtons;
