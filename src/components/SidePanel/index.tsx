import FluentAdd16Regular from '~icons/fluent/add-16-regular'
import LucideUserCog from '~icons/lucide/user-cog'
import styles from './index.module.css'

function SidePanel() {
  return (
    <div className={styles['side-panel']}>
      <div className="ml-4 mr-3 flex items-center justify-between">
        <div className="relative flex items-center gap-1 text-lg font-semibold">
          <IconLocalLogo className="size-6" />
          OutSide
        </div>
        <div className="relative flex items-center gap-2">
          <Button variant="ghost" size="sm" className="no-drag-region">
            <FluentAdd16Regular className="size-6 " />
          </Button>
          <Button variant="ghost" size="sm" className="no-drag-region">
            <LucideUserCog className="size-6 " />
          </Button>
        </div>
      </div>
      <div className="flex w-full justify-between px-3 text-xl">
        <Button variant="ghost" size="sm" className="no-drag-region">
          <FluentAdd16Regular className="size-6 " />
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region">
          <FluentAdd16Regular className="size-6 " />
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region">
          <FluentAdd16Regular className="size-6 " />
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region">
          <FluentAdd16Regular className="size-6 " />
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region">
          <FluentAdd16Regular className="size-6 " />
        </Button>
        <Button variant="ghost" size="sm" className="no-drag-region">
          <FluentAdd16Regular className="size-6 " />
        </Button>
      </div>
      <div className="relative flex size-full overflow-hidden">
        <div className="grow">
          <section className="w-[var(--side-width)]] h-full shrink-0 snap-center">
            <div className="flex size-full flex-col text-sm font-medium">
              <div className="mx-3 flex items-center justify-between px-2.5 py-1">
                <div className="font-bold">文章</div>
                <div className="ml-2 flex items-center gap-3 text-sm "></div>

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
