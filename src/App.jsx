import React, {useState} from 'react';
import "./style.css";
import {InputTodo} from './components/InputTodo';
import {IncompleteTodos} from './components/IncompleteTodos';
import {CompleteTodos} from './components/CompleteTodos';

export const App = () => {

  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTotos] = useState([
  ]);

  const [completeTodos, setCompleteTotos] = useState([
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
      <InputTodo tosoText={todoText} onClick={onClickAdd} onChange={onChangeTotoText} placeHolder={"タスクを入力"} disabled={incompleteTodos.length >= 5}/>
      {
      (incompleteTodos.length >= 5 ) && (
        <p style={{color: 'red'}}>登録できるタスクは5個までですよ～</p>
      )
      }
      <IncompleteTodos onClickComplete={onClickComplete} onClickDelete={onClickDelete} incompleteTodos={incompleteTodos}/>
      <CompleteTodos onClickBack={onClickBack} completeTodos={completeTodos}/>
    </>
  );
};
