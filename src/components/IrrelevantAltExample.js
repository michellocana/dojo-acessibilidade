import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Appear, Anim, Text, Fill, Layout, Fit, Heading } from 'spectacle'

import styles from './IrrelevantAltExample.module.css'

const ALTS = {
  FILE_NAME: 'jack-antal-gyFmpUHb35k-unsplash.jpg',
  AUTHOR_NAME: 'Foto por: Jack Antal.',
  CORRECT: 'Pessoas surfando ao pôr do sol.'
}

const IrrelevantAltExample = props => {
  const [isGreenBox, setIsGreenBox] = useState(false)
  const [text, setText] = useState(ALTS.FILE_NAME)

  return (
    <>
      <Layout style={{ flex: 1, flexDirection: 'column', height: '100%' }}>
        <Fit>
          <Heading size={1} fit caps textColor='tertiary'>
            Em busca do alt perfeito
          </Heading>

          <Text textColor='primary' textSize={36} style={{ marginBottom: 20 }}>
            Adicione algo que seja de fato relevante
          </Text>
        </Fit>

        <Fill>
          <div style={{ position: 'relative', display: 'flex', width: '100%', height: '100%' }}>
            <img
              src='./images/irrelevant-alt-example.jpg'
              alt=''
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <Appear>
              <div>
                <motion.div
                  className={styles.container}
                  animate={{
                    backgroundColor: isGreenBox ? '#28a745' : '#dc3545'
                  }}
                >
                  <Text textColor='primary' textSize={24}>
                    {text}
                  </Text>
                </motion.div>
              </div>
            </Appear>
          </div>
        </Fill>
      </Layout>

      <Anim
        easing='linear'
        fromStyle={{ opacity: 0 }}
        toStyle={[{ opacity: 1 }]}
        transitionDuration={100}
        onAnim={forwards => {
          if (forwards) {
            setIsGreenBox(false)
            setText(ALTS.AUTHOR_NAME)
          } else {
            setIsGreenBox(false)
            setText(ALTS.FILE_NAME)
          }
        }}
      >
        <div />
      </Anim>

      <Anim
        easing='linear'
        fromStyle={{ opacity: 0 }}
        toStyle={[{ opacity: 1 }]}
        transitionDuration={100}
        onAnim={forwards => {
          if (forwards) {
            setIsGreenBox(true)
            setText(ALTS.CORRECT)
          } else {
            setIsGreenBox(false)
            setText(ALTS.AUTHOR_NAME)
          }
        }}
      >
        <div />
      </Anim>
    </>
  )
}

export default IrrelevantAltExample
