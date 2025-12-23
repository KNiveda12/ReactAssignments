import { AppProvider } from "../context/AppContext";
import Component2 from "./Component2";

const Component1 = () => {
  return (
    <AppProvider>
      <h3>Component 1</h3>
      <Component2 />
    </AppProvider>
  );
};

export default Component1;
