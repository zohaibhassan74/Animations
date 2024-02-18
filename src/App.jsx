import Lottie from 'lottie-react';
import animationData from './assets/140973-wall-e-loading-animation.json'
import './App.css'

const App = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center">
      <div className='space-y-4 text-center mb-0'>
        <h1 className='text-2xl font-bold'>Learn to Drive From Us</h1>
          <p>With the World Famous driving experts</p>
          <Lottie className='SVG' animationData={animationData}/>
          <div className='flex gap-2 justify-center'>
            
          {/* <button className='p-2 items-center bg-indigo-500'>Join Us</button>
          <button>Prospectus Here</button> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
  