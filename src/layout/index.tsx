import Content from "./Content"
import Sider from "./Sider"

const Layout = () => {
  return (
    <div className="grid grid-cols-2">
      <Sider />
      <Content />
    </div>
  )
}

export default Layout