import React from 'react'
import { Slide, Heading, Notes, Text, S } from 'spectacle'

function TestEverything() {
  return (
    [
      <Slide>
        <Heading size={1} fit caps>
          Boas Práticas - Teste TUDO
        </Heading>

        <Text textColor='secondary' textAlign='left' style={{ paddingTop: 30 }}>
          É comum dar atenção somente à partes mais importantes do site quando se faz teste de
          acessibilidade.
          <br />
          <br />
          Mas lembre-se que o usuário pode{' '}
          <S textColor='tertiary' type='bold'>
            navegar pelo site inteiro
          </S>
          ... Garanta que todos os usuários consigam fazer isso.
        </Text>
      </Slide>,

      <Slide>
        <Heading size={1} fit caps>
          Não existe "site meio acessível"
        </Heading>

        <Notes>
          Fazer um "site meio acessível" é o mesmo que construir uma rampa pra cadeirantes e ela ser
          assim
        </Notes>
      </Slide>,

      <Slide contentStyles={{ padding: 0 }}>
        <img
          src='./images/half-accessible.jpg'
          alt='Rampa de deficiente não acessível'
          style={{
            maxHeight: 650
          }}
        />
      </Slide>,
    ]
  )
}

export default TestEverything
