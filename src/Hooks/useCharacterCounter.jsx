import { useState, useReducer, useEffect, useCallback } from "react";
const characterlimit = 70;
const initialState = {
  characterCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "enforce_limit":
      const PolishedValue = action.payload.replace(/[^a-zA-Z0-9\s]/g, "");
      const enforcedValue = PolishedValue.slice(0, characterlimit);
      return {
        characterCount: enforcedValue.replace(/\s/g, "").length,
      };
    default:
      return state;
  }
};

export const useCharacterCounter = () => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = useCallback((e) => {
    let value = e.target.value;
    setInputValue(value);
    dispatch({ type: "enforce_limit", payload: value });
  }, []);

  useEffect(() => {
    document.title = `Character Count: ${state.characterCount}`;
  }, [state.characterCount]);

  return {
    inputValue,
    characterCount: state.characterCount,
    handleInput,
  };
};
