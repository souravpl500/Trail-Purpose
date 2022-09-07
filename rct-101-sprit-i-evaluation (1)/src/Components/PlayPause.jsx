import React from "react";
function PlayPause({ headtext, Btntext, handleToggle }) {
  const [headstatus, setHeadstatus] = React.useState(true);
  const [btnstatus, setBtnstatus] = React.useState(true);
  const toggle = () => {
    setHeadstatus(!headstatus);
    setBtnstatus(!btnstatus);
  };
  return (
    <div>
      <h1>{headstatus ? "The state is paused" : "The state is playing"}</h1>
      <button onClick={toggle}>{headstatus ? "paused" : "playing"}</button>
    </div>
  );
}

export default PlayPause;
