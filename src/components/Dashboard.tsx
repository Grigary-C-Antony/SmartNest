
import { useSmartHome } from "@/context/SmartHomeContext";
import Header from "./Header";
import EnvironmentStats from "./EnvironmentStats";
import RoomSelector from "./RoomSelector";
import RoomView from "./RoomView";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Device } from "@/types/smart-home";

const Dashboard = () => {
  const { state, addDevice } = useSmartHome();
  const { activeRoom } = state;
  const currentRoom = activeRoom ? state.rooms.find(room => room.id === activeRoom) : null;
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState("");
  const [newDeviceType, setNewDeviceType] = useState<Device["type"]>("light");
  
  const handleAddDevice = () => {
    if (newDeviceName.trim() && currentRoom) {
      addDevice({
        name: newDeviceName.trim(),
        type: newDeviceType,
        status: "online",
        roomId: currentRoom.id,
        isPowered: false
      });
      setNewDeviceName("");
      setNewDeviceType("light");
      setDialogOpen(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="flex justify-between items-center mb-6">
          <EnvironmentStats />
          
          {currentRoom && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-smart-accent-blue hover:bg-smart-accent-blue/90 flex gap-2">
                  <Plus size={18} />
                  <span>Add Device</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Device</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="device-name" className="text-sm font-medium leading-none">
                      Device Name
                    </label>
                    <Input
                      id="device-name"
                      placeholder="Smart Light, Thermostat, etc."
                      value={newDeviceName}
                      onChange={(e) => setNewDeviceName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="device-type" className="text-sm font-medium leading-none">
                      Device Type
                    </label>
                    <Select value={newDeviceType} onValueChange={(value) => setNewDeviceType(value as Device["type"])}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="thermostat">Thermostat</SelectItem>
                        <SelectItem value="speaker">Speaker</SelectItem>
                        <SelectItem value="vacuum">Vacuum</SelectItem>
                        <SelectItem value="camera">Camera</SelectItem>
                        <SelectItem value="lock">Lock</SelectItem>
                        <SelectItem value="plug">Plug</SelectItem>
                        <SelectItem value="sensor">Sensor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleAddDevice} className="w-full">
                    Add Device
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <RoomSelector />
          </div>
          <div className="lg:col-span-2">
            <RoomView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
