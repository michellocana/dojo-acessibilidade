import React, { useState, useEffect } from 'react'
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
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%'
  },

  BLOG: {
    width: '45%',
    height: 'auto',
    top: '50%',
    left: 'auto',
    x: 0,
    y: '-50%'
  },

  SHOP: {
    width: 'calc(33.33% - 20px)',
    height: 'auto',
    top: 0,
    left: 'auto',
    x: 0,
    y: 0
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
  SHOP: 21
}

const EXTRA_DOG_IMAGES = [
  './images/dog-clothes-2.jpg',
  './images/dog-clothes-3.jpg',
  './images/dog-clothes-4.jpg',
  './images/dog-clothes-5.jpg',
  './images/dog-clothes-6.jpg'
]

const EXTRA_DOGS_NAMES = [
  'Moletom Pawlenciaga Azul',
  'Colete Vermelho',
  'Moletom Woof Preto e Amarelo',
  'Moletom Woof Branco e Preto',
  'Moletom Chanel Branco'
]

const EXTRA_DOGS_PRICES = [30, 45, 35, 39, 60]

const ContextualImageAlt = props => {
  const [stage, setStage] = useState(STAGES.PRESENTING)

  // Preloading image
  useEffect(() => {
    EXTRA_DOG_IMAGES.forEach(image => {
      const imageElement = new window.Image()
      imageElement.src = image
    })
  }, [])

  const renderItemName = (name = 'Moletom da Pupreme vermelho', price = 24, delay = 0) => (
    <motion.div
      style={{ overflow: 'hidden' }}
      initial={{ height: 0 }}
      animate={{
        height: stage === STAGES.SHOP ? 'auto' : 0
      }}
    >
      <motion.span
        transition={{ delay }}
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === STAGES.SHOP ? 1 : 0 }}
        className={styles.productText}
      >
        {name}
        <br />
        Preço: R${price},00
      </motion.span>
    </motion.div>
  )

  const renderShopItems = () =>
    EXTRA_DOG_IMAGES.map((image, index) => {
      const delay = 0.3 + 0.1 * index

      return (
        <motion.figure
          key={index}
          className={`${styles.figure} ${styles.extraFigure}`}
          initial={{ position: 'fixed', top: '100%', height: 'auto' }}
          animate={{ position: 'static', top: 'auto', height: 'auto' }}
          exit={{ position: 'fixed', top: '100%', height: 'auto' }}
          transition={{ ease: 'linear', yoyo: 0, staggerChildren: 1 }}
          style={{ width: 'calc(33.33% - 20px)', height: 'auto' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay }}
            style={{ flex: 1 }}
          >
            <Image className={styles.image} src={image} />
          </motion.div>

          {renderItemName(EXTRA_DOGS_NAMES[index], EXTRA_DOGS_PRICES[index], delay)}
        </motion.figure>
      )
    })

  return (
    <>
      <div className={styles.container}>
        <motion.figure
          className={styles.figure}
          layoutTransition
          animate={MAIN_FIGURE_STYLES[stage]}
        >
          <div style={{ position: 'relative' }}>
            <Image className={styles.image} src='./images/dog-clothes-1.jpg' />

            <motion.figcaption
              className={styles.figcaption}
              animate={{
                opacity: FIGCAPTION_OPACITIES[stage],
                fontSize: FIGCAPTION_FONT_SIZES[stage]
              }}
            >
              Alt: Frederico usando um moletom da Pupreme
            </motion.figcaption>
          </div>

          {renderItemName()}
        </motion.figure>

        <motion.div className={styles.text} layoutTransition style={BLOG_TEXT_STYLES[stage]}>
          <Heading caps textSize={32} className={styles.title}>
            Frederico, <br />o cachorro swag 🐕😎💯
          </Heading>

          <Text textColor='primary' textSize={24} textAlign='left' lineHeight={1.3}>
            Esse é Frederico, usando seu casaco vermelho da Pupreme edição limitada 2019.
          </Text>
        </motion.div>

        <AnimatePresence>{stage === STAGES.SHOP && renderShopItems()}</AnimatePresence>
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <button onClick={() => setStage(STAGES.PRESENTING)}>1</button>
        <button onClick={() => setStage(STAGES.BLOG)}>2</button>
        <button onClick={() => setStage(STAGES.SHOP)}>3</button>
      </div>
    </>
  )
}

export default ContextualImageAlt
