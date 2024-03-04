import React from "react";
import { BaseProps } from "../types";
import Profile from "../Components/Profile";
import { useState } from "react";

export default function PropsDemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction:{" "}
      <input
        type="checkbox"
        checked={showHorizontal}
        onChange={() => setShowHorizontal(!showHorizontal)}
      />
      <Profile
        name="Max Power"
        email="mp@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Ellen Degeneres"
        email="Ellen-Degeneres@email.com"
        isActive={false}
        singleLine={showHorizontal}
      />
      <Profile
        name="Every Harper"
        email="Every21@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Sussane Holt"
        email="HoltSussane@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
    </>
  );
}
