import React from 'react'
import { Slide, Heading, Text, Notes } from 'spectacle'

import TextHighlight from '../components/TextHighlight'

// import MetaViewport from '../components/MetaViewport'

const ICON_WIDTH = 37

function DontDisableZoom() {
  function renderText(text, icon = './images/plus-icon.svg') {
    return (
      <Text textColor='secondary' textAlign='left' style={{ paddingBottom: 10 }}>
        <img
          alt=''
          src={icon}
          width={ICON_WIDTH}
          style={{
            display: 'inline-block',
            verticalAlign: -3,
            marginRight: 10
          }}
        />
        {text}
      </Text>
    )
  }

  function renderPlusText(text) {
    return renderText(text, './images/plus-icon.svg')
  }

  function renderLessText(text) {
    return renderText(text, './images/less-icon.svg')
  }

  return [
    <Slide>
      <Heading size={1} textSize={55} caps>
        Não tire o poder do usuário decidir o tamanho das coisas na tela (zoom)
      </Heading>

      {/* <MetaViewport /> */}
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Tudo começou quando
        <br />o design responsivo foi adotado
      </Heading>

      <Notes>
        Ficou comum a prática de <TextHighlight>desativar o zoom</TextHighlight>
        <br />
        <br />
        Afinal, <TextHighlight>tudo está do tamanho desejado para todo mundo</TextHighlight>, certo?
        Errado.
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Escolhas que podemos
        <br />
        fazer em relação ao zoom
      </Heading>

      <Notes>Temos 3 escolhas que podemos fazer em relação à isso</Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Usar fontes extra-grandes para tudo
      </Heading>

      {renderPlusText('Beneficia usuários com deficiências visuais')}
      {renderLessText('Prejudica a estética do site')}
      {renderLessText('Limita a quantidade de conteúdo na tela')}

      <Notes>
        Essa é uma <TextHighlight>estratégia inclusiva</TextHighlight>, mas talvez atrapalhe quem
        não tenha esse tipo de necessidade
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Fazer design só para a maioria
      </Heading>

      {renderLessText('Aceitar que meu site não é inclusivo')}

      <Notes>
        Estratégia <TextHighlight>cômoda</TextHighlight> e <TextHighlight>exclusiva</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Não desabilitar o zoom
      </Heading>

      {renderPlusText('Liberdade para o usuário')}
      {renderLessText('Ao custo de alguns gestos de pinch')}

      <Notes>
        Estratégia <TextHighlight>inclusiva</TextHighlight>
      </Notes>
    </Slide>
  ]
}

export default DontDisableZoom
