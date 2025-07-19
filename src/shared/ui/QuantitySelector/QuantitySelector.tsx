import { ChangeEvent } from 'react'
import { Flex } from "../Flex"

interface QuantitySelectorProps {
  value: number
  min?: number
  max?: number
  step?: number
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
    onChange(Math.max(min, value - step))
  }

  const increment = () => {
    onChange(Math.min(max, value + step))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsed = Number(e.target.value)
    if (!isNaN(parsed)) {
      onChange(Math.max(min, Math.min(max, parsed)))
    }
  }

  return (
    <Flex align="center">
      <button onClick={decrement} disabled={value <= min}>
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
      <button onClick={increment} disabled={value >= max}>
        +
      </button>
    </Flex>
  )
}
