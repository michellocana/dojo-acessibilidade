import React from 'react'
import { Slide, Heading, Text, Notes, Layout, Fit, Fill } from 'spectacle'

function SizeYourTouchAreas() {
  return (
    <Slide contentStyles={{ height: 680, padding: '20px 0' }}>
      <Layout
        style={{
          flex: 1,
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Fit style={{ paddingBottom: 20 }}>
          <Heading size={1} fit caps>
            Boas Práticas - Tamanho importa
          </Heading>

          <Text textColor='secondary' textSize={24}>
            Dimensione corretamente as áreas de toque do site
          </Text>
        </Fit>

        <Fit
          style={{
            height: '75vh',
            maxHeight: 520
          }}
        >
          <Layout
            style={{
              height: 'inherit',
              maxHeight: 'inherit'
            }}
          >
            <Fill>
              <img
                src='./images/tap-zone-wrong.svg'
                alt='Área de toque errada.'
                style={{ margin: '0 20px', maxHeight: '100%' }}
              />
            </Fill>

            <Fill>
              <img
                src='./images/tap-zone-correct.svg'
                alt='Área de toque correta.'
                style={{ margin: '0 20px', maxHeight: '100%' }}
              />
            </Fill>
          </Layout>
        </Fit>
      </Layout>

      <Notes>O Chrome/Safari dão zoom quando uma área de toque muito pequena é tocada</Notes>
    </Slide>
  )
}

export default SizeYourTouchAreas
