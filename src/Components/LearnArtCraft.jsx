import React from "react";
import youtubeLogo from "../../public/youtube-logo.jpeg"; // Import the YouTube logo image

const LearnArtCraft = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-8">Learn Art & Craft</h1>
        <div className="flex gap-8 items-center">
          <div className="flex-1 h-72 bg-cover bg-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1590853566724-83bc9da30d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwY3JhZnRzfGVufDB8fDB8fHww")`}}>
            <div className="text-white text-center py-4 px-6 bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Learn on YouTube</h2>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src={youtubeLogo} alt="YouTube Logo" className="h-24" />
          </div>
          <div className="flex-1 h-72 bg-cover bg-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1503236641037-129adbdfb266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydCUyMGFuZCUyMGNyYWZ0c3xlbnwwfHwwfHx8MA%3D%3D")`}}>
            <div className="text-white text-center py-4 px-6 bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Learn on YouTube</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnArtCraft;
