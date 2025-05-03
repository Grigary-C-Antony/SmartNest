
import { SmartHomeProvider } from "@/context/SmartHomeContext";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <SmartHomeProvider>
      <Dashboard />
    </SmartHomeProvider>
  );
};

export default Index;
