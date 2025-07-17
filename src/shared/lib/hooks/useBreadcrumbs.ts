import { useLocation } from 'react-router-dom'
import { formatLabel } from '../formatLabel/formatLabel'

interface BreadcrumbProps {
  label: string
  path: string
}

export function useBreadcrumbs(): Array<BreadcrumbProps> {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  const breadcrumbs: BreadcrumbProps[] = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/')

    return {
      label: formatLabel(segment),
      path,
    }
  })

  return breadcrumbs
}
