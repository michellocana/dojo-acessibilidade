import React from 'react'
import { S } from 'spectacle'

const TextHighlight = ({ caps = true, children, ...otherProps }) => {
  return (
    <S type='bold' textColor='tertiary' caps={caps} {...otherProps}>
      {children}
    </S>
  )
}

export default TextHighlight
