# KVEditor

[![License][license-src]][license-href]

React key/value UI component.

<img src="https://imagemarker.s3.eu-central-1.amazonaws.com/kveditor/kveditor-usage.gif" alt="usage" width="427" height="189"/>

## Setup

```bash
yarn
```

## Run Example

```bash
yarn start
```

## Build

```bash
# development
yarn build
# production
yarn build:prod
```

## Usage

### Simple usage

```jsx
import React from 'react';
import { KVEditor } from '@tag0/kveditor';

const App = () => <KVEditor />

export default App;
```

### Advanced usage

```jsx
const App = ({ darkTheme }: { darkTheme: boolean }) => {
  const [items, setItems] = useState([
    { key: 'product', value: 'T-Shirt', options: { immutable: true } },
    { key: 'price', value: '$50.95', options: { fixed: true } },
    { key: 'link', value: 'https://www.example.org' }
  ]);

  return (
    <div>
      <KVEditor
        items={items}
        onChange={setItems}
        options={{
          idField: 'id',
          theme: darkTheme ? 'dark' : 'light',
          validateKey: new RegExp(/^[a-zA-Z0-9]*$/)
        }}
      />
    </div>
  );
};
```

You can run example in `src/example.tsx` file with `yarn start`.

You should copy `node_modules/@tag0/kveditor/dist/icons` folder to your `public` folder to be able to use icons.

### Props:

All props are optional. You should either use `items` or `rawObject` 

- items `{ key: string; value: any; options: KVItemOptionsType }`: If you have existing Key/Value state you can pass it into the component.
- rawObject `{ any }`: You can pass any object into this and you would get Key/Value state automatically.
- onChange `{ function }`: When items added/removed/updated this method calls with items.
- options `{ object }`:
  - idField `{ string }`: If defined adds fixed and immutable key/value. If that field defined already defined it uses existing one.
  - validateKey `{ RegExp }`: Regular expression to validate your keys
  - theme `{ 'light' | 'dark' }`: You can choose between `light` and `dark` themes  
  - stretchLabels `{ bool, default: true }` sets all key labels to same size
  
    ![light theme][light-theme]
    
    ![dark theme][dark-theme]
    
[license-src]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[license-href]: LICENSE.md
[light-theme]: https://imagemarker.s3.eu-central-1.amazonaws.com/kveditor/light-stretch.png
[dark-theme]: https://imagemarker.s3.eu-central-1.amazonaws.com/kveditor/dark-stretch.png
