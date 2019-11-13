import React from 'react'
import { Slide, Notes, Heading } from 'spectacle'

import SoftwareDevelopmentCycle from '../components/SoftwareDevelopmentCycle'

function AboutTheDojoApproach() {
  return [
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
    </Slide>,

    <Slide>
      <SoftwareDevelopmentCycle />

      <Notes>
        Antes da implantação de um produto, ele passa por diversas etapas de um ciclo de vida, e
        também por diferentes áreas de atuação
        <br />
        <br />A intenção é que todas as partes tenham consciência da importância da acessibilidade
      </Notes>
    </Slide>,
  ]
}

export default AboutTheDojoApproach
