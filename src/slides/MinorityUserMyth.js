import React from 'react'
import { Slide, Heading, Appear, Quote, Cite, BlockQuote, Notes, Text } from 'spectacle'

function MinorityUserMyth() {
  return (
    [
      <Slide>
        <Heading size={1} fit caps>
          Mito do usuário de minoria
        </Heading>

        <Appear>
          <BlockQuote style={{ marginTop: 80 }}>
            <Quote textSize={50} textColor='secondary' style={{ borderColor: 'white' }}>
              Acessibilidade é mais uma coisa pra mim me preocupar como desenvolvedor
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

        <Notes>
          É um argumento fácil de utilizar e nos livra de se preocupar com várias coisas
        </Notes>
      </Slide>,

      <Slide>
        <Heading size={1} fit caps>
          Mito do usuário de minoria
        </Heading>

        <Text textColor='secondary'>
          1 a cada 7 pessoas no mundo tem algum tipo de deficiência em algum nível, seja ela visual,
          motora, auditiva ou cognitiva
        </Text>

        <Notes>
          Imagine a cada 7 pessoas, uma delas ser privada de ter uma experiência como todas as
          outras, por algo que ela não escolheu ter
          <br />
          <br />
          Sim, ainda é uma minoria, mas é um número significativo para prestar atenção
        </Notes>
      </Slide>,
    ]
  )
}

export default MinorityUserMyth
