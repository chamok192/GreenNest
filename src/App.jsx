
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { AuthProvider } from './Contexts/AuthContext'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              style: {
                background: '#10B981',
              },
            },
            error: {
              duration: 4000,
              style: {
                background: '#EF4444',
              },
            },
          }}
        />
      </AuthProvider>
    </>
  )
}

export default App
