import { atom } from 'recoil'

const counterState = atom({
  key: 'counter',
  default: 0,
})

export { counterState }
