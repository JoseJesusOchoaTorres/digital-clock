import "./Digit.css"

export const Digit = ({ number }) => (
  <div className="digit">
    <div className={`digit__top digit__top--${number}`}></div>
    <div className={`digit__bottom digit__bottom--${number}`}></div>
  </div>
)