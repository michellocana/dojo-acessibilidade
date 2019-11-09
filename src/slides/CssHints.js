import React from 'react'
import {
  Slide,
  Heading,
  Notes,
  Layout,
  Fill,
  Text,
  CodePane,
  Appear,
  Fit,
  List,
  ListItem
} from 'spectacle'

import OutlineExample from '../components/OutlineExample'
import ConsiderUserPreference from '../components/ConsiderUserPreference'
// import OtherAssistiveMediaQueries from '../components/OtherAssistiveMediaQueries'
// import ContentText from '../components/ContentText'
// import ContentForVisualsOnly from '../components/ContentForVisualsOnly'
// import FullImage from '../components/FullImage'
// import DisablingAllTransitions from '../components/DisablingAllTransitions'
// import FlexOrderExample from '../components/FlexOrderExample'
// import PrefersReducedMotionExample from '../components/PrefersReducedMotionExample'
// import DontModifyHtmlOrderWithCss from '../components/DontModifyHtmlOrderWithCss'
// import CssHintsTitle from '../components/CssHintsTitle'
// import RemoveOutlineOnlyForMouseUsers from '../components/RemoveOutlineOnlyForMouseUsers'

function CssHints() {
  return [
    // <CssHintsTitle />,

    <Slide>
      <Heading size={1} textSize={66} caps style={{ paddingBottom: 10 }}>
        Garanta que os elementos possam ser focados com o teclado
      </Heading>

      <OutlineExample />

      <Notes>
        É comum a prática de remover o outline de botões/links, por que geralmente eles não combinam
        com o estilo do site em geral
        <br />
        Mas isso implica negativamente na acessibilidade do site, uma vez que fica difícil de saber
        onde o foco do teclado está
      </Notes>
    </Slide>,

    // <RemoveOutlineOnlyForMouseUsers />,

    // <DontModifyHtmlOrderWithCss />,

    // <ContentForVisualsOnly />,

    // <PrefersReducedMotionExample />,

    ConsiderUserPreference(),

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

export default CssHints
