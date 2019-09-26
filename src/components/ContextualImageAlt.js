import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Image, Text } from 'spectacle'

import styles from './ContextualImageAlt.module.css'

const STAGES = {
  PRESENTING: 'PRESENTING',
  BLOG: 'BLOG',
  SHOP: 'SHOP'
}

const MAIN_FIGURE_STYLES = {
  PRESENTING: {
    width: '45%',
    left: '50%',
    x: '-50%'
  },

  BLOG: {
    width: '45%',
    left: 'auto',
    x: 0
  },

  SHOP: {
    width: 'calc(33.33% - 20px)',
    left: 'auto',
    x: 0
  }
}

const BLOG_TEXT_STYLES = {
  PRESENTING: {
    position: 'fixed',
    top: '100%'
  },

  BLOG: {
    position: 'static',
    top: 'auto'
  },

  SHOP: {
    position: 'fixed',
    top: '100%'
  }
}

const FIGCAPTION_OPACITIES = {
  PRESENTING: 0,
  BLOG: 1,
  SHOP: 1
}

const FIGCAPTION_FONT_SIZES = {
  PRESENTING: 29,
  BLOG: 29,
  SHOP: 16
}

const ContextualImageAlt = props => {
  const [stage, setStage] = useState(STAGES.PRESENTING)

  const renderShopItems = () =>
    [
      './images/dog-clothes-2.jpg',
      './images/dog-clothes-3.jpg',
      './images/dog-clothes-4.jpg',
      './images/dog-clothes-5.jpg',
      './images/dog-clothes-6.jpg'
    ].map(image => (
      <motion.figure
        className={styles.figure}
        initial={{ position: 'fixed', top: '100%', opacity: 0, height: 0 }}
        animate={{ position: 'static', top: 'auto', opacity: 1, height: 'auto' }}
        exit={{ position: 'fixed', top: '100%', opacity: 0, height: 'auto' }}
        transition={{ ease: 'linear', yoyo: 0, delay: 0.3 }}
        style={{ width: 'calc(33.33% - 20px)', height: 'auto', opacity: 0 }}
      >
        <Image className={styles.image} src='https://via.placeholder.com/500x600' />
      </motion.figure>
    ))

  return (
    <>
      <div className={styles.container}>
        <motion.figure
          className={styles.figure}
          layoutTransition
          animate={MAIN_FIGURE_STYLES[stage]}
        >
          {/* <Image className={styles.image} src='./images/dog-clothes-1.jpg' /> */}
          <Image className={styles.image} src='https://via.placeholder.com/500x600' />

          <motion.figcaption
            className={styles.figcaption}
            animate={{
              opacity: FIGCAPTION_OPACITIES[stage],
              fontSize: FIGCAPTION_FONT_SIZES[stage]
            }}
          >
            {/* Frederico usando um moletom da Pupreme */}
            Lorem ipsum dolor sit amet.
          </motion.figcaption>
        </motion.figure>

        <motion.div className={styles.text} layoutTransition style={BLOG_TEXT_STYLES[stage]}>
          <Heading caps textSize={33} className={styles.title}>
            {/* Frederico, <br />o cachorro swag 🐕😎💯 */}
            Lorem ipsum dolor sit amet amet.
          </Heading>

          <Text textColor='primary' textSize={24} textAlign='left' lineHeight={1.3}>
            {/* Esse é Frederico, usando seu casaco vermelho da Pupreme edição limitada 2019. */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut reprehenderit et quos
          </Text>
        </motion.div>

        <AnimatePresence>{stage === STAGES.SHOP && renderShopItems()}</AnimatePresence>
      </div>

      <div>
        <button onClick={() => setStage(STAGES.PRESENTING)}>1</button>
        <button onClick={() => setStage(STAGES.BLOG)}>2</button>
        <button onClick={() => setStage(STAGES.SHOP)}>3</button>
      </div>
    </>
  )
}

export default ContextualImageAlt
