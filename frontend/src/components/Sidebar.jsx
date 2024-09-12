import React from "react";
import { Mail, FileText, Twitter, Github, User, Download } from "lucide-react";

const Sidebar = () => {
  const handleDownloadResume = () => {
    // Resume download logic (unchanged)
    const resumeUrl = "/kshitij_taneja_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Kshitij_Taneja_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <aside className="bg-gray-800 p-6 rounded-lg">
      <div className="mb-6">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gray-600">
          <img
            src="/kshitijtaneja.jpg"
            alt="Kshitij Taneja"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-center flex items-center justify-center">
          <User size={24} className="mr-2" />
          Kshitij Taneja
        </h2>
        <p className="text-center text-gray-400">Software Developer</p>
      </div>
      {/* Rest of the component remains unchanged */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail size={20} />
          <span>kshitijtaneja2000@gmail.com</span>
        </div>
        <button
          className="w-full bg-gray-700 py-2 rounded hover:bg-gray-600 flex items-center justify-center"
          onClick={handleDownloadResume}
        >
          <Download size={20} className="mr-2" />
          Download Resume
        </button>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              <path d="M2 13.423V19h5.577"></path>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
