/// <reference types="resize-observer-browser" />

import * as React from "react";
import ReactDOM from "react-dom";
import { createContextScope } from "@radix-ui/react-context";
import { composeEventHandlers } from "@radix-ui/primitive";
import {
  Primitive,
  dispatchDiscreteCustomEvent,
} from "@radix-ui/react-primitive";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeRefs, useComposedRefs } from "@radix-ui/react-compose-refs";
import { useDirection } from "@radix-ui/react-direction";
import { Presence } from "@radix-ui/react-presence";
import { useId } from "@radix-ui/react-id";
import { createCollection } from "@radix-ui/react-collection";
import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { usePrevious } from "@radix-ui/react-use-previous";
import { useLayoutEffect } from "@radix-ui/react-use-layout-effect";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

import type * as Radix from "@radix-ui/react-primitive";
import type { Scope } from "@radix-ui/react-context";

type Orientation = "vertical" | "horizontal";
type Direction = "ltr" | "rtl";

/**
 * @atlr/nav.bar
 */
const NAVIGATION_MENU_NAME = "AtlrNavbar";

const [Collection, useCollection, createCollectionScope] = createCollection<
  AtlrNavbarTriggerElement,
  { value: string }
>(NAVIGATION_MENU_NAME);

const [
  FocusGroupCollection,
  useFocusGroupCollection,
  createFocusGroupCollectionScope,
] = createCollection<FocusGroupItemElement, {}>(NAVIGATION_MENU_NAME);

type ScopedProps<P> = P & { __scopeNavigationMenu?: Scope };
const [createNavigationMenuContext, createNavigationMenuScope] =
  createContextScope(NAVIGATION_MENU_NAME, [
    createCollectionScope,
    createFocusGroupCollectionScope,
  ]);

type ContentData = {
  ref?: React.Ref<ViewportContentMounterElement>;
} & ViewportContentMounterProps;

type AtlrNavbarContextValue = {
  isRootMenu: boolean;
  value: string;
  previousValue: string;
  baseId: string;
  dir: Direction;
  orientation: Orientation;
  rootNavigationMenu: AtlrNavbarElement | null;
  indicatorTrack: HTMLDivElement | null;
  onIndicatorTrackChange(indicatorTrack: HTMLDivElement | null): void;
  viewport: AtlrNavbarViewportElement | null;
  onViewportChange(viewport: AtlrNavbarViewportElement | null): void;
  onViewportContentChange(contentValue: string, contentData: ContentData): void;
  onViewportContentRemove(contentValue: string): void;
  onTriggerEnter(itemValue: string): void;
  onTriggerLeave(): void;
  onContentEnter(): void;
  onContentLeave(): void;
  onItemSelect(itemValue: string): void;
  onItemDismiss(): void;
};
