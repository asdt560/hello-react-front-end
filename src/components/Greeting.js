import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingData } from '../redux/greeting/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.greetingReducer.success);
  const greeting = useSelector((state) => state.greetingReducer.text);
  let content;
  if (success === true) {
    content = greeting;
  }
  return (
    <div>
      <h1>Hello, this is the randomized greeting generator:</h1>
      <button type='button' onClick={() => dispatch(getGreetingData())}>
        Generate Greeting
      </button>
      <h2>{content}</h2>
    </div>
  )
}

export default Greeting;