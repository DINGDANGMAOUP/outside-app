import { Button } from "@nextui-org/react";
import { getOS } from "@/utils/system";

// import "./App.css";
function App() {
  return (
    <div className="h-full">
     {getOS()=="windows"&& <TitleBar />}
      <Button color="primary" >
        Button
      </Button>
    </div>
  );
}

export default App;
