import React from 'react'
import { Slide, Heading, Text, Notes } from 'spectacle'

import FlexOrderExample from './FlexOrderExample'

function DontModifyHtmlOrderWithCss() {
  return (
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Não modifique a ordem lógica do HTML via CSS
      </Heading>

      <Text textColor='secondary' textSize={24}>
        Propriedades de CSS que alteram a ordem em que os elementos são exibidos (como float, order
        ou flex-direction) podem até ser úteis, mas fazem com que o conteúdo da página não siga uma
        ordem lógica quando consumido pelo teclado ou por tecnologia assistiva.
      </Text>

      <FlexOrderExample />

      <Notes>
        Use com cautela
        <br />
        <br />
        Tente fazer com que o HTML sempre siga uma ordem lógica
      </Notes>
    </Slide>
  )
}

export default DontModifyHtmlOrderWithCss
