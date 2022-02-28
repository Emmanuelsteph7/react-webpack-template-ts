import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(1)

  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
}

export default Counter
