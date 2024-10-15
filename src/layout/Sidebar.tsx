
interface SidebarProps {
  children?: React.ReactNode;
}
const Sidebar:React.FC<SidebarProps> = ({children}) => {
  return (
    <div data-tauri-drag-region className="w-[var(--side-width)] bg-[var(--side-color-light)] dark:bg-[var(--side-color-dark)] flex-shrink-0 p-3">
      {children}
    </div>
  )
}

export default Sidebar