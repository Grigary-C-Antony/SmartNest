
import { Button } from "@/components/ui/button";
import { useSmartHome } from "@/context/SmartHomeContext";
import { Scan, Power } from "lucide-react";

const Header = () => {
  const { scanForDevices, turnOffAllDevices } = useSmartHome();

  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Smart Nest</h1>
        <p className="text-gray-500">Command Center</p>
      </div>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex gap-2" 
          onClick={scanForDevices}
        >
          <Scan size={18} />
          <span>Scan</span>
        </Button>
        <Button 
          variant="outline" 
          className="flex gap-2"
          onClick={turnOffAllDevices}
        >
          <Power size={18} />
          <span>All Off</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
