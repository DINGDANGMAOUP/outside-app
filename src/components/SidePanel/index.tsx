import styles from './index.module.css'

const SidePanel: React.FC = () => {
  return (
    <div className={styles['side-panel']}>
      <div className="ml-4 mr-3 flex items-center justify-between">
        <div className="relative flex items-center gap-1 text-lg font-semibold">
          <IconLocalLogo className="size-6" />
          OutSide
        </div>
        <div className="relative flex items-center gap-2">
          <Button variant="ghost" size="sm" className="no-drag-region">
            <IconFluentAdd16Regular className="size-6 " />
          </Button>
          <Button variant="ghost" size="sm" className="no-drag-region">
            <IconLucideUserCog className="size-6 " />
          </Button>
        </div>
      </div>
      <div className="flex w-full justify-between px-3 text-xl">
        <Button variant="ghost" size="sm" className="no-drag-region flex size-8 h-11 flex-col items-center justify-center gap-1 rounded-md text-xl  duration-200 ">
          <IconLineMdDocumentListTwotone className="size-6 " />
          <div className="text-[0.625rem] font-medium leading-none">0</div>
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region flex size-8 h-11 flex-col items-center justify-center gap-1 rounded-md text-xl  duration-200 ">
          <IconLineMdTwitterFilled className="size-6 " />
          <div className="text-[0.625rem] font-medium leading-none">0</div>
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region flex size-8 h-11 flex-col items-center justify-center gap-1 rounded-md text-xl  duration-200 ">
          <IconLineMdImageFilled className="size-6 " />
          <div className="text-[0.625rem] font-medium leading-none">0</div>
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region flex size-8 h-11 flex-col items-center justify-center gap-1 rounded-md text-xl  duration-200 ">
          <IconLineMdYoutubeFilled className="size-6 " />
          <div className="text-[0.625rem] font-medium leading-none">0</div>
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region flex size-8 h-11 flex-col items-center justify-center gap-1 rounded-md text-xl  duration-200 ">
          <IconAntDesignAudioFilled className="size-6 " />
          <div className="text-[0.625rem] font-medium leading-none">0</div>
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region flex size-8 h-11 flex-col items-center justify-center gap-1 rounded-md text-xl  duration-200 ">
          <IconRiBroadcastFill className="size-6 " />
          <div className="text-[0.625rem] font-medium leading-none">0</div>
        </Button>
      </div>
      <div className="relative flex size-full overflow-hidden">
        <div className="grow">
          <section className="w-[var(--side-width)]] h-full shrink-0 snap-center">
            <div className="flex size-full flex-col text-sm font-medium">
              <div className="mx-3 flex items-center justify-between px-2.5 py-1">
                <div className="font-bold">文章</div>
                <div className="ml-2 flex items-center gap-3 text-sm ">
                  <ModeToggle />
                </div>
              </div>
              <div className="relative h-full overflow-hidden">收藏</div>
            </div>
          </section>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none !mt-0 w-full py-3 text-center text-xs opacity-20"> 预览版本</div>
      </div>
    </div>
  )
}

export default SidePanel
