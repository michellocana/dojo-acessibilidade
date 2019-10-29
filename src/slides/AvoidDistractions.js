import React from 'react'
import { Slide, Heading, Notes, Layout, Fit } from 'spectacle'

function AvoidDistractions() {
  return (
    <Slide style={{ padding: '40px 0' }}>
      <Layout style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Fit>
          <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
            Mantenha o usuário engajado - Evite distrações
          </Heading>
        </Fit>

        <Fit
          style={{
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <video
            loop
            autoPlay
            style={{
              width: '100%',
              height: '68vh',
              maxHeight: 590
            }}
          >
            <source src='./videos/how-it-feels-to-browse-a-website-in-2019.mp4' type='video/mp4' />
          </video>
        </Fit>
      </Layout>

      <Notes>Poucas distrações beneficiam usuários com déficit de atenção ou ansiedade</Notes>
    </Slide>
  )
}

export default AvoidDistractions
