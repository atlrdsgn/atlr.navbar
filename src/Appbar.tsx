import * as React from "react"
import { NavRoot, NavList } from "./styles"
import { CSS } from "@stitches/react"


type AppbarPrimitiveProps = React.ComponentProps<typeof NavRoot>
type AppbarProps = AppbarPrimitiveProps & {css?: CSS}

type AppbarListPrimitiveProps = React.ComponentProps<typeof NavList>
type AppbarListProps = AppbarListPrimitiveProps & {css?: CSS}

const appbarRoot = React.forwardRef<React.ElementRef<typeof NavRoot>, AppbarProps>(
  ({children, ...props}, forwardedRef) => (
    <NavRoot
      ref={forwardedRef}
      {...props}>
      {children}
    </NavRoot>
  )
)

const appbarList = React.forwardRef<React.ElementRef<typeof NavList>, AppbarListProps>(
  ({children, ...props}, forwardedRef) => (
    <NavList {...props} ref={forwardedRef}>
      {children}
    </NavList>
  )
)

export { appbarRoot as AppbarRoot}
export { appbarList as AppbarList}