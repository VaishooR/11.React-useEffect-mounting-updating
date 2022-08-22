import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [text, settext] = useState('');
  let handleinput = (e) => {
    settext(e.target.value);
  };

  const [click, setclick] = useState(false);
  let handleclick = () => {
    setclick(!click);
  };

  useEffect(() => {
    console.log('Mounted');
  }, [text, click]);

  // useEffect(()=>{
  //   console.log('Mounted');
  // },[text])

  // useEffect(()=>{
  //   console.log('Mounted');
  // },[])

  // useEffect(()=>{
  //   console.log('Mounted');
  // })

  return (
    <div>
      <button onClick={handleclick}>Show/Hide</button>
      <br />
      <br />
      {click && (
        <div>
          <input type="text" onChange={handleinput} />
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
