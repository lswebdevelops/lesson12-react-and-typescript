import { ReactNode } from 'react'

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}
const Counter = ({setCount, children }: CounterProps ) => {
    //insteat, let's add it to the App.tsx
    // const [counter, setCounter] = useState(0);
  return (
    <>
        <h1>{children}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>Up</button>
         <button onClick={() => setCount(prev => prev -1)}>Down</button>
    </>
  )
}

export default Counter;
