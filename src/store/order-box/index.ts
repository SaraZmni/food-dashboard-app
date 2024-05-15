import { persist } from 'zustand/middleware';
import { create } from "zustand";
import { OrderBox } from "./types";


export const useOrderBox = create(persist<OrderBox>((set,get) => ({
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
        removeOrderBoxItem:(item) => {
            const foodMustRemove = item.quantity == 1 ;

            if(foodMustRemove){
                return set((oldOrderBox) => ({
                    invoice:{
                        totalPrice:oldOrderBox.invoice.totalPrice - item.price
                    },
                    items:oldOrderBox.items.filter((_item) => _item.id !== item.id)
                }))
            }

            set((oldOrderBox) => ({
                invoice:{
                    totalPrice:oldOrderBox.invoice.totalPrice - item.price
                },
                items:oldOrderBox.items.map(_item => {
                    if(_item.id === item.id){
                        return {
                            ..._item,
                            quantity:_item.quantity - 1 ,
                        }
                    }
                    return _item
                })
            }))
        }
    }

}),
{
    name:"local-orders",
    partialize:(state) => Object.fromEntries((Object.entries(state).filter(([key]) => !["actions"].includes(key)))) as OrderBox
}))