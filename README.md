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
  const [items, setItems] = useState([]);

  return (
    <div>
      <KVEditor onChange={setItems} items={items} />
    </div>
  );
```

Please see `src/example.tsx` file for further usage.

### Props:
- items (optional): KVItemType[];
- onChange (optional): (items: KVItemType[]) => void;
- options (optional): KVEditConfigType;

## License

![The MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/imagemarker
