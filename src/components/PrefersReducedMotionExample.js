import React from 'react'
import { Slide, Heading, Layout, Fill, CodePane } from 'spectacle'

function PrefersReducedMotionExample() {
  return (
    <Slide>
      <Heading size={1} fit caps>
        Media query assistiva: prefers-reduced-motion
      </Heading>

      <Layout>
        <Fill style={{ flex: 0.73 }}>
          <CodePane
            lang='html'
            style={{ marginTop: 20 }}
            source={`<style>
  .button {
    color: #fff;
    background-color: #dc3545;
    transition: background-color 500ms linear;
  }

  .button:hover {
    background-color: #000;
  }

  @media (prefers-reduced-motion: reduce) {
    .button {
      transition: none;
    }
  }
</style>`}
          />
        </Fill>
        <Fill style={{ marginLeft: 20 }}>
          <CodePane
            lang='js'
            style={{ marginTop: 20 }}
            source={`// Se for preciso, dá pra usar via JS também
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Lógica para remover animação aqui
}`}
          />
        </Fill>
      </Layout>
    </Slide>
  )
}

export default PrefersReducedMotionExample
