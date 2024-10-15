import FluentAdd16Regular from '~icons/fluent/add-16-regular?width=16px&height=16px';
import LucideUserCog from '~icons/lucide/user-cog?width=16px&height=16px';
const HeadPanel:React.FC = (props) => {
  return (
    <div {...props}> 
     <div className="flex flex-row justify-between">
    <div className="flex flex-row items-center">
      <IconLocalLogo className="w-6 h-6" />
      <div className="text-lg font-semibold ml-2">OutSide</div>
    </div>
    <div className="flex flex-row items-center space-x-5">
      <FluentAdd16Regular className="w-6 h-6 cursor-pointer hover:bg-blueGray" />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LucideUserCog className="w-5 h-5  cursor-pointer hover:bg-blueGray" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div></div>
  )
}

export default HeadPanel