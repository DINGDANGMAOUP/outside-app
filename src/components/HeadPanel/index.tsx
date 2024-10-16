import FluentAdd16Regular from '~icons/fluent/add-16-regular';
import LucideUserCog from '~icons/lucide/user-cog';
import FluentSettings16Regular from '~icons/fluent/settings-16-regular';
const HeadPanel: React.FC = () => {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  // [bug]: cannot use Dropdown menu with dialog#4068 https://github.com/shadcn-ui/ui/issues/4068 
  // useEffect(() => { return () => { document.body.style.pointerEvents = ""; }; }, [visible]);
  return (
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <IconLocalLogo className="w-6 h-6" />
          <div className="text-lg font-semibold ml-2">OutSide</div>
        </div>
        <div className="flex flex-row items-center space-x-1 ">
          <Button variant="ghost" size='sm' >
            <FluentAdd16Regular className="w-6 h-6 " />
          </Button>
          <DropdownMenu modal={false} >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size='sm'  >
                <LucideUserCog className="w-6 h-6 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{t('head-panel.label')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setVisible(true)}>
                <FluentSettings16Regular />{t('head-panel.setting')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Dialog open={visible} onOpenChange={() => setVisible(false)} modal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
  )
}

export default HeadPanel