import React, { useState } from 'react'
import './App.css'



const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1>{children}</h1>;
};

function App() {
  return (

    <Title>
      <span>
        Anota <b>AI</b>
      </span>
    </Title>

  );
}

export default App;
