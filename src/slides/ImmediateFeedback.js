import React from 'react'
import { Slide, Heading, Notes, Layout, Fit, Fill } from 'spectacle'

import styles from './ImmediateFeedback.module.css'

function ImmediateFeedback() {
  return (
    <Slide>
      <Layout style={{ height: '100%', flexDirection: 'column' }}>
        <Fit>
          <Heading size={1} fit caps>
            Boas Práticas - Dê feedback instantâneo ao usuário
          </Heading>
        </Fit>

        <Fill style={{ paddingTop: 50 }}>
          <div className={styles.container}>
            <img
              src='./images/immediate-feedback.gif'
              alt='Comparação de feedback instantâneo'
              style={{
                height: '73vh',
                maxHeight: 472
              }}
            />
          </div>
        </Fill>

        <Notes>
          Essa prática ajuda principalmente usuários com algum tipo de transtorno de ansiedade, mas
          também é muito útil para o público em geral
        </Notes>
      </Layout>
    </Slide>
  )
}

export default ImmediateFeedback
