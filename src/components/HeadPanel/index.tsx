import FluentAdd16Regular from '~icons/fluent/add-16-regular';
import LucideUserCog from '~icons/lucide/user-cog';
import FluentSettings16Regular from '~icons/fluent/settings-16-regular';
const HeadPanel: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <IconLocalLogo className="w-6 h-6" />
          <div className="text-lg font-semibold ml-2">OutSide</div>
        </div>
        <div className="flex flex-row items-center space-x-1 ">
          <Button variant="ghost" size='sm' >
            <FluentAdd16Regular className="w-6 h-6 " />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size='sm'  >
                <LucideUserCog className="w-6 h-6 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><FluentSettings16Regular/>{t('head-panel.setting')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div></div>
  )
}

export default HeadPanel