export default function isTabActive(href: string, pathname: string): boolean {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}
