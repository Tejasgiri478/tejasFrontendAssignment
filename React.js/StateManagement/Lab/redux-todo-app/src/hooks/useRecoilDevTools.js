import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

// Custom hook to connect Recoil state to Redux DevTools
export const useRecoilDevTools = () => {
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    // Check if Redux DevTools extension is available
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      try {
        // Create a connection to Redux DevTools
        const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
          name: "Recoil State",
          features: {
            jump: true, // Allow jumping to specific state
            skip: false, // Disable skipping actions
            reorder: false, // Disable reordering actions
            dispatch: false, // Disable dispatching custom actions
            test: false, // Disable test mode
          },
        });

        // Initialize DevTools with current state
        const initialState = {};
        snapshot.getNodes_UNSTABLE().forEach((node) => {
          const value = snapshot.getLoadable(node).contents;
          initialState[node.key] = value;
        });

        devTools.init(initialState);

        // Send state updates to DevTools
        const stateUpdate = {};
        snapshot.getNodes_UNSTABLE().forEach((node) => {
          const value = snapshot.getLoadable(node).contents;
          stateUpdate[node.key] = value;
        });

        if (devTools && typeof devTools.send === "function") {
          devTools.send("Recoil State Update", stateUpdate);
        }

        // Cleanup on unmount
        return () => {
          if (devTools && typeof devTools.disconnect === "function") {
            devTools.disconnect();
          }
        };
      } catch (error) {
        console.error("Error connecting to Redux DevTools:", error);
        // Return empty cleanup function when there's an error
        return () => {};
      }
    }
  }, [snapshot]);
};
