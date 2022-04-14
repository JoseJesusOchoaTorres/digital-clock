import { useEffect, useState } from 'react'
import { Clock } from './components/common/Clock/Clock'
import './App.css';

function App() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const getTime = () => {
    const currentDate = new Date()

    setHours(currentDate.getHours())
    setMinutes(currentDate.getMinutes())
    setSeconds(currentDate.getSeconds())
  }

  useEffect(() => {
    setInterval(getTime, 1000)
  }, [])

  return (
    <div className="App">
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
}

export default App;
