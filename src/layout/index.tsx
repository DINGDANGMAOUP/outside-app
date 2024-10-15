import Content from "./Content"
import Sidebar from "./Sidebar"
import styles from './index.module.css'
import FluentAdd16Regular from '~icons/fluent/add-16-regular?width=16px&height=16px';
import LucideUserCog from '~icons/lucide/user-cog?width=16px&height=16px';
const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <IconLocalLogo className="w-6 h-6" />
            <div className="text-lg font-semibold ml-2">OutSide</div>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <FluentAdd16Regular className="w-6 h-6   cursor-pointer hover:bg-blueGray" />
            <LucideUserCog  className="w-5 h-5  cursor-pointer hover:bg-blueGray" />
          </div>
        </div>
      </Sidebar>
      <Content>
        content
      </Content>
    </div>
  )
}

export default Layout