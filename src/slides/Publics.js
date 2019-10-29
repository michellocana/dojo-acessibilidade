import React from 'react'
import { Slide, Heading, List, Appear, ListItem, Notes } from 'spectacle'

function Publics() {
  return (
    [
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
      </Slide>,
    ]
  )
}

export default Publics
