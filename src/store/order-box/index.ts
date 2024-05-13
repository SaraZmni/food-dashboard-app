import { create } from "zustand";
import { OrderBox } from "./types";


export const useOrderBox = create<OrderBox>((set,get) => ({
    items:[],
    invoice:{
        totalPrice:0
    },
    actions: {
        addOrderBoxItem: (item) => {
            const foodAlreadyExist = get().items.some(_item => _item.id === item.id)
            if(foodAlreadyExist){
                return set((oldOrderBox) => ({
                    invoice:{
                        totalPrice:oldOrderBox.invoice.totalPrice + item.price
                    },
                    items:oldOrderBox.items.map(_item => {
                        if(_item.id === item.id){
                            return {
                                ..._item,
                                quantity:_item.quantity + 1 ,
                            }
                        }
                        return _item
                    })
                }))
            }

            set((oldOrderBox) => ({
                invoice:{totalPrice:oldOrderBox.invoice.totalPrice + item.price},
                items:[...oldOrderBox.items,{...item,quantity:1}]
            }))
        },
        removeOrderBoxItem:(item) => {console.log('item', item)}
    }

}))