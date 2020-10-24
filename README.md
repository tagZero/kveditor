# KVEditor

React key/value component library. Supports browser light/dark themes.

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
```jsx
import React, { useState } from 'react';
import { KVEditor } from '@imagemarker/kveditor';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <KVEditor onChange={setItems} items={items} />
    </div>
  );
};

export default App;
```

Please see `src/example.tsx` file for further usage.
You should copy `node_modules/@imagemarker/kveditor/dist/icons` folder to your `public` folder to be able to use icons.

### Props:
- items (optional): If you have existing Key/Value state you can pass it into the component.
- onChange (optional): When items added/removed/updated this method calls
- options (optional):
  - typeNotation: Currently only `string`
  - nested: Currently only `false`
  - validateKey: Regular expression to validate your keys
  - theme: You can choose between `light` and `dark` themes

## License

![The MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/imagemarker
