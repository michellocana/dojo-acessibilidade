import React from 'react'
import { Heading, List, ListItem, Slide, Layout, Fit, Notes, Text, S } from 'spectacle'

import Link from '../components/Link'

function ComponentWithAccessibilityIssues() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Evite usar componentes
        <br />
        conhecidos por má acessibilidade
      </Heading>

      <List>
        <ListItem>Modais/Pop-ups</ListItem>
        <ListItem>Carousel</ListItem>
        <ListItem>Tooltip</ListItem>
      </List>
    </Slide>,

    <Slide contentStyles={{ height: '100%', padding: '40px 0' }}>
      <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <Fit style={{ paddingBottom: 20 }}>
          <Heading size={1} fit caps>
            Modais geram quebra de
            <br />
            expectativa, de forma negativa
          </Heading>
        </Fit>

        <Fit>
          <video style={{ height: '68vh', maxHeight: 490 }} autoPlay loop>
            <source src='./videos/auto-open-modal.mp4' type='video/mp4' />
          </video>
        </Fit>
      </Layout>

      <Notes>
        Modais que abrem sozinha, como ao entrar numa página ou antes de sair, geram uma quebra de
        expectativa e podem ser uma situação de stress para quem tem autismo
      </Notes>
    </Slide>,

    <Slide contentStyles={{ height: '100%', padding: '40px 0' }}>
      <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <Fit style={{ paddingBottom: 20 }}>
          <Heading size={1} fit caps>
            A maioria das modais não possuem
            <br />
            controle de foco (focus trap)
          </Heading>
        </Fit>

        <Fit>
          <video style={{ height: '68vh', maxHeight: 490 }} autoPlay loop>
            <source src='./videos/modal-focus-trap.mp4' type='video/mp4' />
          </video>
        </Fit>
      </Layout>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Modais não seguem
        <br />o fluxo de conteúdo do site
      </Heading>

      <Text textColor='secondary'>
        Dependendo do layout, modais pode serem vistas como uma página por si só, e usuários com{' '}
        <S type='bold' textColor='tertiary'>
          deficiências cognitivas
        </S>{' '}
        podem tentar apertar o botão de voltar página e não ter o resultado esperado
      </Text>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Problemas de Carousel
      </Heading>

      <List>
        <ListItem>Autoplay é complicado...</ListItem>

        <ListItem>
          A maioria dos plugins não tem uma navegação com teclado decente/suporte para screen
          readers
        </ListItem>

        <ListItem>Conteúdo de difícil descoberta</ListItem>

        <ListItem>
          <Link href='http://shouldiuseacarousel.com/' target='_blank' textColor='tertiary'>
            shouldiuseacarousel.com
          </Link>
        </ListItem>
      </List>

      <Notes>
        Autoplay sem pause quando tá com mouse em cima. Isso pode ser prejudicial para usuários com
        dislexia/deficit de atenção.
        <br />
        <br />
        Difícil descoberta de conteúdo - Impacta acessibilidade e engajamento dos usuários
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Problemas de Tooltip
      </Heading>

      <List>
        <ListItem>Dificulta/impossibilita navegação com teclado</ListItem>
        <ListItem>Fraca UX em dispositivos móveis</ListItem>
        <ListItem>Só serve para guardar quantidades pequenas de informação</ListItem>
        <ListItem>Não deve ser usada para informações cruciais pro usuário</ListItem>
      </List>
    </Slide>
  ]
}

export default ComponentWithAccessibilityIssues
