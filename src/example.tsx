import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import KVEditor from './components/KVEditor/KVEditor';

const App = () => {
  const [darkTheme, setDarkScheme] = useState(false);
  const defaults = [
    { key: 'product', value: 'T-Shirt', options: { immutable: true } },
    { key: 'price', value: '$50.95', options: { fixed: true } },
    { key: 'link', value: 'https://www.example.org' }
  ];

  useEffect(() => {
    const setTheme = (event: MediaQueryListEvent) => {
      setDarkScheme(!event.matches);
    };

    const mql = window.matchMedia('(prefers-color-scheme: light)');
    mql.addEventListener('change', setTheme);

    if (!mql.matches) {
      setDarkScheme(true);
    }

    return () => mql.removeEventListener('change', setTheme);
  }, []);

  const onChange = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <KVEditor
        defaults={defaults}
        onChange={onChange}
        options={{ idField: 'id', theme: darkTheme ? 'dark' : 'light' }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
