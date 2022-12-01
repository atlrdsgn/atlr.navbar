import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { theme, keyframes, styled } from "./theme";
import { Icxn } from "./atlr-icxn";

/**
 * @keyframes
 */
// Scale-In
const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});
// Scale-Out
const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});
// Fade-In
const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
// Fade-Out
const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

/**
 * @ATLR_Root
 */
const RootStyles = styled(NavigationMenu.Root, {
  position: "fixed",
  top: "0.5rem",
  left: "50%",
  transform: "translateY(0px) translateX(-50%)",
  boxSizing: "border-box",
  display: "block",
  WebkitFontSmoothing: "antialiased",
  width: "calc(100% - 2rem)",
  height: "3.5rem",
  zIndex: 999,
  margin: "auto",
  padding: 0,

  /**
   *
   * For dev purposes add a border to the root
   * so you are able to see the viewport.
   *
   * border: '1px solid blue',
   */
});

/**
 * @ATLR_Bar
 */
const ATLR_BarStyles = styled(NavigationMenu.List, {
  position: "fixed",
  top: 4,
  left: 0,
  right: 0,
  zIndex: 999999999,
  display: "flex",
  width: "100%",
  maxWidth: "400px",
  justifyContent: "space-between",
  padding: 4,
  listStyle: "none",
  boxShadow: ``,
  margin: "auto",

  borderRadius: 16,
  backgroundColor: "transparent",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  lineHeight: "23px",
  height: 48,
  border: `1px solid ${theme.colors.sageA4}`,
});

/**
 * @ATLR_ContentBox
 */
const ATLR_ContentBoxStyles = styled("div", {
  display: "flex",
  width: "100%",
  margin: "auto",
  padding: 0,
  color: theme.colors.chxn4,
  transition: "color 0.4s ease",

  variants: {
    alignment: {
      start: {
        alignContent: "flex-start",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      center: {
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      },
      end: {
        alignContent: "flex-end",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
    },
  },
});

/**
 *
 * @MenuItems
 * (or)
 * @MenuButtons
 *
 */
export const itemStyles = {
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",

  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  fontVariantNumeric: "tabular-nums",

  margin: 0,
  paddingLeft: 16,
  paddingRight: 13,

  height: "38px",
  fontFamily: theme.fonts.system,
  fontSize: 15,
  fontWeight: 500,

  borderRadius: 12,
  border: "1px solid transparent",
  width: "auto",
  color: theme.colors.chxn4,

  "&:hover": {
    color: theme.colors.sage12,
    backgroundColor: theme.colors.blackA3,
    cursor: "pointer",
  },
  "&:active": {},
  "&:focus": {},

  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  "&:disabled": {
    boxShadow: `inset 0 0 0 1px ${theme.colors.slate7}`,
    color: "$sage10",
    pointerEvents: "none",
    cursor: "not-allowed",
    "&:hover": {
      backgroundColor: "$blur",
      cursor: "not-allowed",
    },
  },
};

/**
 * @ATLR_NavTrigger
 */
const NavTriggerStyles = styled(NavigationMenu.Trigger, {
  all: "unset",
  ...itemStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
});

/**
 * @ATLR_NavInner
 */
const NavInnerStyles = styled("div", {
  zIndex: "inherit",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  padding: 4,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  borderRadius: 16,
  border: "1px solid $sageA4",
  transition: "color 0.8s ease",
  /**
   * @backgroundColor
   *
   * <!-- '$blackA3' isn't a bad option here. -->
   * backgroundColor: '$blackA3',
   *
   * <!-- a border is also a good option. -->
   * border: '1px solid $sageA5'
   *
   */
  backgroundColor: `rgba(26,26,26,.06)`,
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
});

/**
 * @ATLR_NavContent
 */
const NavContentStyles = styled(NavigationMenu.Content, {
  zIndex: "999999",
  backgroundColor: "transparent",
  borderRadius: 16,
  boxSizing: "border-box",
  width: "100%",
  minWidth: "100%",
  padding: 4,
  paddingTop: "3.5rem",

  transition: "all 0.2s ease-in-out",
  /*
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  position: 'fixed',
  top: '0',
  left: 0,
  right: 0,
  */

  animationDuration: "250ms",
  animationTimingFunction: "ease",
  '&[data-motion="from-start"]': { animationName: fadeIn },
  '&[data-motion="from-end"]': { animationName: fadeOut },
  '&[data-motion="to-start"]': { animationName: fadeIn },
  '&[data-motion="to-end"]': { animationName: fadeOut },

  /**
   * @media only screen and (min-width: 600px)': { width: 'auto' },
   */
});

/**
 * @ATLR_NavIndicator
 */
const NavIndicatorStyles = styled(NavigationMenu.Indicator, {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  overflow: "hidden",
  zIndex: 1,
  transition: "width, transform 250ms ease",
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
});

/**
 * @ATLR_Link
 */
const ATLR_LinkStyles = styled(NavigationMenu.Link, {
  ...itemStyles,
  fontFamily: theme.fonts.system,
  fontSize: 14,
  fontWeight: 600,
  transition: "color 0.2s ease",
  textDecoration: "none",
  lineHeight: 1,
  borderRadius: 12,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,

  "&:hover": {
    color: theme.colors.sage12,
    backgroundColor: theme.colors.blackA3,
    cursor: "pointer",
  },
});

/**
 * @ATLR_ViewPortal
 */
const ViewportStyles = styled("div", {
  /**
   *
   * For dev purposes add a border to the viewport
   * so you are able to see the viewport.
   *
    border: '1px solid blue',

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  */
  zIndex: 999999,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "block",
  margin: "auto",
  justifyContent: "center",
  maxWidth: 520,
  width: "100%",
  perspective: "2000px",
});

/**
 * @ATLR_NavViewPortal
 */
const NavViewportStyles = styled(NavigationMenu.Viewport, {
  position: "relative",
  height: "var(--radix-navigation-menu-viewport-height)",
  transformOrigin: "top center",
  overflow: "hidden",
  transition: "width, height, 300ms ease",
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  "@media only screen and (min-width: 600px)": {
    //width: 'var(--radix-navigation-menu-viewport-width)'
    width: "100%",
  },
});

/**
 * @ATLR_NavCallout
 */
const CalloutStyles = styled("a", {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  width: 600,
  height: "100%",
  background: `linear-gradient(135deg, $colors$chxn4 0%, $colors$mauve9 100%);`,
  borderRadius: 6,
  padding: 25,
  textDecoration: "none",
  outline: "none",
  userSelect: "none",
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.chxn4}` },
});

/**
 * @ATLR_NavCalloutHeading
 */
export const CalloutHeadingStyles = styled("div", {
  color: "white",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: 16,
  marginBottom: 7,
});

/**
 * @ATLR_NavCalloutText
 */
const CalloutTextStyles = styled("p", {
  all: "unset",
  color: theme.colors.chxn4,
  fontSize: 14,
  lineHeight: 1.3,
});

/**
 * @NavIcxn
 */
const IcxnStyle = styled(Icxn, {
  position: "relative",
  color: "inherit",
  top: 0.5,
  marginLeft: 3,
  "[data-state=open] &": {
    transform: "rotate(-180deg)",
    transitionDuration: `200ms`,
  },
});

/** ///////////////////////////////////////////////////
 *
 * @atlr/navbar
 * ATLR.NAVBAR © 2022
 *
 * ///////////////////////////////////////////////////
 */
export const ATLR_Root = RootStyles;

export const ATLR_Bar = ATLR_BarStyles;
export const ATLR_ContentBox = ATLR_ContentBoxStyles;

export const ATLR_NavTrigger = NavTriggerStyles;
export const ATLR_NavInner = NavInnerStyles;
export const ATLR_NavContent = NavContentStyles;
export const ATLR_NavIndicator = NavIndicatorStyles;

export const ATLR_Link = ATLR_LinkStyles;

export const ATLR_NavCallout = CalloutStyles;
export const ATLR_NavCalloutHeading = CalloutHeadingStyles;
export const ATLR_NavCalloutText = CalloutTextStyles;

export const ATLR_NavViewPortal = NavViewportStyles;
export const ATLR_ViewPortal = ViewportStyles;

export const ATLR_Icxn = IcxnStyle;
