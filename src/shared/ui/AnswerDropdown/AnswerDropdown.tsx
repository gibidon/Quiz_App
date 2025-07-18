import { ReactNode, useState } from 'react'
import DOMPurify from 'dompurify'
import { Button } from "../Button"

interface DropdownProps {
  title: string
  children: ReactNode
}

export function AnswerDropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const isStringChild = typeof children === 'string'

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>{title}</Button>
      {isOpen && (
        <>
          {isStringChild ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(children),
              }}
            />
          ) : (
            children
          )}
        </>
      )}
    </>
  )
}
