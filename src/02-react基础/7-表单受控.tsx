import React, { useState } from "react";

export default function App13() {
  const [value, setvalue] = useState("");
  
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(evt) => setvalue(evt.target.value)}
      />
    </div>
  );
}
