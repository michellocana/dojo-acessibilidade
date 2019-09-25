import React from 'react'
import { Text, S } from 'spectacle'

import styles from './ContentText.module.css'

const ContentText = () => {
  return (
    <Text textColor='primary' textSize={24}>
      Essa propriedade é usada em <S type='bold' textColor='tertiary' className={styles.pseudo} />
      <span aria-label='pseudo-elementos'>-elementos</span> (::before e ::after), e possibilita que
      texto seja adicionado via CSS
    </Text>
  )
}

export default ContentText
