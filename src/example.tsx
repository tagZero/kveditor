import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import KVEditor from './components/KVEditor/KVEditor';

const App = () => {
  const [darkTheme, setDarkScheme] = useState(false);
  const [items, setItems] = useState([
    { key: 'product', value: 'T-Shirt' },
    { key: 'price', value: '$50.95' },
    { key: 'link', value: 'https://www.example.org' }
  ]);

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

  return (
    <div>
      <KVEditor onChange={setItems} items={items} options={{ theme: darkTheme ? 'dark' : 'light' }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
