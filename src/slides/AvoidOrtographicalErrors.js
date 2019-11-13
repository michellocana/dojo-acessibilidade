import React from 'react'
import { Slide, Notes } from 'spectacle'

import ImageWithCredits from '../components/ImageWithCredits'
import TextHighlight from '../components/TextHighlight'

function AvoidOrtographicalErrors() {
  return (
    <Slide>
      <ImageWithCredits
        isVideo
        src='./videos/digitau.mp4'
        author='Itaú'
        credits='Propaganda "Digitau"'
        creditsLink='https://www.youtube.com/watch?v=0vtkm-SKbQE'
        style={{
          width: '100%',
          maxWidth: 1250,
          height: 523,
          objectFit: 'cover'
        }}
      />

      <Notes>
        Evite <TextHighlight>erros ortográficos</TextHighlight>, eles dificultam a{' '}
        <TextHighlight>compreensão de conteúdo</TextHighlight>
      </Notes>
    </Slide>
  )
}

export default AvoidOrtographicalErrors
