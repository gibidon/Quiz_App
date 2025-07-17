export function formatLabel(segment: string): string {
  return segment.replace(/[-_]/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
}
