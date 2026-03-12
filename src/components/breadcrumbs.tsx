import { Fragment } from "react"

import Link from "@/components/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export type BreadcrumbEntry = {
  label: string
  href?: string
}

type Props = {
  items: BreadcrumbEntry[]
}

export function PageBreadcrumbs({ items }: Props) {
  if (items.length === 0) return null

  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 py-4 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => {
              const isLast = index === items.length - 1
              const key = item.href ?? `${item.label}-${index}`

              return (
                <Fragment key={key}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    ) : item.href ? (
                      <BreadcrumbLink asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <span className="text-muted-foreground">{item.label}</span>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}
