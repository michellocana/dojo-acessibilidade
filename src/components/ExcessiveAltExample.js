import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Appear, Anim, Text, Fill, Layout, Fit, Heading } from 'spectacle'

import styles from './ExcessiveAltExample.module.css'

const ALTS = {
  IRRELEVANT: 'Coca-Cola.',
  EXCESSIVE:
    'Mulher segurando garrafa de Coca-Cola, ao lado de um óculos, 2 bonés, 2 pares de meias e uma bolsa da Coca-Cola, e também uma caixinha de som vermelha e um fone de ouvido branco da JBL, e também uma caixa semi-aberta.',
  CORRECT: 'Mulher segurando garrafa de Coca-Cola, ao lado de produtos diversos da Coca-Cola.'
}

const ExcessiveAltExample = props => {
  const [isGreenBox, setIsGreenBox] = useState(false)
  const [text, setText] = useState(ALTS.IRRELEVANT)

  return (
    <>
      <Layout style={{ flex: 1, flexDirection: 'column', height: '100%' }}>
        <Fit>
          <Heading size={1} fit caps textColor='tertiary'>
            Em busca do alt perfeito
          </Heading>

          <Text textColor='secondary' textSize={36} style={{ marginBottom: 20 }}>
            Saiba o quanto de detalhamento o alt deve ter
          </Text>
        </Fit>

        <Fill>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <img
              alt=''
              src='./images/alt-description-example.jpg'
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover' }}
            />

            <Appear>
              <div>
                <motion.div
                  className={styles.container}
                  animate={{
                    backgroundColor: isGreenBox ? '#28a745' : '#dc3545'
                  }}
                >
                  <Text fit={isGreenBox} textColor='secondary' textSize={24}>
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
            setText(ALTS.EXCESSIVE)
          } else {
            setIsGreenBox(false)
            setText(ALTS.IRRELEVANT)
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
            setText(ALTS.EXCESSIVE)
          }
        }}
      >
        <div />
      </Anim>
    </>
  )
}

export default ExcessiveAltExample
