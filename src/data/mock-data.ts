
import { Device, Room, SmartHomeState } from "../types/smart-home";

export const mockRooms: Room[] = [
  {
    id: "living-room",
    name: "Living room",
    devices: ["lamp-1", "speaker-1", "plug-1"],
    icon: "sofa",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    devices: ["vacuum-1", "light-1", "thermostat-1"],
    icon: "bed",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    devices: ["light-2", "plug-2"],
    icon: "utensils",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    devices: ["light-3"],
    icon: "bath",
  },
];

export const mockDevices: Device[] = [
  {
    id: "lamp-1",
    name: "Smart Lamp",
    type: "light",
    status: "online",
    roomId: "living-room",
    isPowered: true,
    data: {
      brightness: 70,
      color: "white",
    },
  },
  {
    id: "speaker-1",
    name: "Speakers",
    type: "speaker",
    status: "online",
    roomId: "living-room",
    isPowered: true,
    data: {
      volume: 60,
      playing: true,
      currentTrack: {
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: "3:22",
        currentTime: "1:45",
      },
    },
  },
  {
    id: "vacuum-1",
    name: "Robot vacuum cleaner",
    type: "vacuum",
    status: "online",
    roomId: "bedroom",
    isPowered: true,
    data: {
      batteryLevel: 80,
      mode: "auto",
      filterStatus: "90%",
      areaCleaned: "75 m²",
      cleaningTime: "30 min",
      nextCleaning: "10:00 AM",
    },
  },
  {
    id: "light-1",
    name: "Ceiling Light",
    type: "light",
    status: "online",
    roomId: "bedroom",
    isPowered: false,
  },
  {
    id: "light-2",
    name: "Kitchen Light",
    type: "light",
    status: "online",
    roomId: "kitchen",
    isPowered: true,
    data: {
      brightness: 100,
    },
  },
  {
    id: "light-3",
    name: "Bathroom Light",
    type: "light",
    status: "offline",
    roomId: "bathroom",
    isPowered: false,
  },
  {
    id: "plug-1",
    name: "Living Room Plug",
    type: "plug",
    status: "online",
    roomId: "living-room",
    isPowered: true,
    data: {
      powerUsage: "24W",
    },
  },
  {
    id: "plug-2",
    name: "Kitchen Plug",
    type: "plug",
    status: "online",
    roomId: "kitchen",
    isPowered: true,
    data: {
      powerUsage: "1200W",
    },
  },
  {
    id: "thermostat-1",
    name: "Bedroom Thermostat",
    type: "thermostat",
    status: "online",
    roomId: "bedroom",
    isPowered: true,
    data: {
      temperature: 22,
      targetTemperature: 21,
      mode: "cooling",
    },
  },
];

export const initialSmartHomeState: SmartHomeState = {
  rooms: mockRooms,
  devices: mockDevices,
  activeRoom: null,
  environmentData: {
    temperature: 24,
    humidity: 50,
    powerUsage: 350,
    airQuality: 80,
  },
};
