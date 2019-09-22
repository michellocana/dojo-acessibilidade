import React, { useState } from 'react'
import classnames from 'classnames'

import { Appear, Text, Image, Anim } from 'spectacle'

import styles from '../styles/components/HolyGrailLayout.module.css'

const HolyGrailLayout = props => {
  const [showSemanticCode, setShowSemanticCode] = useState(false)

  const headerClassName = classnames(styles.header, styles.flexCenter, styles.border)
  const navClassName = classnames(styles.nav, styles.flexCenter, styles.border)
  const mainClassName = classnames(styles.main, styles.flexCenter, styles.border)
  const asideClassName = classnames(styles.aside, styles.flexCenter, styles.border)
  const footerClassName = classnames(styles.footer, styles.flexCenter, styles.border)

  const htmlSamples = {
    notSemantic: {
      header: '<div id="header">',
      nav: '<div id="nav">',
      main: '<div id="main">',
      poll: '<div id="poll">',
      footer: '<div id="footer">'
    },

    semantic: {
      header: '<header>',
      nav: '<nav>',
      main: '<main>',
      poll: '<aside>',
      footer: '<footer>'
    }
  }[showSemanticCode ? 'semantic' : 'notSemantic']

  return (
    <div className={styles.container}>
      {props.children}
      <Appear>
        <div className={styles.grid}>
          <header className={headerClassName}>
            <Appear>
              <Text textColor='inherit' textSize={25} bold>
                {htmlSamples.header}
              </Text>
            </Appear>
          </header>
          <nav className={navClassName}>
            <Appear>
              <Text textColor='inherit' bold textSize={showSemanticCode ? 14 : 10.5}>
                {htmlSamples.nav}
              </Text>
            </Appear>
          </nav>
          <main className={mainClassName}>
            <div className={styles.holyGrailWrapper}>
              <Text textColor='inherit' fit bold caps>
                Holy grail layout
              </Text>

              <Image
                style={{ marginLeft: 16 }}
                className={styles.holyGrail}
                src='./images/holy-grail.png'
              />
            </div>

            <Appear>
              <Text textColor='inherit' textSize={25} bold>
                {htmlSamples.main}
              </Text>
            </Appear>
          </main>
          <aside className={asideClassName}>
            <Appear>
              <Text textColor='inherit' bold textSize={14}>
                {htmlSamples.poll}
              </Text>
            </Appear>
          </aside>
          <footer className={footerClassName}>
            <Appear>
              <Text textColor='#2d2500' textSize={25} bold>
                {htmlSamples.footer}
              </Text>
            </Appear>

            <Anim
              easing='linear'
              fromStyle={{ opacity: 0 }}
              toStyle={[{ opacity: 1 }]}
              transitionDuration={100}
              onAnim={forwards => {
                if (forwards) {
                  setShowSemanticCode(true)
                } else {
                  setShowSemanticCode(false)
                }
              }}
            >
              <div />
            </Anim>
          </footer>
        </div>
      </Appear>
    </div>
  )
}

export default HolyGrailLayout
