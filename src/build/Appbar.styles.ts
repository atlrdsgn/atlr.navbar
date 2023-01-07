import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {styled} from '@stitches/react'

const styledNavRoot = styled(NavigationMenu.Root, {
  '--radix-navigation-menu-item-padding': 0,

  zIndex: 998,
  position: 'fixed',
  top: '0.5rem',
  left: '50%',
  transform: 'translateY(0px) translateX(-50%)',
  boxSizing: 'border-box',
  display: 'block',
  WebkitFontSmoothing: 'antialiased',
  width: 'calc(100% - 2rem)',
  height: '3.5rem',

  margin: 'auto',
  padding: 0,
})

const styledNavList = styled(NavigationMenu.List, {
  '--radix-navigation-menu-item-padding': 0,

  position: 'fixed',
  top: 4,
  left: 0,
  right: 0,
  zIndex: 9999,
  display: 'flex',
  width: '100%',
  maxWidth: 400,
  justifyContent: 'space-between',
  padding: 4,
  listStyle: 'none',
  boxShadow: 'none',
  margin: 'auto',

  borderRadius: '16px !important',
  backgroundColor: 'transparent',
  backdropFilter: 'blur(40px) saturate(180%)',
  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
  lineHeight: '23px',
  height: 48,
  border: '1px solid #c6d1d9',
})

const styledNavItem = styled(NavigationMenu.Item, {
  '--radix-navigation-menu-item-padding': 0,

  display: 'flex',
})

const styledNavContent = styled(NavigationMenu.Content, {
  '--radix-navigation-menu-item-padding': 0,

  display: 'flex',
  width: '100%',
  margin: 'auto',
  padding: 0,
  color: '#000',
  transition: 'color 0.4s ease',

  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  justifyItems: 'center',
})

export const NavRoot = styledNavRoot
export const NavList = styledNavList
export const NavItem = styledNavItem
export const NavContent = styledNavContent
