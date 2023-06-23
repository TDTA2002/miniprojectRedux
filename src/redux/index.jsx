import { createStore } from 'redux';
import reducer from './product/reducer';

const store = createStore(reducer);

store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});

export default store;
