import React from 'react'
import { Slide, Heading, Notes, List, ListItem } from 'spectacle'

import Link from '../components/Link'

function ToolsForDevs() {
  return (
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
          <Link target='_blank' textColor='tertiary' href='https://www.deque.com/axe/axe-for-web/'>
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
  )
}

export default ToolsForDevs
