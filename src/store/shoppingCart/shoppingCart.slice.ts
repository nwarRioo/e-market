import { createSlice } from '@reduxjs/toolkit';
import IIShoppingCartState from './IShoppingCartState';

const namespace = 'bag';

export const shoppingCart = createSlice({
    name: namespace,
    initialState: {
        models: [],
        totalCount: 0
    } as IIShoppingCartState,
    reducers: {
        add(state, actions) {
            state.models = actions.payload
        },
        calculateTotalQuantity(state) {
            let totalQuantity = 0;
        
            state.models.forEach((model) => {
              totalQuantity += model.quantity!;
            });
            state.totalCount = totalQuantity
        }
    }
});

export const {
    add,
    calculateTotalQuantity
} = shoppingCart.actions;