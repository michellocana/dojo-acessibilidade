import React from 'react'
import { Slide, Heading, Notes, Appear } from 'spectacle'

function UsePlaceholdersCorrectly() {
  return (
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
  )
}

export default UsePlaceholdersCorrectly
