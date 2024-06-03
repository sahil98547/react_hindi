import { useCallback, useEffect, useState, useRef } from 'react';

function App() {
  // useState hook to manage the length of the password
  const [length, setLength] = useState(8);
  // useState hook to manage if numbers are allowed in the password
  const [numberAllowed, setNumberAllowed] = useState(false);
  // useState hook to manage if special characters are allowed in the password
  const [charAllowed, setCharAllowed] = useState(false);
  // useState hook to manage the generated password
  const [password, setPassword] = useState(""); 

  // useRef hook to get a reference to the password input field
  const passwordRef = useRef(null);

  // useCallback hook to memoize the password generator function to avoid unnecessary re-creations
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxy";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+}{><?[]";

    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str[idx];
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // useCallback hook to memoize the copy to clipboard function
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 40);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect hook to run the password generator when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md m-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(parseInt(e.target.value)) }}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
