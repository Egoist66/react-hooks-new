import { useEffect, useState } from 'react';
import { Form } from './Form';


const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
function App() {
  const [count, setCount] = useState<number>(0)


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
      <div className="mui-container">
        <Form postsPromise={postsPromise} />
      </div>

  
    </>
  )
}

export default App
