import React from 'react'
import { Slide, Heading, Notes, Layout, Fill, List, ListItem } from 'spectacle'
import WaiAriaWrapper from '../components/WaiAriaWrapper'

function WaiAria() {
  return (
    [
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
      </Slide>,

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
      </Slide>,

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
      </Slide>,
    ]
  )
}

export default WaiAria
