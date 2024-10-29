import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setValue } from '../store/slices/testSlice';
import { RootState } from '../store';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.example.value);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(10))}>Set to 10</button>
    </div>
  );
};

export default Counter;