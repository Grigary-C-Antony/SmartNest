import { Device } from "@/types/smart-home";

interface GenericDeviceProps {
  device: Device;
}

const GenericDevice: React.FC<GenericDeviceProps> = ({ device }) => {
  // Display device type icon based on device.type
  const renderDeviceIcon = () => {
    switch (device.type) {
      case "thermostat":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
          </svg>
        );
      case "camera":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        );
      case "lock":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        );
      case "plug":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22v-5" />
            <path d="M9 8V2" />
            <path d="M15 8V2" />
            <path d="M18 8v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Z" />
          </svg>
        );
      case "sensor":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <path d="M3 15h18" />
          </svg>
        );
    }
  };

  // Render any device-specific data if available
  const renderDeviceData = () => {
    if (!device.data) return null;

    return (
      <div className="mt-4 space-y-2">
        {Object.entries(device.data).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center text-sm gap-5"
          >
            <span className="text-gray-500 capitalize">{formatKey(key)}</span>
            <span className="font-medium">{formatValue(value)}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-gray-400 my-4">{renderDeviceIcon()}</div>

      <div className="status-chip bg-green-100 text-green-800">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        <span>{device.status}</span>
      </div>

      {renderDeviceData()}
    </div>
  );
};

// Helper function to format keys for display
const formatKey = (key: string): string => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/([a-z])([A-Z])/g, "$1 $2");
};

// Helper function to format values for display
const formatValue = (value: any): string => {
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  return `${value}`;
};

export default GenericDevice;
