import { useState } from 'react';
import { TextField } from '@/shared/ui';

function App() {
  const [message, setMessage] = useState('');

  return (
    <>
      <TextField onChange={(event) => setMessage(event.target.value)} />
      <p>Message: {message}</p>
    </>
  );
}

export default App;
