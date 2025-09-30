import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login:', { email, password })
    alert('Login button clicked!')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg flex">
        {/* Left Side - Placeholder Image */}
        <div className="bg-gray-300 flex items-center justify-center rounded-l-2xl" style={{ width: '600px', height: '500px' }}>
          <p className="text-gray-500 text-6xl">600 × 500</p>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center p-12" style={{ width: '600px' }}>
          <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Login</h1>
          
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900"
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App