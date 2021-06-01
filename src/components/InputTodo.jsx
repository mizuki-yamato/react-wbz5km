import React from 'react';

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
}

export const InputTodo = (props) => {
  const {todoText, onChange, onClick, placeHolder} = props
  return (
    <>
      <div style={style}>
        <input placeholder={placeHolder} value={todoText} onChange={onChange}/>
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};