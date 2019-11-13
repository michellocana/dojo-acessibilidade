import React, { useState, useEffect } from 'react'
import { Text, S } from 'spectacle'
import _ from 'lodash'

import styles from './RandomColorContrasts.module.css'

import ColorService from '../services/Color'

const RANDOM_COLORS_AMOUNT = 5

function RandomColorContrasts() {
  function getRandomColors() {
    return _.times(RANDOM_COLORS_AMOUNT, () => {
      return _.times(2, ColorService.getRandomColor)
    })
  }

  function getContrastIcon(ratio) {
    const src = ratio >= 4.5 ? './images/correct-icon.svg' : './images/wrong-icon.svg'
    return <img src={src} alt='' width={35} className={styles.ratioIcon} />
  }

  function renderBoxes() {
    return _.times(RANDOM_COLORS_AMOUNT, n => renderBox(n))
  }

  function renderBox(index) {
    const [boxColor, textColor] = randomColors[index]
    const contrastRatio = ColorService.getContrast(boxColor, textColor)

    return (
      <div>
        <div className={styles.boxWrapper}>
          <div className={styles.box} style={{ background: boxColor }}>
            <div className={styles.textWrapper}>
              <Text
                fit
                bold
                className={styles.text}
                textColor={textColor}
                style={{
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                Aa
              </Text>
            </div>
          </div>
        </div>

        <Text textColor='secondary' textSize={40} className={styles.ratio} textFont='Helvetica'>
          <S type='bold'>{contrastRatio}</S>
          :1
          {getContrastIcon(contrastRatio)}
        </Text>
      </div>
    )
  }

  const [randomColors, setRandomColors] = useState(getRandomColors())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomColors(getRandomColors())
    }, 3000)

    return () => clearInterval(intervalId)
  })

  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `repeat(${RANDOM_COLORS_AMOUNT}, 1fr)`
      }}
    >
      {renderBoxes()}
    </div>
  )
}

export default RandomColorContrasts
