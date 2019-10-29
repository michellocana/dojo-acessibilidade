/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'

import {
  Deck,
  Heading,
  Slide,
  Notes,
  Image,
  Layout,
  Fill,
  Appear,
  List,
  ListItem,
  Text,
  BlockQuote,
  Quote,
  Cite,
  S,
  CodePane,
  Fit,
  Link
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import 'normalize.css'

import ComponentToStringService from './services/ComponentToString'

import IntroBackground from './components/IntroBackground'
import HolyGrailLayout from './components/HolyGrailLayout'
import NonSemanticHtmlExamples from './components/NonSemanticHtmlExamples'
import SemanticHtmlExamples from './components/SemanticHtmlExamples'
import WaiAriaWrapper from './components/WaiAriaWrapper'
import OutlineExample from './components/OutlineExample'
import FlexOrderExample from './components/FlexOrderExample'
import ContentText from './components/ContentText'
import ContextualImageAlt from './components/ContextualImageAlt'
import MetaViewport from './components/MetaViewport'
import AltExample from './components/AltExample'
import ExcessiveAltExample from './components/ExcessiveAltExample'
import IrrelevantAltExample from './components/IrrelevantAltExample'
import ImmediateFeedback from './components/ImmediateFeedback'
import ColorBlindnessExample from './components/ColorBlindnessExample'
import ComponentWithAccessibilityIssues from './components/ComponentWithAccessibilityIssues'
import SoftwareDevelopmentCycle from './components/SoftwareDevelopmentCycle'

const theme = createTheme(
  {
    primary: '#1F2022', // 'white',
    secondary: 'white', // '#1F2022',
    tertiary: '#35BAFD', // '#03A9FC',
    quaternary: '#CECECE' // '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

const Presentation = () => {
  return (
    <Deck
      transition={['fade']}
      transitionDuration={500}
      theme={theme}
      controls={false}
      showFullscreenControl={false}
      progress='bar'
    >
      <Slide>
        <IntroBackground />

        <Heading size={1} fit caps>
          Acessibilidade Web
        </Heading>

        <Heading size={2} fit caps>
          Como posso fazer minha parte?
        </Heading>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Uma breve apresentação
        </Heading>
      </Slide>

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
      </Slide>

      <Slide>
        <SoftwareDevelopmentCycle />

        <Notes>
          Antes da implantação de um produto, ele passa por diversas etapas de um ciclo de vida, e
          também por diferentes áreas de atuação
          <br />
          <br />A intenção é que todas as partes tenham consciência da importância da acessibilidade
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Os 4 princípios da acessibilidade (POUR)
        </Heading>

        <List>
          <ListItem>Perceivable (perceptível)</ListItem>
          <ListItem>Operable (operável)</ListItem>
          <ListItem>Understandable (coerente)</ListItem>
          <ListItem>Robust (robusto)</ListItem>
        </List>

        <Notes>O que minha aplicação precisa ter pra ser considerada acessível?</Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Perceivable (perceptível)
        </Heading>

        <Text fit textColor='secondary'>
          Cada usuário tem capacidades e limitações diferentes
        </Text>

        <Layout style={{ marginTop: 20 }}>
          <Appear>
            <Image style={{ maxWidth: '33%' }} margin={5} src='./images/braille-reader.jpg' />
          </Appear>

          <Appear>
            <Image style={{ maxWidth: '33%' }} margin={5} src='./images/eye-tracker.png' />
          </Appear>

          <Appear>
            <Image style={{ maxWidth: '33%' }} margin={5} src='./images/switch-access.jpg' />
          </Appear>
        </Layout>

        <Notes>
          Ter em mente que só por que o conteúdo é visível com um sentido (como a visão), não quer
          dizer que todos consigam consumir
          <br />
          <br />O conteúdo do site deve ser perceptível de todas as formas possíveis
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Operable (operável)
        </Heading>

        <Text fit textColor='secondary'>
          Permitir que o usuário consiga operar o site das mais diversas formas
        </Text>

        <Notes>
          Como usando SOMENTE o teclado ou mouse
          <br />
          <br />
          Fazer com que a experiência no site seja a mesma, independente do dispositivo usado
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Understandable (coerente)
        </Heading>

        <Text fit textColor='secondary'>
          Tanto a interface quanto o conteúdo dela devem ser de fácil entendimento
        </Text>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Robust (robusto)
        </Heading>

        <Text fit textColor='secondary'>
          Permitir que o conteúdo seja acessado numa grande
          <br /> variedade de browsers e dispositivos
        </Text>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Os 4 públicos que são mais impactados
          <br />
          pela acessibilidade (ou a falta dela)
        </Heading>

        <List>
          <Appear>
            <ListItem>Usuários com deficiências visuais: miopia, cegueira, daltonismo</ListItem>
          </Appear>
          <Appear>
            <ListItem>Usuários com deficiências motoras: lesão por esforço repetitivo</ListItem>
          </Appear>
          <Appear>
            <ListItem>Usuários com deficiências auditivas</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Usuários com deficiências cognitivas: autismo, transtorno do déficit de atenção,
              dislexia
            </ListItem>
          </Appear>
        </List>

        <Notes>
          A acessibilidade não necessariamente é pensada em atender só esses grupos, mas são eles
          que são mais beneficiados com isso
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Mito do usuário de minoria
        </Heading>

        <Appear>
          <BlockQuote style={{ marginTop: 80 }}>
            <Quote textSize={50} textColor='secondary' style={{ borderColor: 'white' }}>
              Acessibilidade é mais uma coisa pra mim me preocupar como desenvolvedor
            </Quote>
            <Cite margin={20}>Alguém que precisa assistir esse dojo</Cite>
          </BlockQuote>
        </Appear>

        <Appear>
          <BlockQuote style={{ marginTop: 20 }}>
            <Quote textSize={50} textColor='secondary' style={{ borderColor: 'white' }}>
              Quase ninguém é beneficiado com isso...
            </Quote>
            <Cite margin={20}>O mesmo cara da frase de cima</Cite>
          </BlockQuote>
        </Appear>

        <Notes>
          É um argumento fácil de utilizar e nos livra de se preocupar com várias coisas
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Mito do usuário de minoria
        </Heading>

        <Text textColor='secondary'>
          1 a cada 7 pessoas no mundo tem algum tipo de deficiência em algum nível, seja ela visual,
          motora, auditiva ou cognitiva
        </Text>

        <Notes>
          Imagine a cada 7 pessoas, uma delas ser privada de ter uma experiência como todas as
          outras, por algo que ela não escolheu ter
          <br />
          <br />
          Sim, ainda é uma minoria, mas é um número significativo para prestar atenção
        </Notes>
      </Slide>

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
      </Slide>

      <Slide contentStyles={{ maxHeight: '100%' }}>
        <Layout style={{ maxHeight: 'inherit', position: 'relative' }}>
          <Fill>
            <HolyGrailLayout>
              <Image style={{ margin: 0 }} height='90vh' src='./images/terra.jpg' />
            </HolyGrailLayout>
          </Fill>
        </Layout>

        <Notes>
          <List>
            <ListItem>Existe desde os primórdios da internet</ListItem>
            <ListItem>Todo mundo conhece ou já ouviu falar</ListItem>
            <ListItem>Já foi e ainda é muito usado na internet</ListItem>
          </List>
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          De que forma um
          <br />
          HTML semântico ajuda
          <br />
          na acessibilidade?
        </Heading>
      </Slide>

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
      </Slide>

      <Slide contentStyles={{ height: '100%', maxWidth: 980 }}>
        <Layout
          style={{
            height: '100%',
            flexDirection: 'column',
            padding: '20px 0',
            justifyContent: 'space-between'
          }}
        >
          <Fit style={{ paddingBottom: 10 }}>
            <Heading size={1} fit caps>
              Navegação com teclado funcionando por padrão
            </Heading>
          </Fit>

          <Fill>
            <video style={{ width: '100%', height: '100%', maxHeight: '84vh' }} autoPlay loop>
              <source src='./videos/form-keyboard-navigation.mp4' type='video/mp4' />
            </video>
          </Fill>
        </Layout>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          WAI-ARIA
        </Heading>

        <Heading size={1} fit caps textColor='secondary'>
          Web Accessibility Initiative - Accessible Rich Internet Applications
        </Heading>

        <Notes>
          Especificação W3C
          <br />
          <br />
          Agrega valor à informação apresentada no HTML
        </Notes>
      </Slide>

      <Slide>
        <Layout>
          <Fill>
            <Heading size={1} caps textSize={40} textAlign='left'>
              Aria Attributes
            </Heading>

            <List>
              <ListItem>aria-label</ListItem>
              <ListItem>aria-hidden</ListItem>
              <ListItem>aria-controls</ListItem>
              <ListItem>aria-labelledby</ListItem>
              <ListItem>aria-live</ListItem>
              <ListItem>aria-pressed</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Fill>
          <Fill>
            <Heading size={1} caps textSize={40} textAlign='left'>
              Aria Roles
            </Heading>

            <List>
              <ListItem>button</ListItem>
              <ListItem>link</ListItem>
              <ListItem>checkbox</ListItem>
              <ListItem>radio</ListItem>
              <ListItem>textbox</ListItem>
              <ListItem>presentation</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Fill>
        </Layout>

        <Notes>
          Attributes: Fornecem mais contexto ao HTML da página
          <br />
          <br />
          Roles: São quase que auto-explicativos, eles servem para suprir os gaps que um HTML
          não-semântico deixaria
        </Notes>
      </Slide>

      <Slide contentStyles={{ maxWidth: 1260 }}>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Agregando valor à informação do HTML
        </Heading>

        <WaiAriaWrapper />

        <Notes>
          <List>
            <ListItem>aria-label</ListItem>
            <ListItem>role="presentation"</ListItem>
            <ListItem>aria-pressed</ListItem>
            <ListItem>aria-hidden</ListItem>
            <ListItem>aria-controls</ListItem>
            <ListItem>aria-labelledby</ListItem>
          </List>
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Dicas de CSS para acessibilidade
        </Heading>
      </Slide>

      <Slide>
        <Heading size={1} textSize={66} caps style={{ paddingBottom: 10 }}>
          Não remova o outline de elementos clicáveis
        </Heading>

        <OutlineExample />

        <Notes>
          É comum a prática de remover o outline de botões/links, por que geralmente eles não
          combinam com o estilo do site em geral
          <br />
          Mas isso implica negativamente na acessibilidade do site, uma vez que fica difícil de
          saber onde o foco do teclado está
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Se mesmo assim deseja remover o outline
        </Heading>

        <Layout>
          <Fill>
            <Text textColor='secondary' textSize={18} textAlign='left'>
              Não use isso:{' '}
            </Text>
          </Fill>
          <Fill style={{ marginLeft: 20 }}>
            <Text textColor='secondary' textSize={18} textAlign='left'>
              Use isso:{' '}
            </Text>
          </Fill>
        </Layout>

        <Layout style={{ paddingTop: 10 }}>
          <Fill>
            <CodePane
              lang='html'
              source={`<style>
  *:focus {
    outline: none;
  }
</style>`}
            />
          </Fill>
          <Fill style={{ marginLeft: 20 }}>
            <CodePane
              lang='html'
              source={`<style>
  *:focus:not(:focus-visible) {
    outline: none;
  }
</style>`}
            />
          </Fill>
        </Layout>

        <Notes>
          O outline será removido para usuários que navegam com o mouse, e mantido para usuários que
          navegam pelo teclado
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Não modifique a ordem lógica do HTML via CSS
        </Heading>

        <Text textColor='secondary' textSize={24}>
          Propriedades de CSS que alteram a ordem em que os elementos são exibidos (como float,
          order ou flex-direction) podem até ser úteis, mas fazem com que o conteúdo da página não
          siga uma ordem lógica quando consumido pelo teclado ou por tecnologia assistiva.
        </Text>

        <FlexOrderExample />

        <Notes>
          Use com cautela
          <br />
          <br />
          Tente fazer com que o HTML sempre siga uma ordem lógica
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Use a propriedade "content" somente para fins visuais
        </Heading>

        <ContentText />

        <Text textColor='secondary' textSize={24} style={{ paddingTop: 20 }}>
          Mas todo texto que é setado via content não é selecionável, e também "não existe" para
          tecnologias assistivas
        </Text>

        <Appear>
          <Text textColor='secondary' textSize={24} style={{ paddingTop: 20 }}>
            Inclusive, a palavra "pseudo" em azul nesse slide é setada via content, tente selecionar
            ou copiar o texto dela
          </Text>
        </Appear>

        <Notes>Ênfase no PSEUDO, por que o elemento literalmente não existe</Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Media query assistiva: prefers-reduced-motion
        </Heading>

        <Layout>
          <Fill style={{ flex: 0.73 }}>
            <CodePane
              lang='html'
              style={{ marginTop: 20 }}
              source={`<style>
  .button {
    color: #fff;
    background-color: #dc3545;
    transition: background-color 500ms linear;
  }

  .button:hover {
    background-color: #000;
  }

  @media (prefers-reduced-motion: reduce) {
    .button {
      transition: none;
    }
  }
</style>`}
            />
          </Fill>
          <Fill style={{ marginLeft: 20 }}>
            <CodePane
              lang='js'
              style={{ marginTop: 20 }}
              source={`// Se for preciso, dá pra usar via JS também
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Lógica para remover animação aqui
}`}
            />
          </Fill>
        </Layout>
      </Slide>

      <Slide contentStyles={{ maxWidth: 1100 }}>
        <Layout style={{ height: '100%', flexDirection: 'column' }}>
          <Fit>
            <Heading size={1} fit caps style={{ paddingBottom: 5 }}>
              Media query assistiva: prefers-reduced-motion
            </Heading>
          </Fit>

          <Fill>
            <video style={{ width: '100%', maxHeight: '84vh' }} autoPlay loop>
              <source src='./videos/prefers-reduced-motion.mp4' type='video/mp4' />
            </video>
          </Fill>
        </Layout>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Desativando todas as transitions/animations do site
        </Heading>

        <CodePane
          lang='html'
          source={`<style>
  @media (prefers-reduced-motion: reduce) {
    *,
    *:before,
    *:after {
      animation: none !important;
      transition: none !important;
    }
  }
</style>`}
        />

        <Notes>
          Remove todas animações/transições, quando o usuário seta essa config no Windows
          <br />
          <br />
          Um bom exemplo de como !important pode sim ser útil em alguns casos
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Casos de uso de prefers-reduced-motion
        </Heading>

        <List>
          <ListItem>Desativar transições/animações do site</ListItem>
          <ListItem>Desativar smooth scroll</ListItem>
          <ListItem>Trocar um vídeo por uma imagem estática</ListItem>
          <ListItem>Desativar efeitos de parallax</ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Outras media queries assistivas
        </Heading>

        <List>
          <ListItem>prefers-reduced-transparency</ListItem>
          <ListItem>prefers-contrast</ListItem>
          <ListItem>prefers-color-scheme</ListItem>
          <ListItem>inverted-colors</ListItem>
          <ListItem>forced-colors</ListItem>
        </List>

        <Notes>
          inverted-colors: escolher entre contraste de foreground/background preto no branco, ou
          branco no preto
          <br />
          <br />
          forced-colors: o usuário delimita as cores que ele consegue enxergar, e o browser define o
          valor de "prefers-color-scheme" de acordo com essas cores
        </Notes>
      </Slide>

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
      </Slide>

      <Slide>
        <ExcessiveAltExample />

        <Notes>
          Mulher segurando garrafa de Coca-Cola, ao lado de produtos diversos da Coca-Cola.
        </Notes>
      </Slide>

      <Slide contentStyles={{ height: '100%' }}>
        <IrrelevantAltExample />
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Em busca do alt perfeito
        </Heading>

        <Text textColor='secondary' textSize={36} style={{ marginTop: 20 }}>
          Adicione um ponto final na descrição da imagem
        </Text>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Em busca do alt perfeito
        </Heading>

        <Text textColor='secondary' textSize={36} style={{ marginTop: 20 }}>
          Não precisa adicionar "Foto de..." ou "Imagem de..." no começo do texto de alt
        </Text>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Em busca do alt perfeito
        </Heading>

        <Text textColor='secondary' textSize={36} style={{ marginTop: 20 }}>
          Entenda o contexto da imagem na página, e só depois disso descreva ela
        </Text>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Contexto da imagem? What?
        </Heading>
      </Slide>

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
      </Slide>

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
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Boas Práticas - Não desabilite o zoom da página
        </Heading>

        <Text fit textColor='secondary' textSize={21}>
          Não tire o poder do usuário decidir o tamanho das coisas na tela
        </Text>

        <MetaViewport />

        <Notes>
          Desde que o RWD (design responsivo) começou a ser adotado, ficou comum o uso dessa meta
          tag
          <br />
          <br />
          Mas ela desabilita o zoom, então é melhor usar essa segunda versão dela
        </Notes>
      </Slide>

      <Slide contentStyles={{ height: 680, padding: '20px 0' }}>
        <Layout
          style={{
            flex: 1,
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center'
          }}
        >
          <Fit style={{ paddingBottom: 20 }}>
            <Heading size={1} fit caps>
              Boas Práticas - Tamanho importa
            </Heading>

            <Text textColor='secondary' textSize={24}>
              Dimensione corretamente as áreas de toque do site
            </Text>
          </Fit>

          <Fit
            style={{
              height: '75vh',
              maxHeight: 520
            }}
          >
            <Layout
              style={{
                height: 'inherit',
                maxHeight: 'inherit'
              }}
            >
              <Fill>
                <img
                  src='./images/tap-zone-wrong.svg'
                  alt='Área de toque errada.'
                  style={{ margin: '0 20px', maxHeight: '100%' }}
                />
              </Fill>

              <Fill>
                <img
                  src='./images/tap-zone-correct.svg'
                  alt='Área de toque correta.'
                  style={{ margin: '0 20px', maxHeight: '100%' }}
                />
              </Fill>
            </Layout>
          </Fit>
        </Layout>

        <Notes>O Chrome/Safari dão zoom quando uma área de toque muito pequena é tocada</Notes>
      </Slide>

      <Slide contentStyles={{ height: '100%', maxWidth: 980, padding: '40px 0' }}>
        <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
          <Fit style={{ paddingBottom: 20 }}>
            <Heading size={1} fit caps>
              Boas Práticas - Skip to content link
            </Heading>
          </Fit>

          <Fit style={{ maxHeight: 550 }}>
            <video style={{ width: '100%', height: '77vh', maxHeight: 550 }} autoPlay loop>
              <source src='./videos/skip-to-content-link.webm' type='video/webm' />
            </video>
          </Fit>
        </Layout>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Boas Práticas - Smooth scroll
        </Heading>

        <Text textColor='secondary' textAlign='left' style={{ paddingTop: 30 }}>
          Faça uma animação rápida, ou não use animação.
          <br />
          <br />
          Um scroll animado por muito tempo pode ser desagradável para pessoas com{' '}
          <S textColor='tertiary' type='bold'>
            epilepsia
          </S>
          .
          <br />
          <br />
          Segundo a WebAIM, o tempo máximo de smooth scroll deve ser de 250ms (1/4 de segundo).
        </Text>
      </Slide>

      <Slide>
        <Layout style={{ height: '100%', flexDirection: 'column' }}>
          <Fit>
            <Heading size={1} fit caps>
              Boas Práticas - Dê feedback instantâneo ao usuário
            </Heading>
          </Fit>

          <Fill style={{ paddingTop: 50 }}>
            <ImmediateFeedback />
          </Fill>

          <Notes>
            Essa prática ajuda principalmente usuários com algum tipo de transtorno de ansiedade,
            mas também é muito útil para o público em geral
          </Notes>
        </Layout>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Boas Práticas - Não dê um tempo determinado
          <br />
          para o usuário finalizar uma tarefa
        </Heading>

        <Notes>
          Por mais que a gente tente, a gente não pode prever todos os tipos de dificuldades que o
          usuário pode ter na nossa aplicação.
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Boas Práticas - Não leve em conta que você sabe
          <br /> por onde e como o usuário acessa seu site
        </Heading>

        <Notes>Sempre vai ter um usuário que vai te provar o contrário</Notes>
      </Slide>

      <Slide>
        <Heading fit size={1} textSize={48} caps textColor='tertiary'>
          Modelo de celular ou nome de pokémon?
        </Heading>

        <List style={{ display: 'flex', flexFlow: 'column wrap', maxHeight: 460 }}>
          <ListItem>Bluboo</ListItem>
          <ListItem>Aquaris</ListItem>
          <ListItem>Caterpillar</ListItem>
          <ListItem>Condor</ListItem>
          <ListItem>Digiland</ListItem>
          <ListItem>Doogee</ListItem>
          <ListItem>Echo Stellar</ListItem>
          <ListItem>Elephone</ListItem>
          <ListItem>Foxconn</ListItem>
          <ListItem>Gdippo</ListItem>
          <ListItem>Meizu</ListItem>
          <ListItem>Mobell</ListItem>
          <ListItem>Neffos</ListItem>
          <ListItem>Obi</ListItem>
          <ListItem>Oukitel</ListItem>
          <ListItem>Poptel</ListItem>
          <ListItem>Sensonic</ListItem>
        </List>

        <Notes>Dados do Analytics de Arezzo durante o período de 1 mês</Notes>
      </Slide>

      <Slide contentStyles={{ maxWidth: 1150 }}>
        <Layout style={{ flex: 1, flexDirection: 'column', height: '100%' }}>
          <Fit>
            <Heading size={1} fit caps>
              Boas Práticas - Teste em ferramentas reais, você mesmo
            </Heading>

            <Text textColor='secondary' textSize={24} style={{ paddingTop: 10, paddingBottom: 20 }}>
              Lighthouse está aí pra ajudar, mas não confie cegamente no score dele quando se trata
              de acessibilidade.{' '}
              <Link
                target='_blank'
                textColor='tertiary'
                href='https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/'
              >
                Muita coisa pode passar despercebida
              </Link>
              .
            </Text>
          </Fit>

          <Fit
            style={{
              height: '67vh',
              maxHeight: 500
            }}
          >
            <Layout style={{ margin: '0 -10px', alignItems: 'center' }}>
              <Fill style={{ padding: 10 }}>
                <img
                  src='./images/lighthouse-1.png'
                  alt='Interface do Lighthouse aberta.'
                  style={{ maxWidth: '100%', maxHeight: '67vh' }}
                />
              </Fill>

              <Fill style={{ padding: 10 }}>
                <img
                  src='./images/lighthouse-2.png'
                  alt='Resultados de teste do Lighthouse.'
                  style={{ maxWidth: '100%', maxHeight: '67vh' }}
                />
              </Fill>
            </Layout>
          </Fit>
        </Layout>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Boas Práticas - Teste em ferramentas reais
        </Heading>

        <Text textColor='secondary' textAlign='left' style={{ paddingTop: 30 }}>
          Screen readers mais usados:
        </Text>

        <List>
          <ListItem>JAWS e NVDA (Windows)</ListItem>
          <ListItem>TalkBack (Android)</ListItem>
          <ListItem>VoiceOver (iOS)</ListItem>
        </List>
      </Slide>

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
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Não existe "site meio acessível"
        </Heading>

        <Notes>
          Fazer um "site meio acessível" é o mesmo que construir uma rampa pra cadeirantes e ela ser
          assim
        </Notes>
      </Slide>

      <Slide contentStyles={{ padding: 0 }}>
        <img
          src='./images/half-accessible.jpg'
          alt='Rampa de deficiente não acessível'
          style={{
            maxHeight: 650
          }}
        />
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Ferramentas (para devs)
        </Heading>

        <List>
          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt-BR'
            >
              Lighthouse
            </Link>
          </ListItem>
          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.deque.com/axe/axe-for-web/'
            >
              Axe
            </Link>
          </ListItem>
          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.npmjs.com/package/eslint-plugin-jsx-a11y'
            >
              eslint-plugin-jsx-a11y
            </Link>
          </ListItem>
          <ListItem>
            Devtools do{' '}
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://developers.google.com/web/tools/chrome-devtools/accessibility/reference'
            >
              Chrome
            </Link>
            /
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector'
            >
              Firefox
            </Link>
          </ListItem>
          <ListItem>
            <Link target='_blank' textColor='tertiary' href='https://ui.reach.tech/'>
              Reach UI
            </Link>
          </ListItem>
        </List>

        <Notes>Reach UI - Componentes pensados exclusivamente em A11Y/UX (link)</Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Acessibilidade no Design
        </Heading>
      </Slide>

      <Slide>
        <Layout style={{ flexDirection: 'column' }}>
          <Fit>
            <Heading size={1} fit caps>
              Tamanho de fonte
            </Heading>

            <Text fit textColor='secondary'>
              É recomendado no mínimo 16px de tamanho de fonte
            </Text>
          </Fit>

          <Fill style={{ paddingTop: 30 }}>
            <img
              style={{ maxHeight: '65vh' }}
              src='./images/small-font-size-zoom.gif'
              alt='Exemplo de zoom em input com tamanho de fonte abaixo do aceitável'
            />
          </Fill>

          <Notes>
            No safari, quando um elemento clicável é clicado e ele não tem um font-size de no mínimo
            16px, é dado zoom automaticamente
          </Notes>
        </Layout>
      </Slide>

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
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          O que define o nível de contraste entre 2 cores?
        </Heading>

        <Notes>É a diferença do nível de luminosidade entre 2 cores</Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          E como eu descubro isso?
        </Heading>
      </Slide>

      <Slide>
        <Text textColor='secondary' style={{ paddingBottom: 20 }}>
          (L1 + 0.05) / (L2 + 0.05)
        </Text>

        <Appear>
          <img src='./images/relative-luminance-formula.png' alt='' style={{ maxHeight: '75vh' }} />
        </Appear>
      </Slide>

      <Slide contentStyles={{ height: '100%', padding: '30px 0' }}>
        <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
          <Fit style={{ paddingBottom: 20 }}>
            <Heading size={1} fit caps>
              Ou pode usar um contrast checker
            </Heading>
          </Fit>

          <Fit>
            <video style={{ width: '100%', height: '82vh', maxHeight: 570 }} autoPlay loop>
              <source src='./videos/contrast-checker.webm' type='video/webm' />
            </video>
          </Fit>
        </Layout>

        <Notes>
          <List>
            <ListItem>O valor vai de 1 até 21</ListItem>

            <ListItem>O valor pode variar de acordo com o tamanho do texto</ListItem>

            <ListItem>
              Dica para testar o contraste: se estiver no celular, tente baixar o brilho da tela
            </ListItem>
          </List>
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
          Pensando em deficiências - Daltonismo
        </Heading>

        <ColorBlindnessExample />
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
          Não leve em conta que todos usuários
          <br />
          daltônicos enxergam tudo preto e branco
        </Heading>

        <img
          src='./images/daltonism-types.png'
          alt='Tipos de daltonismo'
          style={{ maxWidth: '100%' }}
        />

        <Notes>A monocromacia é o tipo mais raro de daltonismo (1:30000)</Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 15 }}>
          Pensando em deficiências - Campo de visão baixo
        </Heading>

        <img
          src='./images/low-scope-of-vision.png'
          alt='Exemplo de campo de visão baixo'
          style={{ maxWidth: '100%', maxHeight: '76vh' }}
        />

        <Notes>Manter informações relacionadas perto umas das outras</Notes>
      </Slide>

      <Slide contentStyles={{ maxWidth: 1100, height: '100%', padding: '40px 0' }}>
        <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
          <Fit style={{ paddingBottom: 20 }}>
            <Heading size={1} fit caps textSize={36}>
              Pensando em deficiências cognitivas - Spellcheck
            </Heading>
          </Fit>

          <Fit>
            <video style={{ width: '100%', height: '72vh', maxHeight: 540 }} autoPlay loop>
              <source src='./videos/spell-checking.webm' type='video/webm' />
            </video>
          </Fit>
        </Layout>

        <Notes>
          Sim... na maioria das vezes é difícil de implementar, mas pode ajudar pessoas com dislexia
          ou baixa escolaridade
        </Notes>
      </Slide>

      <Slide style={{ padding: '40px 0' }}>
        <Layout style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Fit>
            <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
              Mantenha o usuário engajado - Evite distrações
            </Heading>
          </Fit>

          <Fit
            style={{
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <video
              loop
              autoPlay
              style={{
                width: '100%',
                height: '68vh',
                maxHeight: 590
              }}
            >
              <source
                src='./videos/how-it-feels-to-browse-a-website-in-2019.mp4'
                type='video/mp4'
              />
            </video>
          </Fit>
        </Layout>

        <Notes>Poucas distrações beneficiam usuários com déficit de atenção ou ansiedade</Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Forneça um vocabulário simples...
          <br />
          sempre que possível evite:
        </Heading>

        <List>
          <ListItem>Metáforas: Pode confudir usuários com autismo</ListItem>
          <ListItem>
            Abreviações/acrônimos: Se usar, forneça o significado da sigla ou da abreviação (usando
            a tag
            <S type='bold' textColor='tertiary'>
              {' <abbr>'}
            </S>{' '}
            por exemplo)
          </ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 15 }}>
          Evite erros ortográficos propositais
        </Heading>

        <img
          alt='Erro ortográfico proposital'
          src='./images/erro-ortografico-proposital.png'
          style={{ maxWidth: '100%', maxHeight: 460, height: '72vh' }}
        />
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 15 }}>
          GAIA - Guia de Acessibilidade de Interfaces para Autismo
        </Heading>

        <img
          alt='Erro ortográfico proposital'
          src='./images/projeto-gaia.png'
          style={{ maxWidth: '100%', maxHeight: '82vh' }}
        />

        <Notes>
          Trabalho de mestrado da Talita Pagani, para guiar as pessoas a construir interfaces
          amigáveis para usuários com autismo
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
          Boas Práticas - Forneça texto para links <br />
          que sejam auto-explicativos
        </Heading>

        <Layout>
          <Fill>
            ❌
            <Text textColor='secondary' style={{ marginTop: 10 }}>
              <Link href='http://google.com' textColor='tertiary'>
                Clique aqui
              </Link>{' '}
              para ler sobre a empresa
            </Text>
          </Fill>

          <Fill>
            ✔️
            <Text textColor='secondary' style={{ marginTop: 10 }}>
              Para saber mais sobre a empresa,{' '}
              <Link href='http://google.com' textColor='tertiary'>
                acesse a página "sobre nós"
              </Link>
            </Text>
          </Fill>
        </Layout>

        <Notes>
          Alguns leitores de tela como NVDA tem uma funcionalidade de lista todos os links
          disponíveis na página, para facilitar a navegação...
          <br />
          <br />
          ...essa funcionalidade não servirá de nada se os links da página tiverem textos genéricos
          como "clique aqui"
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Boas Práticas - Use corretamente placeholders
        </Heading>

        <div style={{ position: 'relative' }}>
          <img
            src='./images/placeholder-as-label.jpg'
            alt='Placeholder usado como label'
            style={{ maxWidth: '100%' }}
          />

          <Appear>
            <img
              src='./images/placeholder-as-example.jpg'
              alt='Placeholder usado como exemplo'
              style={{ maxWidth: '100%', position: 'absolute', top: 0, left: 0 }}
            />
          </Appear>
        </div>

        <Notes>
          Não use placeholder como único indicativo de input
          <br />
          <br />
          Não adicione exemplo de valor de campo como placeholder
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Boas Práticas - Manere no Parallax
        </Heading>

        <Text textColor='secondary' textSize={40}>
          Sim, parallax foi um design trend muito usado no passado, e ainda é um pouco até hoje mas
          ao mesmo tempo que (se usado da forma correta) ele pode deixar a experiência do usuário
          mais interessante e atrativa, ele pode prejudicar a experiência de outros usuários
        </Text>
      </Slide>

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
      </Slide>

      <Slide progressColor='transparent'>
        <ComponentWithAccessibilityIssues />
      </Slide>

      <Slide contentStyles={{ height: '100%', padding: '40px 0' }}>
        <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
          <Fit style={{ paddingBottom: 20 }}>
            <Heading size={1} fit caps>
              Quebra de expectativa - Esse é só um
              <br />
              dos problemas de usar modal
            </Heading>
          </Fit>

          <Fit>
            <video style={{ height: '68vh', maxHeight: 490 }} autoPlay loop>
              <source src='./videos/auto-open-modal.mp4' type='video/mp4' />
            </video>
          </Fit>
        </Layout>

        <Notes>
          Modais que abrem sozinha, como ao entrar numa página ou antes de sair, geram uma quebra de
          expectativa e podem ser uma situação de stress para quem tem autismo
        </Notes>
      </Slide>

      <Slide contentStyles={{ height: '100%', padding: '40px 0' }}>
        <Layout style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
          <Fit style={{ paddingBottom: 20 }}>
            <Heading size={1} fit caps>
              Problemas de modais - A maioria não
              <br />
              possui controle de foco (focus trap)
            </Heading>
          </Fit>

          <Fit>
            <video style={{ height: '68vh', maxHeight: 490 }} autoPlay loop>
              <source src='./videos/modal-focus-trap.mp4' type='video/mp4' />
            </video>
          </Fit>
        </Layout>
      </Slide>

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
          Problemas de modais - Não seguem
          <br />o fluxo de conteúdo do site
        </Heading>

        <Text textColor='secondary'>
          Dependendo do layout, modais pode serem vistas como uma página por si só, e usuários com
          deficiências cognitivas podem tentar aperta o botão de voltar página e não ter o resultado
          esperado
        </Text>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Problemas de Carousel
        </Heading>

        <List>
          <ListItem>Autoplay é complicado...</ListItem>

          <ListItem>
            A maioria dos plugins não tem uma navegação com teclado decente/suporte para screen
            readers
          </ListItem>

          <ListItem>Conteúdo de difícil descoberta</ListItem>

          <ListItem>
            <Link href='http://shouldiuseacarousel.com/' target='_blank' textColor='tertiary'>
              shouldiuseacarousel.com
            </Link>
          </ListItem>
        </List>

        <Notes>
          Autoplay sem pause quando tá com mouse em cima. Isso pode ser prejudicial para usuários
          com dislexia/deficit de atenção.
          <br />
          <br />
          Difícil descoberta de conteúdo - Impacta acessibilidade e engajamento dos usuários
        </Notes>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Problemas de Tooltip
        </Heading>

        <List>
          <ListItem>Dificulta/impossibilita navegação com teclado</ListItem>
          <ListItem>Fraca UX em dispositivos móveis</ListItem>
          <ListItem>Só serve para guardar quantidades pequenas de informação</ListItem>
          <ListItem>Não deve ser usada para informações cruciais pro usuário</ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Ferramentas (para designers)
        </Heading>

        <List>
          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://chrome.google.com/webstore/search/NoCoffee%20Vision%20Simulator?hl=en&gl=US'
            >
              NoCoffee
            </Link>{' '}
            (extensão para o Chrome)
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.aditus.io/button-contrast-checker/'
            >
              Button Contrast Checker
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://havecamerawilltravel.com/photographer/simulate-colorblindness-photos-photoshop/'
            >
              Simulando daltonismo no Photoshop
            </Link>
          </ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} caps textSize={56}>
          Concluindo
        </Heading>

        <Notes>
          Preciso seguir todas as dicas?
          <br />
          <br />
          Acessibilidade = prima-irmã da UX
          <br />
          <br />A Web foi feita pra ser acessível desde o começo
        </Notes>
      </Slide>

      <Slide>
        <BlockQuote>
          <Quote textSize={50} textColor='secondary' style={{ borderColor: 'white' }}>
            The power of the Web is in its universality. Access by everyone regardless of disability
            is an essential aspect
          </Quote>
          <Cite margin={20}>Tim Berners-Lee</Cite>
        </BlockQuote>
      </Slide>

      <Slide>
        <Layout style={{ justifyContent: 'center' }}>
          <Fit>
            <Heading size={1} caps textSize={56} style={{ paddingBottom: 20 }}>
              Obrigado!
            </Heading>

            <Text
              textColor='secondary'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5
              }}
            >
              <img width={40} style={{ marginRight: 10 }} src='./images/slack.svg' alt='Slack' />
              michell.santo
            </Text>

            <Text
              textColor='secondary'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5
              }}
            >
              <img width={40} style={{ marginRight: 10 }} src='./images/mail.svg' alt='E-mail' />
              michell.santo@cwi.com.br
            </Text>
          </Fit>
        </Layout>
      </Slide>

      <Slide>
        <Heading size={1} caps textSize={56} style={{ paddingBottom: 20 }}>
          Referências
        </Heading>
        <List>
          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.uxpin.com/studio/blog/8-website-accessibility-best-practices-to-improve-ux/'
            >
              8 Website Accessibility Best Practices to Improve UX
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://24ways.org/2017/accessibility-through-semantic-html/'
            >
              Accessibility Through Semantic HTML
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://developers.google.com/web/fundamentals/accessibility/'
            >
              Accessibility | Web Fundamentals
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.sarasoueidan.com/blog/accessible-icon-buttons/'
            >
              Accessible Icon Buttons
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://uxdesign.cc/alternatives-to-placeholder-text-13f430abc56f'
            >
              Alternatives to Placeholder Text
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.slideshare.net/mobile/talitapagani/guia-de-acessibilidade-de-interfaces-web-focado-em-autismo'
            >
              Apresentação do GAIA
            </Link>
          </ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} caps textSize={56} style={{ paddingBottom: 20 }}>
          Referências
        </Heading>

        <List>
          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/'
            >
              Building the most inaccessible site possible with a perfect Lighthouse score
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://twitter.com/designernatan/status/1129009869074423813'
            >
              Filtros de cores do Windows
            </Link>
          </ListItem>

          <ListItem>
            <Link target='_blank' textColor='tertiary' href='https://gaia.wiki.br/'>
              GAIA - Guia de Acessibilidade de Interfaces Web focado em Autismo
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.deque.com/blog/current-design-trends-affect-web-accessibility/'
            >
              How Current Design Trends Affect Web Accessibility
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://www.mightybytes.com/blog/how-many-users-with-disabilities-on-site/'
            >
              How Many People With Disabilities Use My Website?
            </Link>
          </ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} caps textSize={56} style={{ paddingBottom: 20 }}>
          Referências
        </Heading>

        <List>
          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://medium.com/@superplane39/i-spent-three-months-as-a-keyboard-only-user-heres-what-i-learned-d5d19ccbef35'
            >
              I spent three months as a keyboard-only user. Here’s what I learned.
            </Link>
          </ListItem>
          <ListItem>
            <Link target='_blank' textColor='tertiary' href='http://designinclusivo.com/'>
              Princípios do design inclusivo
            </Link>
          </ListItem>

          <ListItem>
            <Link target='_blank' textColor='tertiary' href='https://webaim.org/articles/seizure/'>
              Seizure Disorders
            </Link>
          </ListItem>

          <ListItem>
            <Link target='_blank' textColor='tertiary' href='http://shouldiuseacarousel.com/'>
              Should I Use A Carousel?
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://medium.com/@zacdicko/size-matters-accessibility-and-touch-targets-56e942adc0cc'
            >
              Size matters! Accessibility and Touch Targets
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156'
            >
              The Science of Color Contrast — An Expert Designer’s Guide
            </Link>
          </ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} caps textSize={56} style={{ paddingBottom: 20 }}>
          Referências
        </Heading>

        <List>
          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://news.microsoft.com/stories/explanimators/inclusive-design'
            >
              The animated guide to inclusive design
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://adamsilver.io/articles/the-problem-with-tooltips-and-what-to-do-instead/'
            >
              The problem with tooltips and what to do instead
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://twitter.com/TatianaTMac/status/1127584204613505025'
            >
              Thread sobre HTML semântico
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://twitter.com/SaraSoueidan/status/1135249149958479872'
            >
              Thread sobre navegação pelo teclado
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://medium.com/codeandco/ux-making-experiences-feel-natural-with-feedback-loops-ce4eb333f99c'
            >
              UX: Creating natural experiences with feedback loops
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='http://adrianroselli.com/2019/02/uncanny-a11y.html'
            >
              Uncanny A11y
            </Link>
          </ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={1} caps textSize={56} style={{ paddingBottom: 20 }}>
          Referências
        </Heading>

        <List>
          <ListItem>
            <Link target='_blank' textColor='tertiary' href='https://webaccessibility.guide/'>
              Web Accessibility Guide
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://webaccess.berkeley.edu/ask-pecan/click-here'
            >
              What’s wrong with using "Click Here" links?
            </Link>
          </ListItem>

          <ListItem>
            <Link
              target='_blank'
              textColor='tertiary'
              href='https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939'
            >
              Writing CSS with Accessibility in Mind
            </Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  )
}

export default Presentation
