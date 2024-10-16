
interface SidebarProps {
  children?: React.ReactNode;
}
const Sidebar:React.FC<SidebarProps> = ({children}) => {
  return (
    <div className="overflow-hidden absolute inset-y-0 z-[2] w-[var(--side-width)] bg-[var(--side-color-bg)] flex-shrink-0">
      {children}
    </div>
  )
}

export default Sidebar