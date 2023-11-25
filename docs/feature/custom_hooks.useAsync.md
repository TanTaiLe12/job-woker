## How to use package react-async to handle Promise.all

To use the react-async package to handle a Promise.all call in a React component, you can do the following:

1. Import the useAsync hook from custom hooks folder:

```bash
import { useAsync } from 'src/hooks';
```

2. Define a function that returns a Promise that resolves with the result of the Promise.all call:

```bash
const loadData = () => Promise.all([
  fetch('/api/users'),
  fetch('/api/posts')
]);
```

3. Use the useAsync hook to handle the async operation. The hook will return an object with the data, error, and isLoading properties that you can use to render the component:

```bash
const { data, error, isLoading } = useAsync({ promiseFn: loadData });

if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

if (data) {
  const [users, posts] = data;
  // render component with users and posts data
}
```

