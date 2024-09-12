import React from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Sidebar />
        <About />
      </div>
    </div>
  );
};

export default App;
