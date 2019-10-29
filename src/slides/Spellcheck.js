import React from 'react'
import { Slide, Heading, Notes, Layout, Fit } from 'spectacle'

function Spellcheck() {
  return (
    <Slide contentStyles={{ maxWidth: 1100, height: '100%', padding: '40px 0' }}>
      <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <Fit style={{ paddingBottom: 20 }}>
          <Heading size={1} fit caps textSize={36}>
            Pensando em deficiências cognitivas - Spellcheck
          </Heading>
        </Fit>

        <Fit>
          <video style={{ width: '100%', height: '72vh', maxHeight: 540 }} autoPlay loop>
            <source src='./videos/spell-checking.webm' type='video/webm' />
          </video>
        </Fit>
      </Layout>

      <Notes>
        Sim... na maioria das vezes é difícil de implementar, mas pode ajudar pessoas com dislexia
        ou baixa escolaridade
      </Notes>
    </Slide>
  )
}

export default Spellcheck
