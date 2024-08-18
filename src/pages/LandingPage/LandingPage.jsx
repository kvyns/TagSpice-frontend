import React from 'react'
// const [isLogin, setIsLogin] = useState(false)
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div>
        <div className='w-full bg-blue-400 left-1/2 m-auto max-w-screen-lg'>
            <div className='font-bold text-center p-5'>
              This is a landing page for TagSpice.
              <Link to="/login">Login</Link>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
