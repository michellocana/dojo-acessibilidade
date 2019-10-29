import React from 'react'
import { Slide, Heading, Layout, Fit } from 'spectacle'

function SkipToContentLink() {
  return (
    <Slide contentStyles={{ height: '100%', maxWidth: 980, padding: '40px 0' }}>
      <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <Fit style={{ paddingBottom: 20 }}>
          <Heading size={1} fit caps>
            Boas Práticas - Skip to content link
          </Heading>
        </Fit>

        <Fit style={{ maxHeight: 550 }}>
          <video style={{ width: '100%', height: '77vh', maxHeight: 550 }} autoPlay loop>
            <source src='./videos/skip-to-content-link.webm' type='video/webm' />
          </video>
        </Fit>
      </Layout>
    </Slide>
  )
}

export default SkipToContentLink
