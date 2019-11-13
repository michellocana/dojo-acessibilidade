import React from 'react'
import { Slide, Heading, CodePane, Notes, Text, S, Appear } from 'spectacle'
// import ComponentToStringService from '../services/ComponentToString'
// import AltExample from '../components/AltExample'
import ExcessiveAltExample from '../components/ExcessiveAltExample'
import IrrelevantAltExample from '../components/IrrelevantAltExample'
import TextHighlight from '../components/TextHighlight'
// import ContextualImageAlt from '../components/ContextualImageAlt'

function AltTextGoodPractices() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Atributo alt para imagens
      </Heading>
    </Slide>,

    <Slide
      contentStyles={{ position: 'relative', height: '70%', display: 'flex', alignItems: 'center' }}
    >
      <CodePane
        style={{ fontSize: 30 }}
        lang='html'
        source={`<img src="./images/walking-on-rock.jpg"
     alt="Pessoa em cima de uma formação rochosa." />`}
      />

      <Appear>
        <img
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            margin: 'auto',
            height: '100%'
          }}
          src='./images/walking-on-rock.jpg'
          alt='Pessoa em cima de uma formação rochosa.'
        />
      </Appear>

      <Notes>O alt serve também pra quando a imagem não carrega por algum motivo</Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Como escrever um alt acessível?
      </Heading>
    </Slide>,

    <Slide>
      <ExcessiveAltExample />

      <Notes>
        Mulher segurando garrafa de Coca-Cola, ao lado de produtos diversos da Coca-Cola.
      </Notes>
    </Slide>,

    <Slide contentStyles={{ height: '100%' }}>
      <IrrelevantAltExample />
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Em busca do alt perfeito
      </Heading>

      <Text textColor='secondary' textSize={36} style={{ marginTop: 20 }}>
        Adicione um ponto final na descrição da imagem
      </Text>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Em busca do alt perfeito
      </Heading>

      <Text textColor='secondary' fit style={{ marginTop: 20 }}>
        Não precisa adicionar{' '}
        <S type='bold' textColor='tertiary'>
          "Foto de..."
        </S>{' '}
        ou{' '}
        <S type='bold' textColor='tertiary'>
          "Imagem de..."
        </S>{' '}
        <br />
        no começo do texto de alt
      </Text>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Em busca do alt perfeito
      </Heading>

      <Text textColor='secondary' fit style={{ marginTop: 20 }}>
        Entenda o contexto da imagem na página,
        <br />e só depois disso descreva ela
      </Text>
    </Slide>,

    // <ImageContext />

    <Slide>
      <Heading size={1} fit caps>
        Forneça alternativa à
        <br />
        conteúdos de texto
      </Heading>

      <Text textColor='secondary' style={{ paddingTop: 20 }}>
        Adicionar imagens que complementam a explicação de um texto (como um artigo ou tutorial)
        auxilia pessoas com{' '}
        <S type='bold' textColor='tertiary'>
          déficit de atenção
        </S>{' '}
        ou{' '}
        <S type='bold' textColor='tertiary'>
          dislexia
        </S>
      </Text>

      <Notes>
        Além de deixar o conteúdo <TextHighlight>mais interessante</TextHighlight> pro{' '}
        <TextHighlight>público em geral</TextHighlight>
      </Notes>
    </Slide>
  ]
}

export default AltTextGoodPractices
