import { create } from 'zustand'

export const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => set(() => ({ user })),
}))
export const useCartLenStore = create((set) => ({
    cartLen: 0,
    setCartLen: (cartLen) => set(() => ({ cartLen })),
}))
