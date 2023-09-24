import { createSlice } from '@reduxjs/toolkit';
import IIShoppingCartState from './IShoppingCartState';

const namespace = 'bag';

export const shoppingCart = createSlice({
    name: namespace,
    initialState: {
        models: []
    } as IIShoppingCartState,
    reducers: {
        add(state, actions) {
            state.models = actions.payload
        }
    }
});

export const {
    add
} = shoppingCart.actions;