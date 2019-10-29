import React from 'react'
import { Slide, Layout, Fit, Heading, Fill, CodePane, Notes, Text, S } from 'spectacle'
import ComponentToStringService from '../services/ComponentToString'
import AltExample from '../components/AltExample'
import ExcessiveAltExample from '../components/ExcessiveAltExample'
import IrrelevantAltExample from '../components/IrrelevantAltExample'
import ContextualImageAlt from '../components/ContextualImageAlt'

function AltTextGoodPractices() {
  return (
    [
      <Slide>
        <Layout style={{ flexDirection: 'column' }}>
          <Fit>
            <Heading size={1} fit caps style={{ paddingBottom: 5 }}>
              Como escrever um alt acessível?
            </Heading>
          </Fit>

          <Fill>
            <Layout>
              <Fill>
                <CodePane
                  lang='html'
                  source={ComponentToStringService.convert(<AltExample />)}
                  style={{
                    display: 'flex',
                    height: '100%'
                  }}
                />
              </Fill>

              <Fit style={{ marginLeft: 20 }}>
                <AltExample />
              </Fit>
            </Layout>
          </Fill>
        </Layout>

        <Notes>O alt serve também pra quando a imagem não carrega por algum motivo</Notes>
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

        <Text textColor='secondary' textSize={36} style={{ marginTop: 20 }}>
          Não precisa adicionar "Foto de..." ou "Imagem de..." no começo do texto de alt
        </Text>
      </Slide>,

      <Slide>
        <Heading size={1} fit caps>
          Em busca do alt perfeito
        </Heading>

        <Text textColor='secondary' textSize={36} style={{ marginTop: 20 }}>
          Entenda o contexto da imagem na página, e só depois disso descreva ela
        </Text>
      </Slide>,

      <Slide>
        <Heading size={1} fit caps>
          Contexto da imagem? What?
        </Heading>
      </Slide>,

      <Slide
        contentStyles={{
          overflow: 'auto',
          maxHeight: '100%',
          maxWidth: 'none',
          height: 'calc(100% - 10px)',
          alignSelf: 'flex-start',
          padding: 0,
          display: 'flex'
        }}
      >
        <ContextualImageAlt />
      </Slide>,

      <Slide>
        <Heading size={1} fit caps>
          Forneça alternativa à conteúdos de texto
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
      </Slide>,
    ]
  )
}

export default AltTextGoodPractices
