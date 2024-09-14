import React, { useContext } from "react";
import Componenet4 from "./Component4/Component4";
import { context } from "../../../../../../App";

function Componenet3() {
  const info = useContext(context);
  return (
    <div>
      <h3> Component 3 {info}</h3>
      <Componenet4 />
    </div>
  );
}

export default Componenet3;
