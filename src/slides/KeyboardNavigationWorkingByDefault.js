import React from 'react'
import { Slide, Layout, Fit, Heading, Fill } from 'spectacle'

function KeyboardNavigationWorkingByDefault() {
  return (
    <Slide contentStyles={{ height: '100%', maxWidth: 980 }}>
      <Layout
        style={{
          height: '100%',
          flexDirection: 'column',
          padding: '20px 0',
          justifyContent: 'space-between'
        }}
      >
        <Fit style={{ paddingBottom: 10 }}>
          <Heading size={1} fit caps>
            Navegação com teclado funcionando por padrão
          </Heading>
        </Fit>

        <Fill>
          <video style={{ width: '100%', height: '100%', maxHeight: '84vh' }} autoPlay loop>
            <source src='./videos/form-keyboard-navigation.mp4' type='video/mp4' />
          </video>
        </Fill>
      </Layout>
    </Slide>
  )
}

export default KeyboardNavigationWorkingByDefault
