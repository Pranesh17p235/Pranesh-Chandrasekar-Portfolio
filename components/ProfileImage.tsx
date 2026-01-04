
import React, { useState, useEffect } from 'react';

const ProfileImage: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  
  /**
   * Identity Asset: User's LinkedIn profile image.
   * This is used for the biometric recognition UI effect.
   */
  const rawFilename = "https://media.licdn.com/dms/image/v2/D5603AQHzFd7hz_7b7g/profile-displayphoto-shrink_800_800/B56ZUr5woNGUAc-/0/1740198318008?e=1769040000&v=beta&t=9Y4JpfWlARiikCIP7Q7lUNk2Qy0S_oRYHVGV5v2at0w";

  useEffect(() => {
    setHasError(false);
  }, [rawFilename]);

  return (
    <div className="relative w-full max-w-sm mx-auto group">
      {/* Corner Brackets */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-green-500 z-10 transition-all group-hover:scale-110 shadow-[0_0_10px_rgba(0,255,65,0.3)]"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-green-500 z-10 transition-all group-hover:scale-110 shadow-[0_0_10px_rgba(0,255,65,0.3)]"></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-green-500 z-10 transition-all group-hover:scale-110 shadow-[0_0_10px_rgba(0,255,65,0.3)]"></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-green-500 z-10 transition-all group-hover:scale-110 shadow-[0_0_10px_rgba(0,255,65,0.3)]"></div>

      <div className="relative overflow-hidden border border-green-900/50 bg-[#020202] aspect-[3/4] shadow-[0_0_40px_rgba(0,255,65,0.1)] transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(0,255,65,0.2)]">
        {!hasError ? (
          <img 
            src={rawFilename} 
            alt="Pranesh Chandrasekar"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-70 group-hover:opacity-100 scale-100 group-hover:scale-105"
            onLoad={() => console.log(`[AUTH_SUCCESS] Identity asset loaded for Pranesh Chandrasekar.`)}
            onError={() => {
              setHasError(true);
              console.error(`[AUTH_FAILURE] Could not load identity asset from LinkedIn URI.`);
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-black p-8 border-2 border-dashed border-red-900/20">
            <div className="relative mb-6 text-red-500 text-6xl animate-pulse font-mono">!</div>
            <div className="space-y-3 text-center">
              <p className="text-red-600 font-mono text-[10px] uppercase font-bold tracking-widest">Access_Denied: 404_ASSET_MISSING</p>
              <p className="text-green-900 font-mono text-[8px] uppercase">Verify LinkedIn Image Link or Connectivity</p>
            </div>
          </div>
        )}
        
        {/* Real-time Scanning Effect */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_#00ff41] animate-[scanline_3s_ease-in-out_infinite] z-20 pointer-events-none"></div>
        
        {/* HUD Data Overlay */}
        <div className="absolute top-4 left-4 font-mono text-[8px] text-green-500/40 pointer-events-none group-hover:text-green-500/80 transition-colors">
          <div className="flex flex-col">
            <span>ID: PRANESH_SEC</span>
            <span>LOC: VERIFIED_PROXIMITY</span>
          </div>
        </div>

        {/* Biometric Status Footer */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/95 backdrop-blur-sm border border-green-500/20 p-2 font-mono text-[9px] text-green-400 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <div className="flex justify-between items-center mb-1.5">
            <span className="uppercase tracking-tighter">DATA_LINK: ESTABLISHED</span>
            <span className="text-[10px] font-bold">99.8%</span>
          </div>
          <div className="w-full h-[3px] bg-green-950 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[99.8%] shadow-[0_0_8px_#00ff41]"></div>
          </div>
        </div>
      </div>

      <div className="absolute -right-12 top-1/2 -translate-y-1/2 origin-left -rotate-90 text-[10px] tracking-[0.5em] font-mono text-green-900 uppercase pointer-events-none group-hover:text-green-500 transition-colors duration-700 whitespace-nowrap">
        BIOMETRIC_DATA_LINK
      </div>
    </div>
  );
};

export default ProfileImage;
