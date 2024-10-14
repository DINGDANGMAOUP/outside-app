
interface SidebarProps {
  children?: React.ReactNode;
}
const Sidebar:React.FC<SidebarProps> = ({children}) => {
  return (
    <div className="w-[var(--side-width)] bg-[var(--side-color-light)] dark:bg-[var(--side-color-dark)] flex-shrink-0">
      {children}
    </div>
  )
}

export default Sidebar