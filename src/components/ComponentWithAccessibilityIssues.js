import React, { useState, useEffect } from 'react'
import { Heading, List, ListItem } from 'spectacle'

const ComponentWithAccessibilityIssues = props => {
  const [showBlueScreenOfDeath, setShowBlueScreenOfDeath] = useState(false)

  useEffect(() => {
    const image = new window.Image()
    image.src = './images/blue-screen-of-death.jpg'

    setTimeout(() => {
      setShowBlueScreenOfDeath(true)
    }, 10000)
  })

  const renderBlueScreenOfDeath = () =>
    showBlueScreenOfDeath && (
      <img
        src='./images/blue-screen-of-death.jpg'
        alt=''
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    )

  return (
    <>
      <Heading size={1} fit caps style={{ paddingBottom: 0 }}>
        Boas Práticas - Evite usar componentes
      </Heading>

      <Heading size={1} fit caps>
        conhecidos por má acessibilidade
      </Heading>

      <List>
        <ListItem>Modais/Pop-ups</ListItem>
        <ListItem>Carousel</ListItem>
        <ListItem>Tooltip</ListItem>
      </List>

      {renderBlueScreenOfDeath()}
    </>
  )
}

export default ComponentWithAccessibilityIssues
