import { useState, ChangeEvent } from 'react'

interface QuantitySelectorProps {
  value: number
  min?: number
  max?: number
  step?: number
  initial?: number
  onChange: (value: number) => void
}

export const QuantitySelector = ({
  value = 10,
  min = 1,
  max = 1000,
  step = 1,
  onChange,
}: QuantitySelectorProps) => {
  const decrement = () => {
    onChange(value - step)
  }

  const increment = () => {
    onChange(value + step)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <button onClick={decrement} disabled={value <= min}>
        −
      </button>
      <input
        type="number"
        value={value}
        // onChange={handleChange}
        style={{ width: '60px', textAlign: 'center' }}
      />
      <button onClick={increment} disabled={value >= max}>
        +
      </button>
    </div>
  )
}
