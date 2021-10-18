import { React, useState, useEffect } from "react";
import "./style.scss";
function Main() {
  const [px, setPx] = useState(10);
  const [rootFont, setRootFont] = useState(16);
  const [rem, setRem] = useState(px / rootFont);
  const [mode, setMode] = useState("pxToRem");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (mode === "pxToRem") {
      setRem(px / rootFont);
      setActive(false);
    } else {
      setPx(rem * rootFont);
      setActive(true);
    }
  }, [px, rem, rootFont, mode, setActive]);

  const handleInput1 = (e) => {
    setPx(e.target.value);
    setMode("pxToRem");
  };

  const handleInput2 = (e) => {
    setRem(e.target.value);
    setMode("remToPx");
  };

  const onfontSize = (e) => {
    setRootFont(e.target.value);
  };

  return (
    <div className="main">
      <p className="main-title">PX to REM converter</p>
      <div className="main-input">
        <div className="input-group">
          <span className="group-title">Pixels</span>
          <input
            className={active ? "inputfirst active" : "inputfirst"}
            placeholder="Px"
            onChange={handleInput1}
            value={px}
          ></input>
          <p className="input-ico">px</p>
        </div>
        <div className="input-group">
          <span className="group-title">REM</span>
          <input
            className={active ? "inputlast " : "inputlast active"}
            placeholder="Rem"
            onChange={handleInput2}
            value={rem}
          ></input>
          <p className="input-ico">rem</p>
        </div>
      </div>
      <div className="main-bottom">
        <label>
          Calculation based on a root font-size of
          <input value={rootFont} onChange={onfontSize} />
          pixel
        </label>
      </div>
    </div>
  );
}

export default Main;
