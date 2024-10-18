import { Store } from '@tauri-apps/plugin-store'

// Store 会在 JavaScript 绑定时自动加载。
const store = new Store(0, 'store.bin')

// 设置一个值。
await store.set('some-key', { value: 5 })

// 获取一个值。
const val = await store.get('some-key')
console.log(val) // { value: 5 }

// 您可以在进行更改后手动保存存储
// 否则如上所述，它将在正常退出时保存。
await store.save()
