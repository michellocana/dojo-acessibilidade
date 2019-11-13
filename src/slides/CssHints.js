import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

import OutlineExample from '../components/OutlineExample'
import TextHighlight from '../components/TextHighlight'
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
        É comum a prática de <TextHighlight>remover o outline</TextHighlight>
        <br />
        Mas isso implica negativamente na acessibilidade do site, uma vez que fica difícil de saber
        onde o foco do teclado está
      </Notes>
    </Slide>

    // <RemoveOutlineOnlyForMouseUsers />,

    // <DontModifyHtmlOrderWithCss />,

    // <ContentForVisualsOnly />,

    // <PrefersReducedMotionExample />,
  ]
}

export default CssHints
