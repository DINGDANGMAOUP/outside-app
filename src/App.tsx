import { getOS } from "@/utils/system";
import Layout from "./layout";

// import "./App.css";
function App() {
  return (
    <div className="h-full">
     {getOS()=="windows"&& <TitleBar />}
      <Layout />
      <Toaster />
    </div>
  );
}

export default App;
