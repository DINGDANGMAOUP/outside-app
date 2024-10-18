interface SidebarProps {
  children?: React.ReactNode
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="absolute inset-y-0 z-[2] w-[var(--side-width)] shrink-0 overflow-hidden bg-[var(--side-color-bg)]">
      {children}
    </div>
  )
}

export default Sidebar
