import React from 'react'
import { Slide, Heading, Notes, Layout, Fit, Text, BlockQuote, Quote, Cite } from 'spectacle'

function Conclusion() {
  return (
    [
      <Slide>
        <Heading size={1} caps textSize={56}>
          Concluindo
        </Heading>

        <Notes>
          Preciso seguir todas as dicas?
          <br />
          <br />
          Acessibilidade = prima-irmã da UX
          <br />
          <br />A Web foi feita pra ser acessível desde o começo
        </Notes>
      </Slide>,

      <Slide>
        <BlockQuote>
          <Quote textSize={50} textColor='secondary' style={{ borderColor: 'white' }}>
            The power of the Web is in its universality. Access by everyone regardless of disability
            is an essential aspect
          </Quote>
          <Cite margin={20}>Tim Berners-Lee</Cite>
        </BlockQuote>
      </Slide>,

      <Slide>
        <Layout style={{ justifyContent: 'center' }}>
          <Fit>
            <Heading size={1} caps textSize={56} style={{ paddingBottom: 20 }}>
              Obrigado!
            </Heading>

            <Text
              textColor='secondary'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5
              }}
            >
              <img width={40} style={{ marginRight: 10 }} src='./images/slack.svg' alt='Slack' />
              michell.santo
            </Text>

            <Text
              textColor='secondary'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5
              }}
            >
              <img width={40} style={{ marginRight: 10 }} src='./images/mail.svg' alt='E-mail' />
              michell.santo@cwi.com.br
            </Text>
          </Fit>
        </Layout>
      </Slide>,
    ]
  )
}

export default Conclusion
