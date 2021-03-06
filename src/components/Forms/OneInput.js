import { useState } from "react";

const OneInput = (props) => {
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value, props.onGetValue(input))}
          className="w-full p-2 border-2 border-slate-500"
          placeholder={props.inputName}
        />
        <button
          type="submit"
          className="bg-slate-500 text-white font-bold p-2 rounded mt-3 hover:bg-slate-800 transition-colors ease-in-out delay-75"
        >
          + Add
        </button>
      </form>
    </div>
  );
};

export default OneInput;
