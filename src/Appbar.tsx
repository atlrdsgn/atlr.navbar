import * as React from 'react'
import {NavRoot, NavList, NavItem} from './styles'
import {CSS} from '@stitches/react'

type AppbarPrimitiveProps = React.ComponentProps<typeof NavRoot>
type AppbarProps = AppbarPrimitiveProps & {css?: CSS}

type AppbarListPrimitiveProps = React.ComponentProps<typeof NavList>
type AppbarListProps = AppbarListPrimitiveProps & {css?: CSS}

type AppbarItemPrimitiveProps = React.ComponentProps<typeof NavItem>
type AppbarItemProps = AppbarItemPrimitiveProps & {css?: CSS}

/**
 *
 *
 * @ATELIER APPBAR v1.0.0
 *
 *
 */
const appbarRoot = React.forwardRef<React.ElementRef<typeof NavRoot>, AppbarProps>(
  ({children, ...props}, forwardedRef) => (
    <NavRoot ref={forwardedRef} {...props}>
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

const appbarItem = React.forwardRef<React.ElementRef<typeof NavItem>, AppbarItemProps>(
  ({children, ...props}, forwardedRef) => (
    <NavItem {...props} ref={forwardedRef}>
      {children}
    </NavItem>
  )
)

/**
 *
 * @exports
 *
 */
export {appbarRoot as AppbarRoot}
export {appbarList as AppbarList}
export {appbarItem as AppbarItem}
