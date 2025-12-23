import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Component6 = () => {
  const { e } = useContext(AppContext);

  return (
    <>
      <h3>Component 6</h3>
      <h4>This is prop e: {e}</h4>
    </>
  );
};

export default Component6;
