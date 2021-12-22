import React from "react";
import { useState } from "react/cjs/react.development";

const Search = (props) => {
  const [text, setText] = useState("");

  const onChangeHandler = (data) => {
    setText(data);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.queryHandler(text);
        setText("");
      }}
    >
      <div className="form-control">
        <input
          type="text"
          placeholder="Search Image Term..."
          value={text}
          onChange={(event) => {
            onChangeHandler(event.target.value);
          }}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default Search;
