import React from 'react'
import { Slide, Heading } from 'spectacle'

import ContextualImageAlt from './ContextualImageAlt'

function ImageContext() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Contexto da imagem? What?
      </Heading>
    </Slide>,

    <Slide
      contentStyles={{
        overflow: 'auto',
        maxHeight: '100%',
        maxWidth: 'none',
        height: 'calc(100% - 10px)',
        alignSelf: 'flex-start',
        padding: 0,
        display: 'flex'
      }}
    >
      <ContextualImageAlt />
    </Slide>
  ]
}

export default ImageContext
