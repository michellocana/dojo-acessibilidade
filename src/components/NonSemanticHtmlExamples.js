import React from 'react'

const NonSemanticHtmlExamples = () => {
  return (
    <>
      {`// Título não-semântico ❌ `}
      <p>Título da página</p>
      {`\n\n// Link não-semântico ❌ \n`}
      <button staticonclick='location.href="http://google.com"'>Google</button>
      {`\n\n// Rótulo de campo não-semântico ❌ \n`}
      <span>Nome</span>
      <input type='text' name='name' />
    </>
  )
}

export default NonSemanticHtmlExamples
