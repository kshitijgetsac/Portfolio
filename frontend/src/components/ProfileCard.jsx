import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  return (
    <div className="p-6 max-w-sm bg-gray-800 text-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full"
          src="https://via.placeholder.com/150"
          alt="profile"
        />
        <h2 className="mt-4 text-xl font-semibold">Kshitij Taneja</h2>
        <p className="mt-2 text-sm text-gray-400">Software Developer</p>
        <div className="flex mt-4 space-x-3">
          <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
          <span className="text-gray-300">kshitijtaneja2000@gmail.com</span>
        </div>
        <div className="flex mt-2 space-x-3">
          <FontAwesomeIcon icon={faLocationDot} className="text-yellow-500" />
          <span className="text-gray-300">Rochester, New York</span>
        </div>
        <div className="mt-6">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
