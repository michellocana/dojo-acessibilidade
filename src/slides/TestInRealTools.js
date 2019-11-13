import React from 'react'
import { Slide, Heading, List, ListItem, Layout, Fit, Text, Fill } from 'spectacle'

import Link from '../components/Link'

function TestInRealTools() {
  return [
    <Slide contentStyles={{ maxWidth: 1150 }}>
      <Layout style={{ flex: 1, flexDirection: 'column', height: '100%' }}>
        <Fit>
          <Heading size={1} fit caps>
            Teste em ferramentas reais, você mesmo
          </Heading>

          <Text
            fit
            textColor='secondary'
            textSize={24}
            style={{ paddingTop: 10, paddingBottom: 20 }}
          >
            Ferramentas automatizadas (como o Lighthouse) podem{' '}
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/'
            >
              deixar muita coisa passar
            </Link>
            .
          </Text>
        </Fit>

        <Fit
          style={{
            height: '67vh',
            maxHeight: 500
          }}
        >
          <Layout style={{ margin: '0 -10px', alignItems: 'center' }}>
            <Fill style={{ padding: 10 }}>
              <img
                src='./images/lighthouse-1.png'
                alt='Interface do Lighthouse aberta.'
                style={{ maxWidth: '100%', maxHeight: '67vh' }}
              />
            </Fill>

            <Fill style={{ padding: 10 }}>
              <img
                src='./images/lighthouse-2.png'
                alt='Resultados de teste do Lighthouse.'
                style={{ maxWidth: '100%', maxHeight: '67vh' }}
              />
            </Fill>
          </Layout>
        </Fit>
      </Layout>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Teste em ferramentas reais
      </Heading>

      <Text textColor='secondary' textAlign='left' style={{ paddingTop: 30 }}>
        Screen readers mais usados:
      </Text>

      <List>
        <ListItem>JAWS e NVDA (Windows)</ListItem>
        <ListItem>TalkBack (Android)</ListItem>
        <ListItem>VoiceOver (iOS)</ListItem>
      </List>
    </Slide>
  ]
}

export default TestInRealTools
