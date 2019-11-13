import React from 'react'
import { Slide, Heading, Layout, Fit, Notes } from 'spectacle'

import TextHighlight from '../components/TextHighlight'

function SkipToContentLink() {
  return (
    <Slide contentStyles={{ height: '100%', maxWidth: 980, padding: '40px 0' }}>
      <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <Fit style={{ paddingBottom: 20 }}>
          <Heading size={1} fit caps>
            Botão para ir ao conteúdo principal
          </Heading>
        </Fit>

        <Fit style={{ maxHeight: 550 }}>
          <video style={{ width: '100%', height: '77vh', maxHeight: 550 }} autoPlay loop>
            <source src='./videos/skip-to-content-link.webm' type='video/webm' />
          </video>
        </Fit>
      </Layout>

      <Notes>
        Auxilia na <TextHighlight>navegação com teclado</TextHighlight> para páginas com{' '}
        <TextHighlight>muitos links</TextHighlight> no header
      </Notes>
    </Slide>
  )
}

export default SkipToContentLink
