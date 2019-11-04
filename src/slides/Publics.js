import React from 'react'
import { Slide, Heading, Notes, Text, S } from 'spectacle'

function Publics() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Os 4 públicos que são mais impactados
        <br />
        pela acessibilidade (ou a falta dela)
      </Heading>

      <Text textColor='secondary' style={{ paddingTop: 40 }}>
        Usuários com algum nível de deficiência{' '}
        <S type='bold' textColor='tertiary'>
          visual
        </S>
        ,{' '}
        <S type='bold' textColor='tertiary'>
          motora
        </S>
        ,{' '}
        <S type='bold' textColor='tertiary'>
          auditiva
        </S>{' '}
        ou{' '}
        <S type='bold' textColor='tertiary'>
          cognitiva
        </S>
      </Text>

      <Notes>
        <S type='bold' textColor='tertiary'>
          Visuais
        </S>
        : miopia, cegueira, daltonismo
        <br />
        <S type='bold' textColor='tertiary'>
          Motoras
        </S>
        : lesão por esforço repetitivo
        <br />
        <S type='bold' textColor='tertiary'>
          Cognitivas
        </S>
        : autismo, déficit de atenção, dislexia, ansiedade
        <br />
        <br />A acessibilidade não necessariamente é pensada em atender só esses grupos, mas são
        eles que são mais beneficiados com isso
      </Notes>
    </Slide>
  ]
}

export default Publics
