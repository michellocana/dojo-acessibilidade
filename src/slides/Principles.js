import React from 'react'
import { Slide, Notes, Heading, Text, Layout, Appear, Image, List, ListItem } from 'spectacle'
import TextHighlight from '../components/TextHighlight'

function Principles() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Os 4 princípios da acessibilidade (POUR)
      </Heading>

      <List>
        <ListItem>Perceivable (perceptível)</ListItem>
        <ListItem>Operable (operável)</ListItem>
        <ListItem>Understandable (coerente)</ListItem>
        <ListItem>Robust (robusto)</ListItem>
      </List>

      <Notes>O que minha aplicação precisa ter pra ser considerada acessível?</Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Perceivable (perceptível)
      </Heading>

      <Text fit textColor='secondary'>
        Cada usuário tem capacidades e limitações diferentes
      </Text>

      <Layout style={{ marginTop: 20 }}>
        <Appear>
          <Image style={{ maxWidth: '33%' }} margin={5} src='./images/braille-reader.jpg' />
        </Appear>

        <Appear>
          <Image style={{ maxWidth: '33%' }} margin={5} src='./images/eye-tracker.png' />
        </Appear>

        <Appear>
          <Image style={{ maxWidth: '33%' }} margin={5} src='./images/switch-access.jpg' />
        </Appear>
      </Layout>

      <Notes>
        Ter em mente que só por que o conteúdo é visível{' '}
        <TextHighlight>com um sentido</TextHighlight> (como a visão), não quer dizer que{' '}
        <TextHighlight>todos consigam consumir</TextHighlight>
        <br />
        <br />O conteúdo do site deve ser perceptível de{' '}
        <TextHighlight>todas as formas possíveis</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Operable (operável)
      </Heading>

      <Text fit textColor='secondary'>
        Permitir que o usuário consiga operar
        <br />o site das mais diversas formas
      </Text>

      <Notes>
        Como usando somente o <TextHighlight>teclado</TextHighlight> ou{' '}
        <TextHighlight>mouse</TextHighlight>
        <br />
        <br />
        Fazer com que a experiência no site seja a mesma,{' '}
        <TextHighlight>independente do dispositivo usado</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Understandable (coerente)
      </Heading>

      <Text fit textColor='secondary'>
        Tanto a interface quanto o conteúdo
        <br />
        dela devem ser de fácil entendimento
      </Text>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Robust (robusto)
      </Heading>

      <Text fit textColor='secondary'>
        Permitir que o conteúdo seja acessado numa
        <br />
        grande variedade de browsers e dispositivos
      </Text>
    </Slide>
  ]
}

export default Principles
