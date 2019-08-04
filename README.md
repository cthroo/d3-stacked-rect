# d3-stacked-rect

<big><h1 align="center"> Draw d3 stacked rect SVG based on their weights</h1></big>

![d3 stacked rect](example/example.png =200\*376)

## Installation

### npm

```
$ npm install --save d3-stacked-react
```

## Usage

Below is the example of custom components:

```js
<D3StackedRect data={data} height={700} color="#96cc66" />
```

## Options

#### `data`: PropTypes.object.isRequired

```js
const data = {
  titles: {
    P3: 10,
    P4: 12,
    P5: 13,
    P6: 8,
    P7: 3,
    P8: 3,
    P9: 2,
  },
  subTitles: {
    P3: 'Junior Engineer',
    P4: 'Engineer',
    P5: 'Senior Engineer',
    P6: '',
    P7: 'Senior Principle Engineer',
    P8: 'Lead Principle Engineer',
    P9: 'Distinguised Engineer',
  },
};
```

Note: if associated title field in subTitles is empty, it won't render the subTitles. Otherwise, it will add '-' to the subTitles.

## height

#### `height`: PropTypes.number.isRequired

Set the height of of the SVG.

## color (optional)

#### `color`: PropTypes.string

Set the color of of the SVG, should be a hash string like '#96cc66', if not given, will use random color

## License

MIT
