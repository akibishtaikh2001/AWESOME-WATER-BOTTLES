import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'


// const bottlesPromise = fetch('/bottles.json')
// .then(res => res.json());

// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/akibishtaikh2001/bottles-data/refs/heads/main/bottles.json')
// .then(res => res.json())

const bottlesPromise = fetch('/bottles.json')
.then(res => res.json()) 

function App() {


  // const bottles = [
  //   { id: 1, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  //   { id: 2, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  //   { id: 3, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  //   { id: 4, name: 'Pink Nike Bottle', price: 250, color: 'pink' },
  // ]

  return (
    <>
      <h1>Buy Awesome water Bottle</h1>
      <Suspense>
        <Bottles bottlesPromise={bottlesPromise} ></Bottles>
      </Suspense>
    </>
  )
}

export default App 
 