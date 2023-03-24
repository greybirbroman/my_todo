import React from 'react'

export default function ProgressBar({progress, total}) {
  return (
    <h2 className='text-center text-l font-mono'>{progress}/{total} Complete</h2>
  )
}
