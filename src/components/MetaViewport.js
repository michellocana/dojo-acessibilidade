import React, { useState } from 'react'
import { Layout, Fill, CodePane, Anim } from 'spectacle'

const META_TAG_VALUES = {
  WRONG: '<meta name="viewport" content="width=device-width, user-scalable=no">',
  CORRECT:
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">'
}

const MetaViewport = props => {
  const [metaTag, setMetaTag] = useState(META_TAG_VALUES.WRONG)

  return (
    <Layout style={{ marginTop: 20 }}>
      <Fill>
        <CodePane lang='html' source={metaTag} style={{ fontSize: 16 }} />

        <Anim
          easing='linear'
          fromStyle={{ opacity: 0 }}
          toStyle={[{ opacity: 1 }]}
          transitionDuration={100}
          onAnim={forwards => {
            if (forwards) {
              setMetaTag(META_TAG_VALUES.CORRECT)
            } else {
              setMetaTag(META_TAG_VALUES.WRONG)
            }
          }}
        >
          <div />
        </Anim>
      </Fill>
    </Layout>
  )
}

export default MetaViewport
