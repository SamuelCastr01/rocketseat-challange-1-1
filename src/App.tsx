import { TaskList } from './components/TaskList';
import { Header } from './components/Header';
import './styles/global.scss';
import { useEffect, useState, useRef } from 'react';

export function App() {
  const [count, setCount] = useState<number>(0);
  const value = useRef(count);
  useEffect(() => {
    console.log('hello');
  }, [value]);

  return (
    <>
      <button onClick={() => (value.current += 1)}>
        Contar {value.current}
      </button>
      <button onClick={() => setCount(count + 1)}>Contar {count}</button>
      {/* <Header />
      <TaskList /> */}
    </>
  );
}
