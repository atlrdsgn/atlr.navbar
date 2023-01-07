import * as React from 'react'

import {NavRoot, NavItem, NavList, NavContent} from './Appbar.styles'
import type {CSS} from '@stitches/react'

export interface _aProps {
  children?: React.ReactNode
}

type AppbarPrimitiveProps = _aProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof NavRoot>
type AppbarProps = AppbarPrimitiveProps & {css?: CSS}

const appbarRoot = React.forwardRef<React.ElementRef<typeof NavRoot>, AppbarProps>(
  ({...props}, forwardedRef) => (
    <NavRoot ref={forwardedRef} {...props}>
      {props.children}
    </NavRoot>
  )
)

type AppbarListPrimitiveProps = React.ComponentProps<typeof NavList>
type AppbarListProps = AppbarListPrimitiveProps & {css?: CSS}

const appbarList = React.forwardRef<React.ElementRef<typeof NavList>, AppbarListProps>(
  ({children, ...props}, forwardedRef) => (
    <NavList {...props} ref={forwardedRef}>
      {children}
    </NavList>
  )
)

type AppbarItemPrimitiveProps = React.ComponentProps<typeof NavItem>
type AppbarItemProps = AppbarItemPrimitiveProps & {css?: CSS}

const appbarItem = React.forwardRef<React.ElementRef<typeof NavItem>, AppbarItemProps>(
  ({children, ...props}, forwardedRef) => (
    <NavItem {...props} ref={forwardedRef}>
      {children}
    </NavItem>
  )
)

type AppbarContentPrimitiveProps = React.ComponentProps<typeof NavContent>
type AppbarContentProps = AppbarContentPrimitiveProps & {css?: CSS}

const appbarContent = React.forwardRef<React.ElementRef<typeof NavContent>, AppbarContentProps>(
  ({children, ...props}, forwardedRef) => (
    <NavContent {...props} ref={forwardedRef}>
      {children}
    </NavContent>
  )
)

export const Appbar = appbarRoot
export const AppbarList = appbarList
export const AppbarItem = appbarItem
export const AppbarContent = appbarContent
export type {AppbarProps}
