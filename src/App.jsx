
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import User from './User'

function App() {
  function handleClicked(){
    alert('button clicked')
  }
const handle2Clicked=()=>{
  alert('handle clicked')
}
  return (
    <>
      <h3>React core concepts</h3>
      <Friends></Friends>
      <User></User>
      <Counter></Counter>
      <button onClick={handleClicked}>Click me</button>
      <button onClick={handle2Clicked}>Click me2</button>
    </>
  )
}

export default App
