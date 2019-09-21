import React from 'react'
import classnames from 'classnames'

import { Appear, Text, Image } from 'spectacle'

import styles from '../styles/components/HolyGrailLayout.module.css'

const HolyGrailLayout = props => {
  const headerClassName = classnames(styles.header, styles.flexCenter)
  const navClassName = classnames(styles.nav, styles.flexCenter)
  const mainClassName = classnames(styles.main, styles.flexCenter)
  const asideClassName = classnames(styles.aside, styles.flexCenter)
  const footerClassName = classnames(styles.footer, styles.flexCenter)

  return (
    <div className={styles.container}>
      {props.children}
      <Appear>
        <div className={styles.grid}>
          <header className={headerClassName}>
            <Appear>
              <Text textColor='inherit' textSize={25} bold>
                {'<div id="header" />'}
              </Text>
            </Appear>
          </header>
          <nav className={navClassName}>
            <Appear>
              <Text textColor='inherit' bold textSize={10.5}>
                {'<div id="nav" />'}
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
                {'<div id="main" />'}
              </Text>
            </Appear>
          </main>
          <aside className={asideClassName}>
            <Appear>
              <Text textColor='inherit' bold textSize={14}>
                {'<div id="poll" />'}
              </Text>
            </Appear>
          </aside>
          <footer className={footerClassName}>
            <Appear>
              <Text textColor='#2d2500' textSize={25} bold>
                {'<div id="footer" />'}
              </Text>
            </Appear>
          </footer>
        </div>
      </Appear>
    </div>
  )
}

export { HolyGrailLayout }
export default HolyGrailLayout
