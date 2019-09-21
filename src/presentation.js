import React from 'react'

import {
  Deck,
  Heading,
  Slide,
  Notes,
  Image,
  Layout,
  Fill,
  Appear,
  List,
  ListItem,
  Text,
  BlockQuote,
  Quote,
  Cite,
  S
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import 'normalize.css'

import HolyGrailLayout from './components/HolyGrailLayout'

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        showFullscreenControl={false}
        progress='bar'
      >
        <Slide bgColor='primary'>
          <Heading size={1} fit caps>
            Acessibilidade Web
          </Heading>

          <Heading size={2} fit caps>
            Como posso fazer minha parte?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            Uma breve apresentação
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            Sobre a abordagem desse dojo
          </Heading>

          <Notes>
            É dividido em 2 partes: desenvolvimento e design
            <br />
            <br />
            Por que tornei esse dojo mais abrangente e não só pra a área de desenvolvimento?
          </Notes>
        </Slide>

        <Slide>
          <Layout style={{ maxHeight: 'inherit' }}>
            <Fill>
              <Image src='./images/software-development-cycle.png' />
            </Fill>
          </Layout>

          <Notes>
            Antes da implantação de um produto, ele passa por diversas etapas de um ciclo de vida, e
            também por diferentes áreas de atuação
            <br />
            <br />A intenção é que todas as partes tenham consciência da importância da
            acessibilidade
          </Notes>
        </Slide>

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
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            Perceivable (perceptível)
          </Heading>

          <Text fit>Cada usuário tem capacidades e limitações diferentes</Text>

          <Layout style={{ marginTop: 20 }}>
            <Appear>
              <Image margin={5} width='100%' src='./images/braille-reader.jpg' />
            </Appear>
            <Appear>
              <Image margin={5} width='100%' src='./images/eye-tracker.png' />
            </Appear>
            <Appear>
              <Image margin={5} width='100%' src='./images/switch-access.jpg' />
            </Appear>
          </Layout>

          <Notes>
            Ter em mente que só por que o conteúdo é visível com um sentido (como a visão), não quer
            dizer que todos consigam consumir
            <br />
            <br />O conteúdo do site deve ser perceptível de todas as formas possíveis
          </Notes>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            Operable (operável)
          </Heading>

          <Text fit>Permitir que o usuário consiga operar o site das mais diversas formas</Text>

          <Notes>
            Como usando SOMENTE o teclado ou mouse
            <br />
            <br />
            Fazer com que a experiência no site seja a mesma, independente do dispositivo usado
          </Notes>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            Understandable (coerente)
          </Heading>

          <Text fit>Tanto a interface quanto o conteúdo dela devem ser de fácil entendimento</Text>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            Robust (robusto)
          </Heading>

          <Text fit>
            Permitir que o conteúdo seja acessado numa grande
            <br /> variedade de browsers e dispositivos
          </Text>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            Os 4 públicos que são mais impactados
            <br />
            pela acessibilidade (ou a falta dela)
          </Heading>

          <List>
            <Appear>
              <ListItem>Usuários com deficiências visuais: miopia, cegueira, daltonismo</ListItem>
            </Appear>
            <Appear>
              <ListItem>Usuários com deficiências motoras: lesão por esforço repetitivo</ListItem>
            </Appear>
            <Appear>
              <ListItem>Usuários com deficiências auditivas</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Usuários com deficiências cognitivas: autismo, transtorno do déficit de atenção,
                dislexia
              </ListItem>
            </Appear>
          </List>

          <Notes>
            A acessibilidade não necessariamente é pensada em atender só esses grupos, mas são eles
            que são mais beneficiados com isso
          </Notes>
        </Slide>

        <Slide bgColor='secondary'>
          <Heading size={1} fit caps>
            Mito do usuário de minoria
          </Heading>

          <Appear>
            <BlockQuote style={{ marginTop: 80 }}>
              <Quote textSize={50}>
                Acessibilidade é mais uma coisa pra mim me preocupar como dev
              </Quote>
              <Cite margin={20}>Alguém que precisa assistir esse dojo</Cite>
            </BlockQuote>
          </Appear>

          <Appear>
            <BlockQuote style={{ marginTop: 20 }}>
              <Quote textSize={50}>Quase ninguém é beneficiado com isso...</Quote>
              <Cite margin={20}>O mesmo cara da frase de cima</Cite>
            </BlockQuote>
          </Appear>

          <Notes>
            É um argumento fácil de utilizar e nos livra de se preocupar com várias coisas
          </Notes>
        </Slide>

        <Slide bgColor='secondary'>
          <Heading size={1} fit caps>
            Mito do usuário de minoria
          </Heading>

          <Text textColor='primary'>
            1 a cada 7 pessoas no mundo tem algum tipo de desabilidade em algum nível, seja ela
            visual, motora, auditiva ou cognitiva
          </Text>

          <Notes>
            Imagine a cada 7 pessoas, uma delas ser privada de ter uma experiência como todas as
            outras, por algo que ela não escolheu ter
            <br />
            <br />
            Sim, ainda é uma minoria, mas é um número significativo para prestar atenção
          </Notes>
        </Slide>

        <Slide bgColor='secondary'>
          <Heading size={1} fit caps>
            HTML Semântico
          </Heading>

          <Appear>
            <BlockQuote style={{ marginTop: 40 }}>
              <Quote textSize={36}>
                Em linguística, a semântica estuda o{' '}
                <S type='bold' textColor='tertiary'>
                  significado
                </S>{' '}
                e a{' '}
                <S type='bold' textColor='tertiary'>
                  interpretação do significado
                </S>{' '}
                de uma palavra, de um signo, de uma frase ou de uma expressão em um determinado{' '}
                <S type='bold' textColor='tertiary'>
                  contexto
                </S>{' '}
                .
              </Quote>
            </BlockQuote>
          </Appear>

          <Notes>
            Primeiramente, qual o significado da palavra semântica?
            <br />
            <br />E como isso influencia no meu HTML?
          </Notes>
        </Slide>

        <Slide contentStyles={{ maxHeight: '100%' }} bgColor='tertiary'>
          <Layout style={{ maxHeight: 'inherit', position: 'relative' }}>
            <Fill>
              <HolyGrailLayout>
                <Image style={{ margin: 0 }} height='90vh' src='./images/terra.jpg' />
              </HolyGrailLayout>
            </Fill>
          </Layout>

          <Notes>
            <List>
              <ListItem>Existe desde os primórdios da internet</ListItem>
              <ListItem>Todo mundo conhece ou já ouviu falar</ListItem>
              <ListItem>Já foi e ainda é muito usado na internet</ListItem>
            </List>
          </Notes>
        </Slide>
      </Deck>
    )
  }
}
