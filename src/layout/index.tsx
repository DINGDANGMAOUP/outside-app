import Content from "./Content"
import Sidebar from "./Sidebar"
import styles from './index.module.css'
const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar>
        <Button>Click me</Button>
      </Sidebar>
      <Content>
        content
      </Content>
    </div>
  )
}

export default Layout