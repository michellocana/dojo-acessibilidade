import React from 'react'
import {
  Slide,
  Heading,
  Notes,
  Layout,
  Link,
  BlockQuote,
  Quote,
  Cite,
  Text,
  Fill,
  ListItem,
  List,
  Appear
} from 'spectacle'

import TextHighlight from '../components/TextHighlight'

function Conclusion() {
  return [
    <Slide>
      <Heading size={1} caps textSize={56}>
        Checklist
      </Heading>

      <List>
        <ListItem>Garanta uma boa navegação por teclado</ListItem>
        <Appear>
          <ListItem>Permita que o usuário dê zoom</ListItem>
        </Appear>
        <Appear>
          <ListItem>Forneça alternativas à conteúdos não textuais</ListItem>
        </Appear>
        <Appear>
          <ListItem>Garanta um bom contraste de cores</ListItem>
        </Appear>
        <Appear>
          <ListItem>Provenha tamanhos de fontes adequados</ListItem>
        </Appear>
        {!window.isPocket && (
          <>
            <Appear>
              <ListItem>Use uma linguagem simples</ListItem>
            </Appear>
            <Appear>
              <ListItem>Não use a cor como único indicativo de informação</ListItem>
            </Appear>
          </>
        )}
      </List>
    </Slide>,

    <Slide>
      <Heading size={1} caps textSize={56}>
        Concluindo
      </Heading>

      <Notes>
        Preciso seguir <TextHighlight>todas as dicas</TextHighlight>?
        <br />
        <br />
        Acessibilidade = <TextHighlight>prima-irmã da UX</TextHighlight>
        <br />
        <br />A Web foi feita pra ser acessível <TextHighlight>desde o começo</TextHighlight>
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

      <Notes>
        <TextHighlight>NÃO ESQUEÇA DE ABRIR ESPAÇO PARA PERGUNTAS</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <Layout style={{ justifyContent: 'center' }}>
        <Fill>
          <Heading size={1} caps textSize={56} style={{ paddingBottom: 20 }}>
            Obrigado!
          </Heading>

          <Text textColor='secondary'>Caso queira deixar seu feedback:</Text>

          <Link
            href='slack://user?team=T04M3PXQQ&id=UAJ3721TR'
            textColor='tertiary'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              marginTop: 30
            }}
          >
            <img width={40} style={{ marginRight: 10 }} src='./images/slack.svg' alt='Slack' />
            michell.santo
          </Link>

          <Link
            href='mailto:michell.santo@cwi.com.br'
            textColor='tertiary'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              marginTop: 15
            }}
          >
            <img width={40} style={{ marginRight: 10 }} src='./images/mail.svg' alt='E-mail' />
            michell.santo@cwi.com.br
          </Link>
        </Fill>
      </Layout>
    </Slide>
  ]
}

export default Conclusion
