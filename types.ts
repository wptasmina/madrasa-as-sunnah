export type NavItem = {
  name: string
  href: string
  badge?: string
  submenu?: {
    name: string
    href: string
  }[]
}
