import reactLogo from '@/assets/react.svg'
import { invoke } from '@tauri-apps/api/core'
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'

import { Window } from '@tauri-apps/api/window'
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/plugin-notification'

const Demo: React.FC = (props) => {
  console.log(props)

  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  const notification = async () => {
    // 你有发送通知的权限吗？
    let permissionGranted = await isPermissionGranted()

    // 如果没有，我们需要请求它
    if (!permissionGranted) {
      const permission = await requestPermission()
      permissionGranted = permission === 'granted'
    }

    // 一旦获得许可，我们就可以发送通知
    if (permissionGranted) {
      sendNotification({ title: 'Tauri', body: 'Tauri is awesome!' })
    }
  }
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }))
  }
  const appWindow = new Window('main')
  const minimize = () => appWindow.minimize()
  const maximize = () => appWindow.toggleMaximize()
  const close = () => {
    notification()
    appWindow.close()
  }

  const createWebviewWindow = async () => {
    const webview = new WebviewWindow('theUniqueLabel', {
      x: 0,
      y: 0,
      width: 800,
      height: 600,
      url: '/404',
    })
    webview.once('tauri://created', () => {
      // webview successfully created
      console.log('webview successfully created')
    })
    webview.once('tauri://error', (e) => {
      // an error happened creating the webview
      console.log('an error happened creating the webview', e)
    })
  }

  return (
    <div className="container">
      <div data-tauri-drag-region className="titlebar">
        <div className="titlebar-button" id="titlebar-minimize" onClick={minimize}>
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
          />
        </div>
        <div className="titlebar-button" id="titlebar-maximize" onClick={maximize}>
          <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
          />
        </div>
        <div className="titlebar-button" id="titlebar-close" onClick={close}>
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
      </div>
      <div className="size-full">

        <h1>Welcome to Tauri!</h1>
        <div className="row">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
            <img src="/vite.svg" className="logo vite" alt="Vite logo" />
          </a>
          <a href="https://tauri.app" target="_blank">
            <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <p>Click on the Tauri, Vite, and React logos to learn more.</p>

        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault()
            greet()
          }}
        >
          <input
            id="greet-input"
            onChange={e => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>

        <a href="https://tauri.studio" target="_blank">url</a>
        <p>{greetMsg}</p>
        <button onClick={createWebviewWindow}>create</button>
      </div>
    </div>
  )
}

export default Demo
