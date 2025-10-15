import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-4">
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://vitejs.dev" target="_blank" className="hover:opacity-80 transition-opacity">
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
            <img src={reactLogo} className="h-16 w-16 animate-spin" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Vite + React</h1>
        <p className="text-gray-700 text-center mb-6">This is a test to verify Tailwind CSS is working properly.</p>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-sm text-gray-600 text-center">
            Edit <code className="bg-gray-200 px-1 py-0.5 rounded text-xs">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
