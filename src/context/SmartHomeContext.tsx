import { createContext, useContext, useState, ReactNode } from 'react';
import { Device, Room, SmartHomeState } from '../types/smart-home';
import { initialSmartHomeState } from '../data/mock-data';
import { useToast } from '@/components/ui/use-toast';

interface SmartHomeContextType {
  state: SmartHomeState;
  setActiveRoom: (roomId: string | null) => void;
  toggleDevicePower: (deviceId: string) => void;
  updateDeviceData: (deviceId: string, data: Partial<Record<string, any>>) => void;
  addRoom: (room: Omit<Room, 'id' | 'devices'>) => void;
  removeRoom: (roomId: string) => void;
  addDevice: (device: Omit<Device, 'id'>) => void;
  removeDevice: (deviceId: string) => void;
  scanForDevices: () => void;
  turnOffAllDevices: () => void;
}

const SmartHomeContext = createContext<SmartHomeContextType | undefined>(undefined);

export const SmartHomeProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<SmartHomeState>(initialSmartHomeState);
  const { toast } = useToast();

  const setActiveRoom = (roomId: string | null) => {
    setState((prev) => ({ ...prev, activeRoom: roomId }));
  };

  const toggleDevicePower = (deviceId: string) => {
    setState((prev) => ({
      ...prev,
      devices: prev.devices.map((device) =>
        device.id === deviceId
          ? { ...device, isPowered: !device.isPowered }
          : device
      ),
    }));

    // Find the device to show appropriate toast
    const device = state.devices.find((d) => d.id === deviceId);
    if (device) {
      toast({
        title: `${device.name} ${!device.isPowered ? 'turned on' : 'turned off'}`,
        description: `The device has been ${!device.isPowered ? 'activated' : 'deactivated'} successfully.`,
      });
    }
  };

  const turnOffAllDevices = () => {
    const poweredDevices = state.devices.filter(device => device.isPowered);
    
    if (poweredDevices.length === 0) {
      toast({
        title: "No devices to turn off",
        description: "All devices are already turned off.",
      });
      return;
    }
    
    setState((prev) => ({
      ...prev,
      devices: prev.devices.map((device) =>
        device.isPowered ? { ...device, isPowered: false } : device
      ),
    }));

    toast({
      title: "All devices turned off",
      description: `${poweredDevices.length} device(s) have been turned off.`,
    });
  };

  const updateDeviceData = (deviceId: string, data: Partial<Record<string, any>>) => {
    setState((prev) => ({
      ...prev,
      devices: prev.devices.map((device) =>
        device.id === deviceId
          ? { ...device, data: { ...device.data, ...data } }
          : device
      ),
    }));
  };

  const addRoom = (room: Omit<Room, 'id' | 'devices'>) => {
    const newRoom: Room = {
      ...room,
      id: `room-${Date.now()}`,
      devices: [],
    };

    setState((prev) => ({
      ...prev,
      rooms: [...prev.rooms, newRoom],
    }));

    toast({
      title: "Room added",
      description: `${room.name} has been added to your smart home.`,
    });
  };

  const removeRoom = (roomId: string) => {
    // Check if there are devices in this room
    const devicesInRoom = state.devices.filter((device) => device.roomId === roomId);
    
    if (devicesInRoom.length > 0) {
      toast({
        title: "Cannot remove room",
        description: "Please remove all devices from this room first.",
        variant: "destructive",
      });
      return;
    }

    setState((prev) => ({
      ...prev,
      rooms: prev.rooms.filter((room) => room.id !== roomId),
      activeRoom: prev.activeRoom === roomId ? null : prev.activeRoom,
    }));

    toast({
      title: "Room removed",
      description: "The room has been removed from your smart home.",
    });
  };

  const addDevice = (device: Omit<Device, 'id'>) => {
    const newDevice: Device = {
      ...device,
      id: `${device.type}-${Date.now()}`,
    };

    setState((prev) => ({
      ...prev,
      devices: [...prev.devices, newDevice],
      rooms: prev.rooms.map((room) =>
        room.id === device.roomId
          ? { ...room, devices: [...room.devices, newDevice.id] }
          : room
      ),
    }));

    toast({
      title: "Device added",
      description: `${device.name} has been added to your smart home.`,
    });
  };

  const removeDevice = (deviceId: string) => {
    const device = state.devices.find((d) => d.id === deviceId);
    if (!device) return;

    setState((prev) => ({
      ...prev,
      devices: prev.devices.filter((d) => d.id !== deviceId),
      rooms: prev.rooms.map((room) =>
        room.id === device.roomId
          ? { ...room, devices: room.devices.filter((id) => id !== deviceId) }
          : room
      ),
    }));

    toast({
      title: "Device removed",
      description: `${device.name} has been removed from your smart home.`,
    });
  };

  const scanForDevices = () => {
    toast({
      title: "Scanning for devices",
      description: "Looking for new devices on your network...",
    });
    
    // Simulate finding a new device after 2 seconds
    setTimeout(() => {
      toast({
        title: "New device found",
        description: "A new smart light was found and can be added to your home.",
      });
    }, 2000);
  };

  return (
    <SmartHomeContext.Provider
      value={{
        state,
        setActiveRoom,
        toggleDevicePower,
        updateDeviceData,
        addRoom,
        removeRoom,
        addDevice,
        removeDevice,
        scanForDevices,
        turnOffAllDevices,
      }}
    >
      {children}
    </SmartHomeContext.Provider>
  );
};

export const useSmartHome = () => {
  const context = useContext(SmartHomeContext);
  if (context === undefined) {
    throw new Error('useSmartHome must be used within a SmartHomeProvider');
  }
  return context;
};
