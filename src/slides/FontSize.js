import React from 'react'
import { Slide, Heading, Notes, Layout, Fit, Text, Fill } from 'spectacle'

function FontSize() {
  return (
    <Slide>
      <Layout style={{ flexDirection: 'column' }}>
        <Fit>
          <Heading size={1} fit caps>
            Tamanho de fonte
          </Heading>

          <Text fit textColor='secondary'>
            É recomendado no mínimo 16px de tamanho de fonte
          </Text>
        </Fit>

        <Fill style={{ paddingTop: 30 }}>
          <img
            style={{ maxHeight: '65vh' }}
            src='./images/small-font-size-zoom.gif'
            alt='Exemplo de zoom em input com tamanho de fonte abaixo do aceitável'
          />
        </Fill>

        <Notes>
          No safari, quando um elemento clicável é clicado e ele não tem um font-size de no mínimo
          16px, é dado zoom automaticamente
        </Notes>
      </Layout>
    </Slide>
  )
}

export default FontSize
