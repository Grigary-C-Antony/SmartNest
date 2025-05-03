
export type DeviceType = 
  | 'light'
  | 'thermostat'
  | 'speaker'
  | 'vacuum'
  | 'camera'
  | 'lock'
  | 'plug'
  | 'sensor';

export type DeviceStatus = 'online' | 'offline' | 'error' | 'updating';

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  status: DeviceStatus;
  roomId: string;
  isPowered: boolean;
  data?: Record<string, any>;
}

export interface Room {
  id: string;
  name: string;
  devices: string[];
  icon?: string;
}

export interface SmartHomeState {
  rooms: Room[];
  devices: Device[];
  activeRoom: string | null;
  environmentData: {
    temperature: number;
    humidity: number;
    powerUsage: number;
    airQuality: number;
  };
}
