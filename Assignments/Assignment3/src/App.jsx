import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task1 from './Components/Task1'
import Task2 from './Components/Task2'
import Task3 from './Components/Task3'
import Task4 from './Components/Task4'
import Task5 from './Components/Task5'
import Task6 from './Components/Task6'
import Task7 from './Components/Task7'
import Task8 from './Components/Task8'
import Task9 from './Components/Task9'
import Task10 from './Components/Task10'
import Task11 from './Components/Task11'
import Task12 from './Components/Task12'
import Task13 from './Components/Task13'
import Task14 from './Components/Task14'
import Task15 from './Components/Task15'
import Task16 from './Components/Task16'
import Task17 from './Components/Task17'
import Task18 from './Components/Task18'
import Task19 from './Components/Task19'
// import Task20 from './Components/Task20'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <h1 className='m-5 text-info border'>Assignment-1</h1>
          <div><Task1/></div> 
          <h1 className='m-5 text-info'>Assignment-2</h1>
          <div><Task2/></div>
          <h1 className='m-5 text-info'>Assignment-3</h1>
          <div><Task3/></div>
          <h1 className='m-5 text-info'>Assignment-4</h1>
          <Task4/>
          <h1 className='m-5 text-info'>Assignment-5</h1>
          <Task5/>
          <h1 className='m-5 text-info'>Assignment-6</h1>
          <Task6/>
          <h1 className='m-5 text-info'>Assignment-7</h1>
          <Task7/>
          <h1 className='m-5 text-info'>Assignment-8</h1>
          <Task8/>
          <h1 className='m-5 text-info'>Assignment-9</h1>
          <Task9/>
          <h1 className='m-5 text-info'>Assignment-10</h1>
          <Task10/>
          <h1 className='m-5 text-info'>Assignment-11</h1>
          <Task11/>
          <h1 className='m-5 text-info'>Assignment-12</h1>
          <Task12/>
          <h1 className='m-5 text-info'>Assignment-13</h1>
          <Task13/>
          <h1 className='m-5 text-info'>Assignment-14</h1>
          <Task14/>  
          <h1 className='m-5 text-info'>Assignment-15</h1>   
          <Task15/>
          <h1 className='m-5 text-info'>Assignment-16</h1>
          <Task16/>
          <h1 className='m-5 text-info'>Assignment-17</h1>
          <Task17/>
          <h1 className='m-5 text-info'>Assignment-18</h1>
          <Task18/>
          <h1 className='m-5 text-info'>Assignment-13</h1>
          {/* <Task19/>
          <h1 className='m-5 text-info'>Assignment-13</h1>
          <Task20/> */}
    </>
  )
}

export default App
