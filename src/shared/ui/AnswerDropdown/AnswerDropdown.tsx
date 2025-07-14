import { ReactNode, useState } from 'react'
import DOMPurify from 'dompurify'

interface DropdownProps {
  title: string
  children: ReactNode
}

export function AnswerDropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const isStringChild = typeof children === 'string'

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
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
