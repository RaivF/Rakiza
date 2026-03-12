import * as React from "react"
import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router-dom"

export type LinkProps = Omit<RouterLinkProps, "to"> & {
  /** Совместимость с Next.js-стилем: `<Link href="..." />` */
  href: RouterLinkProps["to"]
}

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href)
}

/** Обёртка для React Router, чтобы использовать привычный `href`. */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link({ href, ...props }, ref) {
  const hrefStr = typeof href === "string" ? href : null

  // Якоря и внешние ссылки должны быть обычными `<a>`.
  if (hrefStr && (hrefStr === "#" || hrefStr.startsWith("#") || isExternalHref(hrefStr))) {
    // Убираем router-специфичные props, чтобы не передавать лишнее в `<a>`.
    const { replace, state, preventScrollReset, relative, reloadDocument, ...anchorProps } = props

    // При открытии в новой вкладке добавляем `noreferrer`.
    const rel =
      anchorProps.target === "_blank"
        ? [anchorProps.rel, "noreferrer"].filter(Boolean).join(" ")
        : anchorProps.rel

    return <a ref={ref} href={hrefStr} {...anchorProps} rel={rel} />
  }

  return <RouterLink ref={ref} to={href} {...props} />
})

export default Link
