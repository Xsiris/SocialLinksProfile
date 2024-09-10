import { useState } from 'react'
import SocialCard from './components/SocialCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-socialGrey900">
      <SocialCard />
    </div>
  )
}

export default App
