import React from 'react'
import { Slide, Heading, Notes, List, ListItem, Layout, Fit, Text, S, Appear } from 'spectacle'

function ContrastColor() {
  return (
    [
      <Slide>
        <Heading size={1} fit caps>
          Contraste de cores
        </Heading>

        <Text fit textColor='secondary'>
          Um bom contraste de cores (ou a falta dele) influencia <br />
          pessoas com{' '}
          <S textColor='tertiary' type='bold'>
            baixa visão
          </S>{' '}
          ou{' '}
          <S textColor='tertiary' type='bold'>
            daltonismo
          </S>
        </Text>
      </Slide>,

      <Slide>
        <Heading size={1} fit caps>
          O que define o nível de contraste entre 2 cores?
        </Heading>

        <Notes>É a diferença do nível de luminosidade entre 2 cores</Notes>
      </Slide>,

      <Slide>
        <Heading size={1} fit caps>
          E como eu descubro isso?
        </Heading>
      </Slide>,

      <Slide>
        <Text textColor='secondary' style={{ paddingBottom: 20 }}>
          (L1 + 0.05) / (L2 + 0.05)
        </Text>

        <Appear>
          <img src='./images/relative-luminance-formula.png' alt='' style={{ maxHeight: '75vh' }} />
        </Appear>
      </Slide>,

      <Slide contentStyles={{ height: '100%', padding: '30px 0' }}>
        <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
          <Fit style={{ paddingBottom: 20 }}>
            <Heading size={1} fit caps>
              Ou pode usar um contrast checker
            </Heading>
          </Fit>

          <Fit>
            <video style={{ width: '100%', height: '82vh', maxHeight: 570 }} autoPlay loop>
              <source src='./videos/contrast-checker.webm' type='video/webm' />
            </video>
          </Fit>
        </Layout>

        <Notes>
          <List>
            <ListItem>O valor vai de 1 até 21</ListItem>

            <ListItem>O valor pode variar de acordo com o tamanho do texto</ListItem>

            <ListItem>
              Dica para testar o contraste: se estiver no celular, tente baixar o brilho da tela
            </ListItem>
          </List>
        </Notes>
      </Slide>,
    ]
  )
}

export default ContrastColor
