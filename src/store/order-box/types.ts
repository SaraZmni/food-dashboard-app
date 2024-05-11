import { FoodItemType } from "@components/food/food-item/food-item-type"

export interface OrderBoxItem extends FoodItemType {
 quantity:number;
}



export interface OrderBox {
    items:OrderBoxItem[],
    invoice:{
        totalPrice:number
    },
    actions: {
        addOrderBoxItem: (item:OrderBoxItem) => void,
        removeOrderBoxItem:(item:OrderBoxItem) => void
    }
}