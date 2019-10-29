import React from 'react'
import { Slide, Heading, Notes, List, ListItem } from 'spectacle'

function KnowYourAudience() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Boas Práticas - Não leve em conta que você sabe
        <br /> por onde e como o usuário acessa seu site
      </Heading>

      <Notes>Sempre vai ter um usuário que vai te provar o contrário</Notes>
    </Slide>,

    <Slide>
      <Heading fit size={1} textSize={48} caps textColor='tertiary'>
        Modelo de celular ou nome de pokémon?
      </Heading>

      <List style={{ display: 'flex', flexFlow: 'column wrap', maxHeight: 460 }}>
        <ListItem>Bluboo</ListItem>
        <ListItem>Aquaris</ListItem>
        <ListItem>Caterpillar</ListItem>
        <ListItem>Condor</ListItem>
        <ListItem>Digiland</ListItem>
        <ListItem>Doogee</ListItem>
        <ListItem>Echo Stellar</ListItem>
        <ListItem>Elephone</ListItem>
        <ListItem>Foxconn</ListItem>
        <ListItem>Gdippo</ListItem>
        <ListItem>Meizu</ListItem>
        <ListItem>Mobell</ListItem>
        <ListItem>Neffos</ListItem>
        <ListItem>Obi</ListItem>
        <ListItem>Oukitel</ListItem>
        <ListItem>Poptel</ListItem>
        <ListItem>Sensonic</ListItem>
      </List>

      <Notes>Dados do Analytics de Arezzo durante o período de 1 mês</Notes>
    </Slide>
  ]
}

export default KnowYourAudience
