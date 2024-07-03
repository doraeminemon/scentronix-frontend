export const Link = ({ href, children, highlighted = false }: { children: any , href: string, highlighted?: boolean }) => (
  <a href={href} className={`uppercase ${highlighted ? 'underline decoration-red-500 underline-offset-8' : ''}`}>{children}</a>
)