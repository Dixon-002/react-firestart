import { useEffect, useState } from "react";
import App from "./App";
import createAppStore from "./redux/store";
import { Provider } from "react-redux";

export default function AppContainer() {
    const [store, setStore] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const initializeStore = async () => {
          try {
            const appStore = await createAppStore();
            setStore(appStore);
          } catch (err) {
            setError(`Error initializing the app: ${err.message}`);
          } finally {
            setLoading(false);
          }
        };
    
        initializeStore();
    }, []);

    if (loading || error) {
        return (
            <div className="flex items-center justify-center h-screen">
                {error && <p>Error: {error}</p>}
            </div>
        );
    }

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
