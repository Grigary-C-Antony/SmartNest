import { Device } from "@/types/smart-home";
import { Progress } from "@/components/ui/progress";
import roboticVacuumImage from "@/assets/images/robotic-vacuum.png";

interface VacuumDeviceProps {
  device: Device;
}

const VacuumDevice: React.FC<VacuumDeviceProps> = ({ device }) => {
  const {
    batteryLevel = 80,
    filterStatus = "90%",
    areaCleaned = "75 m²",
    cleaningTime = "30 min",
  } = device.data || {};

  return (
    <div>
      <div className="flex justify-center mb-4">
        <img
          src={roboticVacuumImage}
          alt="Robot Vacuum"
          className="w-32 h-32 object-contain"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 mb-4">
        <div className="p-3 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-500 mb-1">Filter status</div>
          <div className="font-medium">{filterStatus}</div>
        </div>

        <div className="p-3 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-500 mb-1">Area cleaned</div>
          <div className="font-medium">{areaCleaned}</div>
        </div>

        <div className="p-3 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-500 mb-1">Cleaning time</div>
          <div className="font-medium">{cleaningTime}</div>
        </div>

        <div className="p-3 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-500 mb-1">Battery charge</div>
          <div className="font-medium">{batteryLevel}%</div>
          <Progress value={batteryLevel} className="h-1 mt-2" />
        </div>
      </div>
    </div>
  );
};

export default VacuumDevice;
