import React from 'react'
import { Slide, Heading, Notes, Layout, Fit, Text, S, Fill } from 'spectacle'

import TextHighlight from '../components/TextHighlight'
import ImageWithCredits from '../components/ImageWithCredits'
import RandomColorContrasts from '../components/RandomColorContrasts'

function ContrastColor() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Contraste de cores
      </Heading>

      <Text fit textColor='secondary'>
        Um bom contraste de cores (ou a falta dele) influencia <br />
        pessoas com{' '}
        <S textColor='tertiary' type='bold'>
          baixa visão
        </S>{' '}
        ou{' '}
        <S textColor='tertiary' type='bold'>
          daltonismo
        </S>
      </Text>
    </Slide>,

    <Slide>
      <Layout style={{ flexDirection: 'column' }}>
        <Fit>
          <Heading size={1} fit caps>
            O que define o nível de
            <br />
            contraste entre 2 cores?
          </Heading>
        </Fit>

        <Fill>
          <RandomColorContrasts />
        </Fill>
      </Layout>

      <Notes>
        Um <TextHighlight>cálculo</TextHighlight> comparando o{' '}
        <TextHighlight>nível de luminosidade</TextHighlight> entre 2 cores
        <br />
        <br />
        Esse nível vai de <TextHighlight>1 até 21</TextHighlight>
        <br />
        <br />
        Falar sobre como o <TextHighlight>olho humano</TextHighlight> pode enganar
      </Notes>
    </Slide>,

    // <Slide>
    //   <Heading size={1} fit caps>
    //     E como eu descubro isso?
    //   </Heading>
    // </Slide>,

    // <Slide>
    //   <Text textColor='secondary' style={{ paddingBottom: 20 }}>
    //     (L1 + 0.05) / (L2 + 0.05)
    //   </Text>

    //   <Appear>
    //     <img src='./images/relative-luminance-formula.png' alt='' style={{ maxHeight: '75vh' }} />
    //   </Appear>
    // </Slide>,

    <Slide contentStyles={{ height: '100%', padding: '30px 0' }}>
      <ImageWithCredits
        isVideo
        src='./videos/contrast-checker.webm'
        videoType='video/webm'
        author='WebAIM'
        credits='Contrast Checker'
        creditsLink='https://webaim.org/resources/contrastchecker/'
      />

      <Notes>
        Categorias: <TextHighlight>AA</TextHighlight> e <TextHighlight>AAA</TextHighlight>
        <br />
        <br />O valor pode <TextHighlight>variar</TextHighlight> de acordo com o{' '}
        <TextHighlight>tamanho do texto</TextHighlight>
        <br />
        <br />
        Dica para testar o contraste: se estiver no celular, tente{' '}
        <TextHighlight>baixar o brilho da tela</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <ImageWithCredits
        credits='Stark'
        src='./images/stark.png'
        creditsLink='https://getstark.co/'
        extraText='plugin para Figma / Adobe XD / Sketch'
      />

      <Notes>
        Para quem usa Figma, tem o plugin <TextHighlight>Stark</TextHighlight>, que faz esses
        cálculos direto no app
      </Notes>
    </Slide>
  ]
}

export default ContrastColor
