import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Image, Text, Anim } from 'spectacle'

import styles from './ContextualImageAlt.module.css'

const STAGES = {
  PRESENTING: 'PRESENTING',
  BLOG: 'BLOG',
  SHOP: 'SHOP'
}

const MAIN_FIGURE_STYLES = {
  PRESENTING: {
    width: '48%',
    height: 'auto'
  },

  BLOG: {
    width: '45%',
    height: 'auto'
  },

  SHOP: {
    width: 'calc(33.33% - 20px)',
    transitionStart: {
      justifyContent: 'flex-start'
    }
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

const FIGCAPTION_STYLES = {
  PRESENTING: {
    opacity: 0,
    fontSize: 29,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  BLOG: {
    opacity: 1,
    fontSize: 29,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  SHOP: {
    opacity: 1,
    fontSize: 21,
    backgroundColor: '#dc3545'
  }
}

const SHOP_TITLE_STYLES = {
  PRESENTING: {
    position: 'fixed',
    height: 0,
    opacity: 0
  },

  BLOG: {
    position: 'fixed',
    height: 0,
    opacity: 0
  },

  SHOP: {
    position: 'static',
    height: 'auto',
    opacity: 1
  }
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

const IMAGE_ALTS = {
  DEFAULT: 'Alt: Frederico usando um moletom da Pupreme.',
  SHOP: 'Alt: Moletom da Pupreme vermelho.'
}

const ContextualImageAlt = props => {
  const [stage, setStage] = useState(STAGES.PRESENTING)
  const [imageAlt, setImageAlt] = useState(IMAGE_ALTS.DEFAULT)

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
      animate={{ height: stage === STAGES.SHOP ? 'auto' : 0 }}
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
      const baseDelay = 0.6
      const delay = 0.3 + 0.1 * index

      return (
        <motion.figure
          key={index}
          className={`${styles.figure} ${styles.extraFigure}`}
          initial={{ position: 'fixed', top: '100%', height: 'auto' }}
          animate={{ position: 'static', top: 'auto', height: 'auto' }}
          exit={{ position: 'fixed', top: '100%', height: 'auto' }}
          transition={{ ease: 'linear', yoyo: 0, delay: baseDelay }}
          style={{ width: 'calc(33.33% - 20px)', height: 'auto' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: delay + baseDelay }}
          >
            <Image className={styles.image} src={image} />
          </motion.div>

          {renderItemName(EXTRA_DOGS_NAMES[index], EXTRA_DOGS_PRICES[index], delay + baseDelay)}
        </motion.figure>
      )
    })

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.container}
          style={{
            flexWrap: stage === STAGES.SHOP ? 'wrap' : 'nowrap',
            alignItems: stage === STAGES.SHOP ? 'flex-start' : 'center',
            justifyContent: stage === STAGES.SHOP ? 'flex-start' : 'center'
          }}
        >
          <motion.h1
            positionTransition
            initial={{ opacity: 0 }}
            animate={SHOP_TITLE_STYLES[stage]}
            transition={{ delay: stage === STAGES.SHOP ? 2 : 0 }}
            className={styles.shopTitle}
          >
            <img src='./images/swag-dog-clothing.svg' alt='' className={styles.shopTitleImage} />
            SWAG DOG CLOTHING ™
          </motion.h1>

          <motion.figure
            className={styles.figure}
            layoutTransition
            animate={MAIN_FIGURE_STYLES[stage]}
            initial={{
              width: '48%',
              height: 'auto'
            }}
          >
            <div style={{ position: 'relative' }}>
              <Image className={styles.image} src='./images/dog-clothes-1.jpg' />

              <motion.figcaption
                className={styles.figcaption}
                animate={{
                  ...FIGCAPTION_STYLES[stage],
                  backgroundColor:
                    imageAlt === IMAGE_ALTS.DEFAULT
                      ? FIGCAPTION_STYLES[stage].backgroundColor
                      : '#28a745'
                }}
              >
                {imageAlt}
              </motion.figcaption>
            </div>

            {renderItemName()}
          </motion.figure>

          <motion.div layoutTransition className={styles.text} style={BLOG_TEXT_STYLES[stage]}>
            <Heading caps textSize={32} className={styles.title}>
              Frederico, <br />o cachorro swag 🐕😎💯
            </Heading>

            <Text textColor='secondary' textSize={24} textAlign='left' lineHeight={1.3}>
              Esse é Frederico, usando seu casaco vermelho da Pupreme edição limitada 2019.
            </Text>

            <Text
              textColor='secondary'
              textSize={24}
              textAlign='left'
              lineHeight={1.3}
              style={{ marginTop: 15 }}
            >
              Faltou criatividade pra continuar escrevendo então lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Asperiores, ipsam.
            </Text>

            <Text
              textColor='secondary'
              textSize={24}
              textAlign='left'
              lineHeight={1.3}
              style={{ marginTop: 15 }}
            >
              Saepe praesentium eius sunt officiis nobis dicta! Repudiandae ratione totam ducimus
              quo!
            </Text>
          </motion.div>

          <AnimatePresence>{stage === STAGES.SHOP && renderShopItems()}</AnimatePresence>
        </div>
      </div>

      <Anim
        easing='linear'
        fromStyle={{ opacity: 0 }}
        toStyle={[{ opacity: 1 }]}
        transitionDuration={100}
        onAnim={forwards => {
          if (forwards) {
            setStage(STAGES.BLOG)
          } else {
            setStage(STAGES.PRESENTING)
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
            setStage(STAGES.SHOP)
          } else {
            setStage(STAGES.BLOG)
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
            setImageAlt(IMAGE_ALTS.SHOP)
          } else {
            setImageAlt(IMAGE_ALTS.DEFAULT)
          }
        }}
      >
        <div />
      </Anim>
    </>
  )
}

export default ContextualImageAlt
