import { useSmartHome } from "@/context/SmartHomeContext";
import { Device } from "@/types/smart-home";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface SpeakerDeviceProps {
  device: Device;
}

const SpeakerDevice: React.FC<SpeakerDeviceProps> = ({ device }) => {
  const { updateDeviceData } = useSmartHome();
  const volume = device.data?.volume || 50;
  const playing = device.data?.playing || false;
  const currentTrack = device.data?.currentTrack || {
    title: "No track",
    artist: "Unknown artist",
    duration: "0:00",
    currentTime: "0:00",
  };

  const handleVolumeChange = (value: number[]) => {
    updateDeviceData(device.id, { volume: value[0] });
  };

  const togglePlayback = () => {
    updateDeviceData(device.id, { playing: !playing });
  };

  return (
    <div>
      <div className="text-center mb-4">
        <h4 className="font-medium">Playing</h4>
      </div>

      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div className="w-full h-full bg-gradient-to-br from-smart-accent-purple to-smart-accent-blue flex items-center justify-center text-white">
            {playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m10 8 6 4-6 4V8Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="10" x2="10" y1="15" y2="9" />
                <line x1="14" x2="14" y1="15" y2="9" />
              </svg>
            )}
          </div>
        </div>
        <h4 className="font-medium">{currentTrack.title}</h4>
        <p className="text-sm text-gray-500">{currentTrack.artist}</p>
      </div>

      <div className="flex text-xs justify-between mb-1">
        <span>{currentTrack.currentTime}</span>
        <span>{currentTrack.duration}</span>
      </div>
      <div className="bg-gray-200 h-1 rounded-full mb-4">
        <div
          className="h-1 bg-smart-accent-blue rounded-full"
          style={{
            width: `${
              (parseTime(currentTrack.currentTime) /
                parseTime(currentTrack.duration)) *
              100
            }%`,
          }}
        ></div>
      </div>

      <div className="flex justify-center items-center gap-4 mb-6">
        {/* <Button variant="outline" size="icon" className="rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m19 16-7-8-7 8"/>
          </svg>
        </Button> */}
        <Button variant="outline" size="icon" className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="4" height="14" x="18" y="5" rx="1" />
            <path d="m2 5 10 7-10 7Z" />
          </svg>
        </Button>
        <Button
          variant="default"
          size="icon"
          className="rounded-full w-12 h-12 bg-smart-accent-blue hover:bg-smart-accent-blue/90"
          onClick={togglePlayback}
        >
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="4" height="16" x="6" y="4" rx="1" />
              <rect width="4" height="16" x="14" y="4" rx="1" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          )}
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="4" height="14" x="2" y="5" rx="1" />
            <path d="m22 5-10 7 10 7Z" />
          </svg>
        </Button>
        {/* <Button variant="outline" size="icon" className="rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 8 7 8 7-8"/>
          </svg>
        </Button> */}
      </div>

      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
        <Slider
          defaultValue={[volume]}
          max={100}
          step={1}
          onValueChange={handleVolumeChange}
          className="flex-1"
        />
        <span className="text-sm font-medium">{volume}%</span>
      </div>
    </div>
  );
};

// Helper to parse time string like "1:45" to seconds
const parseTime = (timeStr: string): number => {
  const parts = timeStr.split(":");
  return parseInt(parts[0]) * 60 + parseInt(parts[1]);
};

export default SpeakerDevice;
