'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { saveCartToLocalStorage } from '@/helper/localStorage'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()

        storeRef.current.subscribe(() => {
            const state = storeRef.current!.getState();
            if (typeof window !== "undefined")
                saveCartToLocalStorage(state.cart.cart)
        })
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}