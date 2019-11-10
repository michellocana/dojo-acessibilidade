import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

import Link from '../components/Link'

function ToolsForEveryone() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Ferramentas de teste de acessibilidade
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
          <Link target='_blank' textColor='tertiary' href='https://www.deque.com/axe/axe-for-web/'>
            Axe
          </Link>
        </ListItem>

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
  ]
}

export default ToolsForEveryone
