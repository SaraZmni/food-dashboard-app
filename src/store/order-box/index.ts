import { create } from "zustand";
import { OrderBox } from "./types";


export const useOrderBox = create<OrderBox>(() => ({
    items:[],
    invoice:{
        totalPrice:0
    },
    actions: {
        addOrderBoxItem: (item) => {console.log('item', item)},
        removeOrderBoxItem:(item) => {console.log('item', item)}
    }

}))