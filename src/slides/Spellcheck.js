import React from 'react'
import { Slide, Heading, Notes, Layout, Fit, Image } from 'spectacle'

import TextHighlight from '../components/TextHighlight'

function Spellcheck() {
  return (
    <Slide contentStyles={{ maxWidth: 1100, height: '100%', padding: '40px 0' }}>
      <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <Fit style={{ paddingBottom: 20 }}>
          <Heading size={1} fit caps textSize={36}>
            Pensando em deficiências cognitivas - Spellcheck
          </Heading>
        </Fit>

        <Fit style={{ maxHeight: 560 }}>
          <Image src='./images/spellcheck.png' style={{ marginTop: 0, marginBottom: 0 }} />
        </Fit>
      </Layout>

      <Notes>
        Na maioria das vezes é <TextHighlight>difícil de implementar</TextHighlight>, mas pode
        ajudar pessoas com <TextHighlight>dislexia</TextHighlight> ou{' '}
        <TextHighlight>baixa escolaridade</TextHighlight>
      </Notes>
    </Slide>
  )
}

export default Spellcheck
