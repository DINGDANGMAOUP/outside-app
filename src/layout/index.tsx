import Content from './Content'
import styles from './index.module.css'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className={styles.layout}>
      <Sidebar>
        <SidePanel />
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default Layout
