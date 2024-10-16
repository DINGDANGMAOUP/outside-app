import { getOS } from "@/utils/system";
import Layout from "./layout";
function App() {
  return (
    <>
     {getOS()=="windows"&& <TitleBar />}
      <Layout />
      <Toaster />
    </>
  );
}

export default App;
