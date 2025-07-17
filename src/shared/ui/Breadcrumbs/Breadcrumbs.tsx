import { Link } from 'react-router-dom'

export type BreadcrumbItem = {
  label: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  return (
    <nav>
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span key={index}>
            {item.path && !isLast ? (
              <Link to={item.path}>`{item.label} / </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {/* {!isLast && <ChevronRight size={16} />} */}
          </span>
        )
      })}
    </nav>
  )
}
