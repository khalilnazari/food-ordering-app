import { configureStore } from "@reduxjs/toolkit"
import shoppingBagSlice from "./reducers/shoppingCard"

export const store = configureStore({
    reducer: {
        shoppingBag: shoppingBagSlice
    }
})
