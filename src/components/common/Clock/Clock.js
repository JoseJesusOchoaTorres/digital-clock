import { Digit } from "../Digit/Digit"
import { Divider } from "../Divider/Divider"

import "./Clock.css"

export const Clock = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const hoursDigits = `${hours}`.split('')
  const minutesDigits = `${minutes}`.split('')
  const secondsDigits = `${seconds}`.split('')

  return (
    <div className="clock">
      <Digit number={hoursDigits.length === 1 ? 0 : hoursDigits[0]} />
      <Digit number={hoursDigits.length === 1 ? hoursDigits[0] : hoursDigits[1]} />

      <Divider />

      <Digit number={minutesDigits.length === 1 ? 0 : minutesDigits[0]} />
      <Digit number={minutesDigits.length === 1 ? minutesDigits[0] : minutesDigits[1]} />

      <Divider />

      <Digit number={secondsDigits.length === 1 ? 0 : secondsDigits[0]} />
      <Digit number={secondsDigits.length === 1 ? secondsDigits[0] : secondsDigits[1]} />
    </div>
  )
}