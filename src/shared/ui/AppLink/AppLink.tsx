import { Link } from 'react-router-dom'

interface AppLinkProps {
  path: string
  title: string
}

export function AppLink({ title, path }: AppLinkProps) {
  return <Link to={path}>{title}</Link>
}
