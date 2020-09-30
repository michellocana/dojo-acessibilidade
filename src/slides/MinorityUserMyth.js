import React from 'react'
import { Slide, Heading, Appear, Quote, Cite, BlockQuote, Notes, Text } from 'spectacle'

import TextHighlight from '../components/TextHighlight'

function MinorityUserMyth() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Mito do usuário de minoria
      </Heading>

      <Appear>
        <BlockQuote style={{ marginTop: 80 }}>
          <Quote textSize={50} textColor='secondary' style={{ borderColor: 'white' }}>
            Acessibilidade é mais uma coisa pra mim me preocupar
          </Quote>
          <Cite margin={20}>Alguém que precisa assistir esse dojo</Cite>
        </BlockQuote>
      </Appear>

      <Appear>
        <BlockQuote style={{ marginTop: 20 }}>
          <Quote textSize={50} textColor='secondary' style={{ borderColor: 'white' }}>
            Quase ninguém é beneficiado com isso...
          </Quote>
          <Cite margin={20}>O mesmo cara da frase de cima</Cite>
        </BlockQuote>
      </Appear>

      <Notes>É um argumento fácil de utilizar e nos livra de se preocupar com várias coisas</Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        O quanto é "quase ninguém"?
      </Heading>

      <Text textColor='secondary'>
        1 a cada 7 pessoas no mundo possuem algum tipo de deficiência, em algum nível, que pode
        prejudicar sua experiência ao acessar um site
      </Text>

      <Notes>
        {!window.isFull && (
          <>
            <TextHighlight>Visual</TextHighlight>, <TextHighlight>motora</TextHighlight>,{' '}
            <TextHighlight>auditiva</TextHighlight> ou <TextHighlight>cognitiva</TextHighlight>
            <br />
            <br />
          </>
        )}
        Imagine a cada 7 pessoas, uma delas ser privada de ter uma experiência como todas as outras,
        por algo que ela não escolheu ter
        <br />
        <br />
        Sim, ainda é uma minoria, mas é um número significativo para prestar atenção
      </Notes>
    </Slide>
  ]
}

export default MinorityUserMyth
