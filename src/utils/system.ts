import { platform } from '@tauri-apps/plugin-os'

const currentPlatform = await platform()
export function getOS() {
  return currentPlatform
}
