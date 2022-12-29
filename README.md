# atlr.navbar

A minimal styled, performant navbar component for React apps or sites.

# `react-switch`

## Installation

```sh
$ yarn add @radix-ui/react-switch
# or
$ npm install @radix-ui/react-switch
```

## Usage

View docs [here](https://radix-ui.com/primitives/docs/components/switch).

## Layout


```tsx
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
export default () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger />
        <NavigationMenu.Content>
          <NavigationMenu.Link />
        </NavigationMenu.Content>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link />
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger />
        <NavigationMenu.Content>
          <NavigationMenu.Sub>
            <NavigationMenu.List />
            <NavigationMenu.Viewport />
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
      <NavigationMenu.Indicator />
    </NavigationMenu.List>
    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
);
```
