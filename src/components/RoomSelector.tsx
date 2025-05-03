import { useSmartHome } from "@/context/SmartHomeContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Plus } from "lucide-react";

const RoomSelector = () => {
  const { state, setActiveRoom, addRoom } = useSmartHome();
  const { rooms, activeRoom } = state;

  const [newRoomName, setNewRoomName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddRoom = () => {
    if (newRoomName.trim()) {
      addRoom({
        name: newRoomName.trim(),
        icon: "home",
      });
      setNewRoomName("");
      setDialogOpen(false);
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Rooms</h2>
          <Button variant="ghost" size="icon" className="text-gray-500" asChild>
            <div>
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
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
          </Button>
        </div>

        <div className="space-y-2">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                activeRoom === room.id
                  ? "bg-smart-accent-purple text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveRoom(room.id)}
            >
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center shadow-sm">
                {getIconForRoom(room.icon)}
              </div>
              <div>
                <p className="font-medium">{room.name}</p>
                <p
                  className={`text-xs ${
                    activeRoom === room.id ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {room.devices.length} device
                  {room.devices.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="ml-auto">
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          ))}

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2 mt-4"
              >
                <Plus size={16} />
                <span>ADD ROOM</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Room</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none"
                  >
                    Room Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Living Room, Kitchen, etc."
                    value={newRoomName}
                    onChange={(e) => setNewRoomName(e.target.value)}
                  />
                </div>
                <Button onClick={handleAddRoom} className="w-full">
                  Add Room
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

// Helper function to render different icons based on room type
const getIconForRoom = (iconName?: string) => {
  switch (iconName) {
    case "sofa":
      return (
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
          <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
          <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
        </svg>
      );
    case "bed":
      return (
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
          <path d="M2 4v16M22 4v16" />
          <path d="M4 8h16a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4V8ZM2.5 8h3M18.5 8h3" />
        </svg>
      );
    case "utensils":
      return (
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
          <path d="M6 2v20M18 14v8M18 6V2" />
          <rect x="12" y="14" width="12" height="2" rx="1" />
        </svg>
      );
    case "bath":
      return (
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
          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
          <line x1="10" x2="8" y1="5" y2="7" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <line x1="7" x2="7" y1="19" y2="21" />
          <line x1="17" x2="17" y1="19" y2="21" />
        </svg>
      );
    default:
      return (
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
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
  }
};

export default RoomSelector;
