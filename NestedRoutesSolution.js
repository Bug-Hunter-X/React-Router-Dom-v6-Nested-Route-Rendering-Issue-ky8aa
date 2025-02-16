The issue stemmed from an incorrect usage of the `useParams` hook.  The hook needs to be used correctly to access the parameters from the parent route and pass them down to child components.  Below is the corrected code:

```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  return (
    <div>
      <h1>Parent Route</h1>
      <Routes>
        <Route path=':id' element={<ChildRoute />} />
      </Routes>
    </div>
  );
}

function ChildRoute() {
  const { id } = useParams();
  return (
    <div>
      <h1>Child Route</h1>
      <p>ID: {id}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/parent/*" element={<ParentRoute />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```
This corrected version ensures that `useParams` correctly extracts the `id` parameter and passes it to the `ChildRoute` component for rendering.