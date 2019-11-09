import React from 'react'
import { Slide, Image, Heading, Notes, List, ListItem } from 'spectacle'
import FullVideo from './FullVideo'
import TextHighlight from './TextHighlight'

function ConsiderUserPreference() {
  return [
    <Slide>
      <Heading fit caps style={{ paddingBottom: 10 }}>
        Leve em consideração
        <br />
        as preferências do usuário
      </Heading>
    </Slide>,

    <Slide>
      <Heading textSize={66} caps style={{ paddingBottom: 10 }}>
        Em 2013 foi anunciado o novo iPhone com a versão 7 do iOS
      </Heading>

      <Notes>
        E com ele uma nova <TextHighlight>homescreen</TextHighlight> com{' '}
        <TextHighlight>parallax</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <FullVideo src='./videos/ios-7-parallax-announcement.mp4' loop={false} />
    </Slide>,

    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Logo após o lançamento,
        <br />
        a Apple recebeu feedbacks
        <br />
        negativos de alguns usuários
      </Heading>

      <Notes>
        Várias pessoas estavam tendo <TextHighlight>tonturas e vertigens</TextHighlight> ao usar o
        sistema.
        <br />
        <br />
        Esses usuários apresentavam distúrbios no <TextHighlight>sistema vestibular</TextHighlight>.
        <br />
        <br />
        Parte interna do <TextHighlight>ouvido</TextHighlight> que controla o{' '}
        <TextHighlight>equilíbrio</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <Image src='./images/ios-7-reduce-motion.png' height={680} style={{ margin: '0 auto' }} />

      <Notes>
        Para solucionar o problema, eles criaram uma opção para{' '}
        <TextHighlight>desativar essas animações</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <Image src='./images/reduced-motion-mac-os.png' />

      <Notes>
        Depois de um tempo ela surgiu para <TextHighlight>Mac OS</TextHighlight> também
      </Notes>
    </Slide>,

    <Slide>
      <Image src='./images/reduced-motion-windows.png' />
      <Notes>
        E também para <TextHighlight>Windows</TextHighlight>
      </Notes>
    </Slide>,

    <Slide contentStyles={{ maxWidth: 1100 }}>
      <FullVideo src='./videos/prefers-reduced-motion.mp4' objectFit='contain' />
    </Slide>,

    // <DisablingAllTransitions />,

    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Casos de uso (prefers-reduced-motion)
      </Heading>

      <List>
        <ListItem>Desativar transições/animações do site</ListItem>
        <ListItem>Desativar smooth scroll</ListItem>
        <ListItem>Trocar um vídeo por uma imagem estática</ListItem>
        <ListItem>Desativar efeitos de parallax</ListItem>
      </List>
    </Slide>

    // <OtherAssistiveMediaQueries />
  ]
}

export default ConsiderUserPreference
