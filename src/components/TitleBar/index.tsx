import { getCurrentWindow, Window } from '@tauri-apps/api/window'
import { useAsyncEffect } from 'ahooks'
import styles from './index.module.css'

const TitleBar: React.FC = () => {
  const [pin, setPin] = useState(false)
  const appWindow = new Window('main')
  const minimize = async () => appWindow.minimize()
  const maximize = async () => appWindow.toggleMaximize()
  const close = async () => appWindow.close()
  const changeTop = () => {
    setPin(!pin)
  }
  useAsyncEffect(async () => {
    await getCurrentWindow().setAlwaysOnTop(pin)
  }, [pin])

  return (
    <div data-tauri-drag-region className={styles.titlebar} aria-hidden>
      <div data-tauri-drag-region className={styles['title-toolbar']}>
        <div className={pin ? styles['titlebar-button-pin'] : styles['titlebar-button']} onClick={changeTop}>
          {pin ? <IconLocalPin /> : <IconLocalPinOff />}
        </div>
        <div className={styles['titlebar-button']} onClick={minimize}>
          <IconLocalMinimize />
        </div>
        <div className={styles['titlebar-button']} onClick={maximize}>
          <IconLocalMaximize />
        </div>
        <div className={styles['titlebar-button-close']} onClick={close}>
          <IconLocalClose />
        </div>
      </div>
    </div>
  )
}

export default TitleBar
