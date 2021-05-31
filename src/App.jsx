import React, {useState} from 'react';
import "./style.css";

export const App = () => {

const [todoText, setTodoText] = useState('');

const [incompleteTodos, setIncompleteTotos] = useState([
    "ああああ",
    "いいいい"
  ]);

const [completeTodos, setCompleteTotos] = useState([
    "うううう"
  ]);

  const onChangeTotoText = (event) => {
    setTodoText(event.target.value);
  }

  const onClickAdd = () => {
    if(todoText===''){
      return;
    }
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTotos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);//index番目から1つ要素を削除する
    setIncompleteTotos(newTodos);
  }

  const onClickComplete = (index) => {
    const todoText = incompleteTodos[index];
    const newTodos = [...completeTodos, todoText]
    setCompleteTotos(newTodos);

    const newTodos2 = [...incompleteTodos];
    newTodos2.splice(index, 1);//index番目から1つ要素を削除する
    setIncompleteTotos(newTodos2);
  }

  const onClickBack = (index) => {
    const todoText = completeTodos[index];
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTotos(newTodos);

    const newTodos2 = [...completeTodos];
    newTodos2.splice(index, 1);//index番目から1つ要素を削除する
    setCompleteTotos(newTodos2);
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTotoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
        {incompleteTodos.map((todo, index) => {
          return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
          );
        })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
        {completeTodos.map((todo, index) => {
          return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
          );
        })}
        </ul>
      </div>
    </>
  );
};
