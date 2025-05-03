
import { useSmartHome } from "@/context/SmartHomeContext";

const EnvironmentStats = () => {
  const { state } = useSmartHome();
  const { environmentData } = state;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <div className="glass-card px-4 py-2 flex items-center gap-2">
        <div className="text-smart-accent-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
          </svg>
        </div>
        <span className="font-medium">{environmentData.temperature}°C</span>
      </div>
      
      <div className="glass-card px-4 py-2 flex items-center gap-2">
        <div className="text-smart-accent-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V2M5 8v14M19 8v14M5 8a4 4 0 0 1 7-2.5M19 8a4 4 0 0 0-7-2.5"/>
          </svg>
        </div>
        <span className="font-medium">{environmentData.humidity}%</span>
      </div>
      
      <div className="glass-card px-4 py-2 flex items-center gap-2">
        <div className="text-smart-accent-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 13V7M15 10h-6M5 16a6 6 0 0 0 12 0M4 11h16a1 1 0 0 1 1 1 7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7 1 1 0 0 1 1-1Z"/>
          </svg>
        </div>
        <span className="font-medium">{environmentData.powerUsage}W</span>
      </div>
      
      <div className="glass-card px-4 py-2 flex items-center gap-2">
        <div className="text-smart-accent-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3M12 19h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-7M12 17V7"/>
          </svg>
        </div>
        <span className="font-medium">{environmentData.airQuality}%</span>
      </div>
      
      <div className="glass-card px-4 py-2 flex items-center gap-2">
        <div className="flex items-center gap-1 text-red-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="font-medium">Live</span>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentStats;
