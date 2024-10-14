interface ContentProps {
  children?: React.ReactNode;
} 

const Content:React.FC<ContentProps> = ({children}) => {
  return (
    <div className="pt-[var(--title-bar-height)] w-full">
      {children}
    </div>
  )
}

export default Content