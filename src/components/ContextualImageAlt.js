import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heading, Image, Text } from 'spectacle'

import styles from './ContextualImageAlt.module.css'

const ContextualImageAlt = props => {
  const [isGridView, setIsGridView] = useState(false)
  return (
    <>
      <div className={styles.container}>
        <motion.figure
          className={styles.figure}
          animate={{
            width: !isGridView ? '45%' : '25%'
          }}
        >
          <Image className={styles.image} src='./images/dog-clothes-1.jpg' />

          <motion.figcaption
            className={styles.figcaption}
            animate={{
              fontSize: !isGridView ? 29 : 16
            }}
          >
            Frederico usando um moletom da Pupreme
          </motion.figcaption>
        </motion.figure>

        <motion.div
          className={styles.text}
          layoutTransition
          style={{
            position: !isGridView ? 'static' : 'fixed',
            top: !isGridView ? 'auto' : '100%'
          }}
        >
          <Heading caps textSize={33} className={styles.title}>
            Frederico, <br />o cachorro swag 🐕😎💯
          </Heading>

          <Text textColor='primary' textSize={24} textAlign='left' lineHeight={1.3}>
            Esse é Frederico, usando seu casaco vermelho da Pupreme edição limitada 2019.
          </Text>
        </motion.div>
      </div>
      <div>
        <button onClick={() => setIsGridView(!isGridView)}>oioi</button>
      </div>
    </>
  )
}

export default ContextualImageAlt
