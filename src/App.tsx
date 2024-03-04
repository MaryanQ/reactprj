import React, { useState } from "react";
import "./App.css";
import PropsDemo from "./Exercises/PropsDemo";
import Profile from "./Components/Profile";
import ListDemo from "./Exercises/ListDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView === "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}
            <PropsDemo title="Props Demo" />

            <ListDemo title="List Demo" />
            <Profile name={""} email={""} isActive={false} singleLine={false} />
          </div>
        </div>
      </div>
    </>
  );
}

type ButtonProps = {
  onSelected: (selected: string) => void;
  btnStyle?: string;
};

const Buttons = (props: ButtonProps) => {
  const { onSelected, btnStyle } = props;
  return (
    <>
      <button
        className={btnStyle ?? "btn-w100"}
        onClick={() => onSelected("info")}
      >
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button
        className={btnStyle ?? "btn-w100"}
        onClick={() => onSelected("props1")}
      >
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => onSelected("list")}>
        List Demo
      </button>
    </>
  );
};
