import { useState,useEffect } from 'react'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Preloader from './Component/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     {loading ? <Preloader /> : <Dashboard />}
    </>
  )
}

export default App
