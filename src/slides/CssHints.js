import React from 'react'
import {
  Slide,
  Heading,
  Notes,
  Layout,
  Fill,
  Text,
  CodePane,
  Appear,
  Fit,
  List,
  ListItem
} from 'spectacle'
import OutlineExample from '../components/OutlineExample'
import FlexOrderExample from '../components/FlexOrderExample'
import ContentText from '../components/ContentText'

function CssHints() {
  return (
    [
      <Slide>
        <Heading size={1} fit caps>
          Dicas de CSS para acessibilidade
        </Heading>
      </Slide>,

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
      </Slide>,

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
      </Slide>,

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
      </Slide>,

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
      </Slide>,

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
      </Slide>,

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
      </Slide>,

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
      </Slide>,

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
      </Slide>,

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
      </Slide>,
    ]
  )
}

export default CssHints
