import React from "react";
import { useCharacterCounter } from "../Hooks/useCharacterCounter";
import styles from "./Counter.module.css";
export default function Counter() {
  const { inputValue, characterCount, handleInput } = useCharacterCounter();

  return (
    <div>
      <form action="">
        <p>Character Count: {characterCount}</p>
        <label>Input:</label>
        <input
          className={styles.inputt}
          value={inputValue}
          type="text"
          placeholder="type your input"
          onInput={handleInput}
        />
      </form>
    </div>
  );
}
