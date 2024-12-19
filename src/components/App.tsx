import { use, useEffect, useState } from 'react';
import { Form } from './Form';
import { ThemeContext } from './contexts/ThemeProvider';


const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
function App() {
  const [count, setCount] = useState<number>(0)
  const {mode, toggleTheme} = use(ThemeContext)


  const showCounter = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    
  }


  useEffect(() => {
    showCounter()
  }, [])

  useEffect(() => {
    console.log(count)

  }, [count])

  return (
    <>
      <div style={{ backgroundColor: mode === 'dark' ? 'grey' : 'white' }} className="mui-container">
        <Form postsPromise={postsPromise} />

        <button className="mui-btn" onClick={toggleTheme}>Toggle Theme</button>

      </div>

  
    </>
  )
}

export default App
