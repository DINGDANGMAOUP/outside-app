interface ContentProps {
  children?: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="w-full p-3 pt-[var(--title-bar-height)]">
      {children}
    </div>
  )
}

export default Content
