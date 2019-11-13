import React from 'react'
import { Slide, Heading, List, ListItem, Notes } from 'spectacle'

function OtherAssistiveMediaQueries() {
  return (
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
  )
}

export default OtherAssistiveMediaQueries
