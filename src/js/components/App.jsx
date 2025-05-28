import React, { useState, useEffect } from 'react';
import SecondsCounter from './components/SecondsCounter';

const App = () => {
  // 1. Creamos un estado para almacenar los segundos
  const [seconds, setSeconds] = useState(0);

  // 2. Cuando el componente se monta, iniciamos el contador
  useEffect(() => {
    const interval = setInterval(() => {
      // 3. Cada segundo, aumentamos el contador en 1
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000); // 1000ms = 1 segundo

    // 4. Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // El array vacío significa que solo se ejecuta al montar

  // 5. Renderizamos nuestro componente pasándole los segundos
  return <SecondsCounter seconds={seconds} />;
};

export default App;

// DONE