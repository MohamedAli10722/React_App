import React, { useContext } from "react";
import { context } from "../../../../../../../../App";

function Componenet5() {
  const info = useContext(context);
  return (
    <div>
      <h5> Component 5 {info}</h5>
    </div>
  );
}

export default Componenet5;
