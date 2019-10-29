import React from 'react'
import { Slide, Heading, Notes, Text, Appear } from 'spectacle'

function UseParallaxCorrectly() {
  return (
    [
      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Boas Práticas - Manere no Parallax
        </Heading>

        <Text textColor='secondary' textSize={40}>
          Sim, parallax foi um design trend muito usado no passado, e ainda é um pouco até hoje mas
          ao mesmo tempo que (se usado da forma correta) ele pode deixar a experiência do usuário
          mais interessante e atrativa, ele pode prejudicar a experiência de outros usuários
        </Text>
      </Slide>,

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Boas Práticas - Manere no Parallax
        </Heading>

        <Text textColor='secondary' textSize={40}>
          Segundo um estudo, 35% dos adultos acima de 40 anos possuem em algum grau, algum tipo de
          disfunção vestibular, que é uma disfunção que afeta o ouvido interno e partes do cérebro.
        </Text>

        <br />

        <Appear>
          <Text textColor='secondary' textSize={40}>
            Entre outros sintomas, essa disfunção pode causar tonturas e perda de equilibrio.
          </Text>
        </Appear>

        <br />

        <Appear>
          <Text textColor='secondary' textSize={40}>
            Sintomas esses que, podem serem induzidos por vários motivos, um deles, ao ver várias
            coisas se mexendo em velocidades diferentes, em primeiro e segundo plano (também
            conhecido como parallax).
          </Text>
        </Appear>

        <Notes>
          Isso não quer dizer que o parallax tenha que deixar de ser usado, mas só que deve ser
          usado com cuidado, e de forma sútil
        </Notes>
      </Slide>,
    ]
  )
}

export default UseParallaxCorrectly
