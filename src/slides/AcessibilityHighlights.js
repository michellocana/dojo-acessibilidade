import React from 'react'
import { Slide, Notes, Heading } from 'spectacle'
import ImageWithCredits from '../components/ImageWithCredits'
import TextHighlight from '../components/TextHighlight'

function AcessibilityHighlights() {
  return [
    <Slide>
      <Heading size={1} fit caps textColor='tertiary'>
        Highlights de acessibilidade
      </Heading>
    </Slide>,

    <Slide>
      <ImageWithCredits
        author='Spotify'
        src='./images/spotify-drive-mode.gif'
        credits='Car view for Android users'
        creditsLink='https://community.spotify.com/t5/Android/Car-view-for-Android-users/td-p/4656661'
      />
      <Notes>
        <TextHighlight>Versão minimalista </TextHighlight> do Spotify quando ele detecta que está
        conectado à um bluetooth de carro.
        <br />
        <br />
        Não é web, mas é uma boa ideia de qualquer forma
      </Notes>
    </Slide>

    // Usar o app do waze como bom exemplo (áreas de toque/tamanho de fonte
    // grande, ícones fáceis de assimilar, etc) http://benjamintrigalou.com/waze.html
  ]
}

export default AcessibilityHighlights
