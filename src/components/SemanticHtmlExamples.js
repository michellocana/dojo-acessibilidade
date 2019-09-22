import React from 'react'

const SemanticHtmlExamples = () => {
  return (
    <>
      {`// Título semântico ✔️ `}
      <h1>Título da página</h1>
      {`\n\n// Link semântico ✔️ \n`}
      <a href='http://google.com'>Google</a>
      {`\n\n// Rótulo de campo semântico ✔️ \n`}
      <label htmlFor='name'>Nome</label>
      <input type='text' name='name' id='name' />
    </>
  )
}

export default SemanticHtmlExamples
