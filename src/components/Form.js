import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="label-wrapper">
        <label htmlFor="new-todo-input">
          What needs to be done?
        </label>
      </h1>
      <div class="input-ui">
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        placeholder="Add new task here..."
      />
      <br/>
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
      </div>
    </form>
  );
}

export default Form;