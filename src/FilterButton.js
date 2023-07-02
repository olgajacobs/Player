import { useState } from 'react'
import './css/style.css'
import './Components/CenterBlock/Filter/filter.css'

function Filter({ filterList, filterTitle }) {
  const [buttons, setButtons] = useState([false, false, false])

  function buttonClick(buttonNumber) {
    const tempArray = [false, false, false]
    tempArray[buttonNumber] = !buttons[buttonNumber]
    setButtons(tempArray)
  }

  return (
    <div>
      <div className="dropdown">
        <button
          type="button"
          className={`filter__button _btn-text ${
            buttons[0] ? '_btn-color' : ''
          }`}
          onClick={() => buttonClick(0)}
        >
          {filterTitle}
        </button>
        <div
          id="myDropdown"
          className={`dropdown-content ${buttons[0] ? 'show' : ''}`}
        >
          {filterList}
        </div>
      </div>
    </div>
  )
}
export default Filter
