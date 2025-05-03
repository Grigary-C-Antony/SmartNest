
import { useSmartHome } from "@/context/SmartHomeContext";
import DeviceCard from "./devices/DeviceCard";

const RoomView = () => {
  const { state } = useSmartHome();
  const { rooms, devices, activeRoom } = state;
  
  // Find the current active room
  const currentRoom = activeRoom 
    ? rooms.find(room => room.id === activeRoom)
    : null;
  
  // Get devices in this room
  const devicesInRoom = currentRoom 
    ? devices.filter(device => device.roomId === currentRoom.id)
    : [];

  if (!currentRoom) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <h3 className="text-xl mt-4">Select a room to view devices</h3>
      </div>
    );
  }

  return (
    <div>
      {devicesInRoom.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400 bg-white rounded-3xl border border-gray-100 p-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M7 7h.01M12 7h.01M17 7h.01"/>
            <polyline points="12,7 12,17"/>
            <line x1="7" y1="12" x2="17" y2="12"/>
          </svg>
          <h3 className="text-xl mt-4">No devices in this room yet</h3>
          <p className="text-sm mt-2">Click "Add Device" to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devicesInRoom.map(device => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomView;
