import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

import Link from '../components/Link'

function ToolsForDesigners() {
  return (
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
  )
}

export default ToolsForDesigners
