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
  Fit
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import 'normalize.css'

import HolyGrailLayout from './components/HolyGrailLayout'
import NonSemanticHtmlExamples from './components/NonSemanticHtmlExamples'
import SemanticHtmlExamples from './components/SemanticHtmlExamples'
import WaiAriaWrapper from './components/WaiAriaWrapper'
import OutlineExample from './components/OutlineExample'
import ComponentToStringService from './services/ComponentToString'
import FlexOrderExample from './components/FlexOrderExample'
import ContentText from './components/ContentText'
import ContextualImageAlt from './components/ContextualImageAlt'

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
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
      <Slide bgColor='primary'>
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
        <Layout style={{ maxHeight: 'inherit' }}>
          <Fill>
            <Image src='./images/software-development-cycle.png' />
          </Fill>
        </Layout>

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

        <Text fit>Cada usuário tem capacidades e limitações diferentes</Text>

        <Layout style={{ marginTop: 20 }}>
          <Appear>
            <Image margin={5} width='100%' src='./images/braille-reader.jpg' />
          </Appear>

          <Appear>
            <Image margin={5} width='100%' src='./images/eye-tracker.png' />
          </Appear>

          <Appear>
            <Image margin={5} width='100%' src='./images/switch-access.jpg' />
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

        <Text fit>Permitir que o usuário consiga operar o site das mais diversas formas</Text>

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

        <Text fit>Tanto a interface quanto o conteúdo dela devem ser de fácil entendimento</Text>
      </Slide>

      <Slide>
        <Heading size={1} fit caps>
          Robust (robusto)
        </Heading>

        <Text fit>
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

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps>
          Mito do usuário de minoria
        </Heading>

        <Appear>
          <BlockQuote style={{ marginTop: 80 }}>
            <Quote textSize={50}>
              Acessibilidade é mais uma coisa pra mim me preocupar como dev
            </Quote>
            <Cite margin={20}>Alguém que precisa assistir esse dojo</Cite>
          </BlockQuote>
        </Appear>

        <Appear>
          <BlockQuote style={{ marginTop: 20 }}>
            <Quote textSize={50}>Quase ninguém é beneficiado com isso...</Quote>
            <Cite margin={20}>O mesmo cara da frase de cima</Cite>
          </BlockQuote>
        </Appear>

        <Notes>
          É um argumento fácil de utilizar e nos livra de se preocupar com várias coisas
        </Notes>
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps>
          Mito do usuário de minoria
        </Heading>

        <Text textColor='primary'>
          1 a cada 7 pessoas no mundo tem algum tipo de desabilidade em algum nível, seja ela
          visual, motora, auditiva ou cognitiva
        </Text>

        <Notes>
          Imagine a cada 7 pessoas, uma delas ser privada de ter uma experiência como todas as
          outras, por algo que ela não escolheu ter
          <br />
          <br />
          Sim, ainda é uma minoria, mas é um número significativo para prestar atenção
        </Notes>
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps>
          HTML Semântico
        </Heading>

        <Appear>
          <BlockQuote style={{ marginTop: 40 }}>
            <Quote textSize={36}>
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
              </S>{' '}
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

      <Slide contentStyles={{ maxHeight: '100%' }} bgColor='secondary'>
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

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary'>
          De que forma um
          <br />
          HTML semântico ajuda
          <br />
          na acessibilidade?
        </Heading>
      </Slide>

      <Slide bgColor='secondary' contentStyles={{ maxWidth: 1150 }}>
        <Heading size={1} fit caps textColor='tertiary'>
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

      <Slide bgColor='secondary' contentStyles={{ height: '100%', maxWidth: 980 }}>
        <Layout style={{ height: '100%', flexDirection: 'column' }}>
          <Fit>
            <Heading size={1} fit caps textColor='tertiary'>
              Navegação com teclado funcionando por padrão
            </Heading>
          </Fit>

          <Fill>
            <video style={{ width: '100%', height: '100%' }} autoPlay loop>
              <source src='./videos/form-keyboard-navigation.mp4' type='video/mp4' />
            </video>
          </Fill>
        </Layout>
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary'>
          WAI-ARIA
        </Heading>

        <Heading size={1} fit caps textColor='primary'>
          Web Accessibility Intiative - Accessible Rich Internet Applications
        </Heading>

        <Notes>
          Especificação W3C
          <br />
          <br />
          Agrega valor à informação apresentada no HTML
        </Notes>
      </Slide>

      <Slide bgColor='secondary'>
        <Layout>
          <Fill>
            <Heading size={1} caps textSize={40} textAlign='left'>
              Aria Attributes
            </Heading>

            <List textColor='primary'>
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

            <List textColor='primary'>
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

      <Slide bgColor='secondary' contentStyles={{ maxWidth: 1260 }}>
        <Heading size={1} fit caps textColor='tertiary' style={{ paddingBottom: 10 }}>
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

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary'>
          Dicas de CSS para acessibilidade
        </Heading>
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} textSize={66} caps textColor='tertiary' style={{ paddingBottom: 10 }}>
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

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary' style={{ paddingBottom: 10 }}>
          Se mesmo assim deseja remover o outline
        </Heading>

        <Layout>
          <Fill>
            <Text textColor='primary' textSize={18} textAlign='left'>
              Não use isso:{' '}
            </Text>
          </Fill>
          <Fill style={{ marginLeft: 20 }}>
            <Text textColor='primary' textSize={18} textAlign='left'>
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

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary' style={{ paddingBottom: 10 }}>
          Não modifique a ordem lógica do HTML via CSS
        </Heading>

        <Text textColor='primary' textSize={24}>
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

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary' style={{ paddingBottom: 10 }}>
          Use a propriedade "content" somente para fins visuais
        </Heading>

        <ContentText />

        <Text textColor='primary' textSize={24} style={{ paddingTop: 20 }}>
          Mas todo texto que é setado via content não é selecionável, e também "não existe" para
          tecnologias assistivas
        </Text>

        <Appear>
          <Text textColor='primary' textSize={24} style={{ paddingTop: 20 }}>
            Inclusive, a palavra "pseudo" em azul nesse slide é setada via content, tente selecionar
            ou copiar o texto dela ela
          </Text>
        </Appear>

        <Notes>Ênfase no PSEUDO, por que o elemento literalmente não existe</Notes>
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary'>
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

      <Slide bgColor='secondary'>
        <Layout style={{ height: '100%', flexDirection: 'column' }}>
          <Fit>
            <Heading size={1} fit caps textColor='tertiary' style={{ paddingBottom: 5 }}>
              Media query assistiva: prefers-reduced-motion
            </Heading>
          </Fit>

          <Fill>
            <video style={{ width: '100%', height: '100%' }} autoPlay loop>
              <source src='./videos/prefers-reduced-motion.mp4' type='video/mp4' />
            </video>
          </Fill>
        </Layout>
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary' style={{ paddingBottom: 10 }}>
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

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary' style={{ paddingBottom: 10 }}>
          Casos de uso de prefers-reduced-motion
        </Heading>

        <List textColor='primary'>
          <ListItem>Desativar transições/animações do site</ListItem>
          <ListItem>Desativar smooth scroll</ListItem>
          <ListItem>Trocar um vídeo por uma imagem estática</ListItem>
          <ListItem>Desativar efeitos de parallax</ListItem>
        </List>
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary' style={{ paddingBottom: 10 }}>
          Outras media-queries assistivas
        </Heading>

        <List textColor='primary'>
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

      {/* TODO exemplo simples de uso de alt */}
      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary'>
          Alt para imagens
        </Heading>
      </Slide>

      {/*
        - Primeiro, explicar rapidamente o que é o alt e pra que ele serve
        - Dicas do que não fazer ao definir o alt de uma imagem
        - Fazer uma dinâmica simples, pra decidir qual a melhor descrição pra imagem
          de um cachorro usando sapato
        - Mostrar que o alt da imagem é contextual, ou seja, se o site for uma loja
          de sapatos pra cachorro, o alt da imagem deve ser a descrição do sapato só,
          não do cachorro
      */}
      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary'>
          Em busca do alt perfeito
        </Heading>

        <List textColor='primary'>
          <Appear>
            <ListItem>Descreva somente o indispensável</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Adicione algo que seja relevante (nada de alt="DCIM_1234.jpg" ou alt="Foto tirada pelo
              fotógrafo Joaquim Teixeira Junior"
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Não precisa adicionar "Foto de..." ou "Imagem de..." no começo do texto de alt
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Entenda o contexto da imagem na página, e só depois disso descreva ela
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary'>
          Contexto da imagem? What?
        </Heading>
      </Slide>

      <Slide bgColor='secondary'>
        <ContextualImageAlt />
      </Slide>

      <Slide bgColor='secondary'>
        <Heading size={1} fit caps textColor='tertiary'>
          Forneça alternativa à conteúdos de texto também
        </Heading>

        <Text textColor='primary' style={{ paddingTop: 20 }}>
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
    </Deck>
  )
}

export default Presentation
