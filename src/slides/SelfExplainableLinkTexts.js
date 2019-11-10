/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Slide, Heading, Notes, Layout, Text, Fill } from 'spectacle'

import Link from '../components/Link'

function SelfExplainableLinkTexts() {
  return (
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
        Boas Práticas - Forneça texto para links <br />
        que sejam auto-explicativos
      </Heading>

      <Layout>
        <Fill>
          ❌
          <Text textColor='secondary' style={{ marginTop: 10 }}>
            <Link href='http://google.com' textColor='tertiary'>
              Clique aqui
            </Link>{' '}
            para ler sobre a empresa
          </Text>
        </Fill>

        <Fill>
          ✔️
          <Text textColor='secondary' style={{ marginTop: 10 }}>
            Para saber mais sobre a empresa,{' '}
            <Link href='http://google.com' textColor='tertiary'>
              acesse a página "sobre nós"
            </Link>
          </Text>
        </Fill>
      </Layout>

      <Notes>
        Alguns leitores de tela como NVDA tem uma funcionalidade de lista todos os links disponíveis
        na página, para facilitar a navegação...
        <br />
        <br />
        ...essa funcionalidade não servirá de nada se os links da página tiverem textos genéricos
        como "clique aqui"
      </Notes>
    </Slide>
  )
}

export default SelfExplainableLinkTexts
