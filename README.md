# akar-icons-react-native

A perfectly rounded icon library made for designers, developers, and pretty much everyone. Explore all the icons at [akaricons.com](https://akaricons.com).

**This package is a fork from the great work made by Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa)) on [akar-icons](https://github.com/artcoholic/akar-icons). The aim was to be able to use the icons on React Native.**

## Get Started

### 1. Installation

Install with npm:

```shell
npm install --save akar-icons-react-native
```

### 2. Usage

Import the icons you need into your ReactNative project and declare them in your render method:

```jsx
import { ArrowRight, Star, LinkOut } from 'akar-icons-react-native';

const MyComponent = () => {
  return (
    <>
      <ArrowRight />
      <Star />
      <LinkOut />
    </>
  );
};

export default MyComponent;
```

Icons can be configured with inline props including inline `style` objects:

```jsx
<Star color="yellow" size={32} strokeWidth={3} style={{ display: 'block' }} />
```

| Prop          | Description                                                                                  | Default        |
| ------------- | -------------------------------------------------------------------------------------------- | -------------- |
| `color`       | Set the icon color                                                                           | `currentColor` |
| `size`        | Set the width and height of the svg icon                                                     | `24`           |
| `strokeWidth` | Set the stroke width of the icon                                                             | `2`            |
| `style`       | Add [inline styles](https://facebook.github.io/react/tips/inline-styles.html) to the element | `{}`           |

You can also import the whole icon library like this:

```jsx
import * as Icon from 'akar-icons-react-native';

const MyComponent = () => {
  return <Icon.ArrowRight />;
};

export default MyComponent;
```

Explore all the icons at [akaricons.com](https://akaricons.com).

## Related Projects

- [akar-icons-app](https://github.com/artcoholic/akar-icons-app) - Homepage repo of Akar icons.
- [akar-icons](https://github.com/artcoholic/akar-icons) - Akar icons as React components.
- [akar-icons-fonts](https://github.com/artcoholic/akar-icons-fonts) - Akar icons as icon fonts.
- [akar-icons-web-components](https://github.com/awmleer/akar-icons-web-components) - Akar icons as web components, fully customizable and use anywhere.
- [akar-icons-svelte](https://github.com/WilliamVenner/akar-icons-svelte) - Akar icons as Svelte components.
- [blade-akar-icons](https://github.com/codeat3/blade-akar-icons) - A package to easily make use of Akar Icons in your Laravel Blade views.
- [akar_icons_flutter](https://github.com/alann-maulana/akar_icons_flutter) - Akar icons package for Flutter.

## Author

GuillaumeOj for Tasta-app ([Tasta-app](https://github.com/Tasta-app))

## Contributors

Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa)) (original author of [akar-icons](https://github.com/artcoholic/akar-icons))

## License

[MIT License](./LICENSE), Copyright © 2020-present Arturo Wibawa, 2025 GuillaumeOj
