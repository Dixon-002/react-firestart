import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { initializeAuth } from "./actions/authActions";

const createAppStore = async () => {
    try {
        const store = configureStore({
            reducer: rootReducer
        });

        await store.dispatch(initializeAuth());

        return store;
    } catch (error) {
        throw new Error("Some error occurred");
    }
};

export default createAppStore;