import { platform } from "@tauri-apps/plugin-os";
const currentPlatform =await platform();
export const getOS=()=>{
  return currentPlatform;
}
