/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './WaiAria.css'

const WaiAria = ({
  isFirstItemSelected = false,
  onButtonClick = () => {},
  showAriaLabel,
  showAriaControls,
  showAriaPressed,
  showAriaLabelledBy,
  showAriaHidden,
  showRolePresentation
}) => {
  const firstToggleClassName = isFirstItemSelected && { className: 'active' }
  const firstToggleLabel = showAriaLabel && { 'aria-label': 'Gulp' }
  const firstToggleControls = showAriaControls && { 'aria-controls': 'firstText' }
  const firstTogglePressed = isFirstItemSelected && showAriaPressed && { 'aria-pressed': true }
  const firstTextClassName = !isFirstItemSelected && { className: 'hidden' }
  const firstTextLabelledBy = showAriaLabelledBy && { 'aria-labelledby': 'firstToggle' }
  const firstTextHidden = !isFirstItemSelected && showAriaHidden && { 'aria-hidden': true }
  const firstImageRole = showRolePresentation && { role: 'presentation' }

  const secondToggleClassName = !isFirstItemSelected && { className: 'active' }
  const secondToggleLabel = showAriaLabel && { 'aria-label': 'Webpack' }
  const secondToggleControls = showAriaControls && { 'aria-controls': 'secondText' }
  const secondTogglePressed = !isFirstItemSelected && showAriaPressed && { 'aria-pressed': true }
  const secondTextClassName = isFirstItemSelected && { className: 'hidden' }
  const secondTextLabelledBy = showAriaLabelledBy && { 'aria-labelledby': 'secondToggle' }
  const secondTextHidden = isFirstItemSelected && showAriaHidden && { 'aria-hidden': true }
  const secondImageRole = showRolePresentation && { role: 'presentation' }

  return (
    <>
      <ul id='tabs'>
        <li>
          <button
            id='firstToggle'
            {...firstToggleClassName}
            {...firstToggleLabel}
            {...firstTogglePressed}
            {...firstToggleControls}
            onClick={() => onButtonClick(true)}
          >
            <img src='./images/gulp.svg' {...firstImageRole} />
          </button>
        </li>
        <li>
          <button
            id='secondToggle'
            {...secondToggleClassName}
            {...secondToggleLabel}
            {...secondTogglePressed}
            {...secondToggleControls}
            onClick={() => onButtonClick(false)}
          >
            <img src='./images/webpack.svg' {...secondImageRole} />
          </button>
        </li>
      </ul>

      <p id='firstText' {...firstTextClassName} {...firstTextLabelledBy} {...firstTextHidden}>
        Gulp is a toolkit for automating painful or time-consuming tasks in your development
        workflow.
      </p>

      <p id='secondText' {...secondTextClassName} {...secondTextLabelledBy} {...secondTextHidden}>
        Webpack is a static module bundler for modern JavaScript applications.
      </p>
    </>
  )
}

export default WaiAria
