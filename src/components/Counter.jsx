import React from "react";
import { useCharacterCounter } from "../Hooks/useCharacterCounter";

export default function Counter() {
  const { inputValue, characterCount, handleInput } = useCharacterCounter();

  return (
    <div>
      <form action="">
        <p>Character Count: {characterCount}</p>
        <label>Input:</label>
        <input
          value={inputValue}
          type="text"
          placeholder="type your input"
          onInput={handleInput}
        />
      </form>
    </div>
  );
}
