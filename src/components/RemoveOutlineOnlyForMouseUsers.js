import React from 'react'
import { Slide, Heading, Layout, Fill, Text, CodePane, Notes } from 'spectacle'

function RemoveOutlineOnlyForMouseUsers() {
  return (
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Se mesmo assim deseja remover o outline
      </Heading>

      <Layout>
        <Fill>
          <Text textColor='secondary' textSize={18} textAlign='left'>
            Não use isso:{' '}
          </Text>
        </Fill>
        <Fill style={{ marginLeft: 20 }}>
          <Text textColor='secondary' textSize={18} textAlign='left'>
            Use isso:{' '}
          </Text>
        </Fill>
      </Layout>

      <Layout style={{ paddingTop: 10 }}>
        <Fill>
          <CodePane
            lang='html'
            source={`<style>
  *:focus {
    outline: none;
  }
</style>`}
          />
        </Fill>
        <Fill style={{ marginLeft: 20 }}>
          <CodePane
            lang='html'
            source={`<style>
  *:focus:not(:focus-visible) {
    outline: none;
  }
</style>`}
          />
        </Fill>
      </Layout>

      <Notes>
        O outline será removido para usuários que navegam com o mouse, e mantido para usuários que
        navegam pelo teclado
      </Notes>
    </Slide>
  )
}

export default RemoveOutlineOnlyForMouseUsers
