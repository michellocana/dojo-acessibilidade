import React from 'react'
import ComponentToStringService from '../services/ComponentToString'
import NonSemanticHtmlExamples from '../components/NonSemanticHtmlExamples'
import {
  CodePane,
  Fill,
  Layout,
  Heading,
  Slide,
  Notes,
  Appear,
  BlockQuote,
  Quote,
  S,
  List,
  ListItem
} from 'spectacle'
import SemanticHtmlExamples from '../components/SemanticHtmlExamples'
import HolyGrailLayout from '../components/HolyGrailLayout'

function SemanticHtml() {
  return (
    [
      <Slide>
        <Heading size={1} fit caps>
          HTML Semântico
        </Heading>

        <Appear>
          <BlockQuote style={{ marginTop: 40 }}>
            <Quote textSize={36} textColor='secondary' style={{ borderColor: 'white' }}>
              Em linguística, a semântica estuda o{' '}
              <S type='bold' textColor='tertiary'>
                significado
              </S>{' '}
              e a{' '}
              <S type='bold' textColor='tertiary'>
                interpretação do significado
              </S>{' '}
              de uma palavra, de um signo, de uma frase ou de uma expressão em um determinado{' '}
              <S type='bold' textColor='tertiary'>
                contexto
              </S>
              .
            </Quote>
          </BlockQuote>
        </Appear>

        <Notes>
          Primeiramente, qual o significado da palavra semântica?
          <br />
          <br />E como isso influencia no meu HTML?
        </Notes>
      </Slide>,

      <Slide contentStyles={{ maxHeight: '100%' }}>
        <Layout style={{ maxHeight: 'inherit', position: 'relative' }}>
          <Fill>
            <HolyGrailLayout />
          </Fill>
        </Layout>

        <Notes>
          <List>
            <ListItem>Existe desde os primórdios da internet</ListItem>
            <ListItem>Todo mundo conhece ou já ouviu falar</ListItem>
            <ListItem>Já foi e ainda é muito usado na internet</ListItem>
          </List>
        </Notes>
      </Slide>,

      <Slide>
        <Heading size={1} fit caps>
          De que forma um
          <br />
          HTML semântico ajuda
          <br />
          na acessibilidade?
        </Heading>
      </Slide>,

      <Slide contentStyles={{ maxWidth: 1150 }}>
        <Heading size={1} fit caps>
          HTML Semântico = Contexto para screen readers
        </Heading>

        <Layout style={{ marginTop: 30 }}>
          <Fill style={{ marginRight: 20 }}>
            <CodePane
              lang='html'
              source={ComponentToStringService.convert(<NonSemanticHtmlExamples />)}
            />
          </Fill>

          <Fill>
            <CodePane
              lang='html'
              source={ComponentToStringService.convert(<SemanticHtmlExamples />)}
            />
          </Fill>
        </Layout>

        <Notes>
          Ajuda na navegação via screen reader
          <br />
          <br />
          Alguns leitores de tela como NVDA possuem uma funcionalidade de navegar entre títulos ou
          links da página
        </Notes>
      </Slide>,
    ]
  )
}

export default SemanticHtml
