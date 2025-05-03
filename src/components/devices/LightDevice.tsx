import { useSmartHome } from "@/context/SmartHomeContext";
import { Device } from "@/types/smart-home";
import { Slider } from "@/components/ui/slider";

interface LightDeviceProps {
  device: Device;
}

const LightDevice: React.FC<LightDeviceProps> = ({ device }) => {
  const { updateDeviceData } = useSmartHome();
  const brightness = device.data?.brightness || 100;

  const handleBrightnessChange = (value: number[]) => {
    updateDeviceData(device.id, { brightness: value[0] });
  };

  return (
    <div className="h-full flex flex-col justify-center my-5">
      <div className="flex items-center justify-center my-2">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center "
          style={{
            background: `radial-gradient(circle, rgba(255,255,240,1) 0%, rgba(255,249,219,${
              brightness / 100
            }) 100%)`,
            boxShadow: `0 0 ${brightness / 2}px ${
              brightness / 10
            }px rgba(255, 217, 102, ${brightness / 100})`,
          }}
        >
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
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>
      </div>

      <div className="mt-6 mb-10">
        <div className="flex justify-between mb-1 text-sm">
          <span>Brightness</span>
          <span className="font-medium">{brightness}%</span>
        </div>
        <Slider
          defaultValue={[brightness]}
          max={100}
          step={1}
          onValueChange={handleBrightnessChange}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LightDevice;
