import { effect, signal } from "@preact/signals-react"
import { Child } from "./Child";

export const count = signal<number>(0)

effect(() => {
  if (count.value % 2 === 0) {
    console.log('hello')
  } else console.log('sup')
})

console.log(count.value)

function App() {
  return (
    <div>
      <p>Count: {count}</p>
      <Child />
      <button onClick={() => count.value++}>click me</button>
      <input type='number' onChange={e => count.value = Number(e.target.value)}/>
    </div>
  );
}

export default App
