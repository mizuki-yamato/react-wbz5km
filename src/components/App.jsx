import React, {useState} from 'react';
import ColorfulMessage from './ColorfulMessage';

const App = () => {
  const onclickCountUp = () => {
    setNum(num+1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
  <ColorfulMessage color="red" message="こんにちは！">やっほー</ColorfulMessage>
  <button onClick={onclickCountUp}>カウントアップ</button>
  <p>{num}</p>
  </>);
};

export default App;
