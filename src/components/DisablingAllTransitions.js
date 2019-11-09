import React from 'react'
import { Slide, Heading, CodePane, Notes } from 'spectacle'

function DisablingAllTransitions() {
  return (
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Desativando todas as transitions/animations do site
      </Heading>

      <CodePane
        lang='html'
        source={`<style>
  @media (prefers-reduced-motion: reduce) {
    *,
    *:before,
    *:after {
      animation: none !important;
      transition: none !important;
    }
  }
</style>`}
      />

      <Notes>
        Remove todas animações/transições, quando o usuário seta essa config no Windows
        <br />
        <br />
        Um bom exemplo de como !important pode sim ser útil em alguns casos
      </Notes>
    </Slide>
  )
}

export default DisablingAllTransitions
