import { useSmartHome } from "@/context/SmartHomeContext";
import { Device } from "@/types/smart-home";
import { Switch } from "@/components/ui/switch";
import LightDevice from "./LightDevice";
import SpeakerDevice from "./SpeakerDevice";
import VacuumDevice from "./VacuumDevice";
import GenericDevice from "./GenericDevice";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface DeviceCardProps {
  device: Device;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  const { toggleDevicePower, removeDevice } = useSmartHome();

  // Render specific device based on type
  const renderDeviceContent = () => {
    switch (device.type) {
      case "light":
        return <LightDevice device={device} />;
      case "speaker":
        return <SpeakerDevice device={device} />;
      case "vacuum":
        return <VacuumDevice device={device} />;
      default:
        return <GenericDevice device={device} />;
    }
  };

  return (
    <div
      className={`device-card transition-all duration-300 ${
        !device.isPowered ? "opacity-70" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              device.status === "online" ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
          <h3 className="font-medium">{device.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            checked={device.isPowered}
            onCheckedChange={() => toggleDevicePower(device.id)}
          />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 size={16} />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will remove {device.name} from your smart home. This
                  action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => removeDevice(device.id)}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Remove
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {device.isPowered ? (
        renderDeviceContent()
      ) : (
        <div className="flex h-full justify-center items-center py-8 text-gray-400">
          Device is turned off
        </div>
      )}
    </div>
  );
};

export default DeviceCard;
