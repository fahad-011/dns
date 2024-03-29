import React from "react";

const App = () => {
  return (
    <div className="mx-4 my-4 border-2 border-none p-4 grid grid-cols-1 sm:grid-cols-6 gap-0">
      {/* Menu items */}
      <div className="hidden sm:block sm:col-span-1 bg-gray-100 p-4 rounded-md shadow-md">
        {/* Left column content */}
        <div className="mb-5">
          <div className="flex items-center mb-5">
            <img
              src="https://shorturl.at/bHNQV"
              alt="example"
              className="w-12 h-12 mr-2 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">Inc</h3>
              <h3 className="text-lg font-bold">Innovate Hub</h3>
            </div>
            <img
              src="https://shorturl.at/tSUVX"
              alt="example"
              className="w-20 h-12 ml-2 rounded-full"
            />
          </div>
          <div>
            <h2 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
              Design Team
            </h2>
            <h2 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
              Marketing Team
            </h2>
            <h2 className="mb-1 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
              Development Team
            </h2>
            <h4 className="text-custom-xl text-gray-500 mb-2 cursor-pointer">
              Create a team
            </h4>
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-lg uppercase font-sans text-gray-500  hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300 cursor-pointer rounded-md p-2">
            Folders
          </h1>
          <div className="pl-4">
            <div className="mb-4">
              <h2 className="mb-2 text-lg font-sans">Products</h2>
              <div className="pl-4">
                <h1 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                  Roadmap
                </h1>
                <h1 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                  Feedback
                </h1>
                <h1 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                  Performance
                </h1>
                <h1 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                  Team
                </h1>
                <h1 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                  Analytics
                </h1>
                <h4 className="text-custom-xl text-gray-500 mb-2 cursor-pointer">
                  add new sub
                </h4>
              </div>
            </div>
            <h2 className="mb-2 text-lg cursor-pointer font-sans">Sales</h2>
            <h2 className="mb-2 text-lg cursor-pointer font-sans">Design</h2>
            <h2 className="mb-2 text-lg cursor-pointer font-sans">Office</h2>
            <h2 className="mb-2 text-lg cursor-pointer font-sans">Legal</h2>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
            Invite teammates
          </h2>
          <h2 className="mb-0.5 text-custom-xl border-2 border-transparent rounded-md p-1.5 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
            Help and first steps
          </h2>
          <div className="bg-light-grey-500 border border-gray-400 rounded-md p-4 flex justify-between items-center">
            <h2>
              <span>7</span> days left on trial
            </h2>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Add billing
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="col-span-1 sm:col-span-5 bg-gray-50 p-4 sm:p-6 ml-4 sm:ml-4 rounded-lg shadow-lg">
        <h1 className="text-xl sm:text-2xl font-bold">Products</h1>
      </div>
    </div>
  );
};

export default App;
