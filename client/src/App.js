import React from 'react';
import { Auth } from './pages/Auth';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

function App() {

  const actions = <>
      <Button backgroundColor="orange" text="Ok" onClick={() => { }}></Button>
      <Button backgroundColor="orange" text="Cancel" onClick={() => { }}></Button>
    </>

  return (
    <div className="App">
      <Auth/> 
      <Modal id={"id1"} closeButton={true} handleClose={()=>{ }} header={"Hello"} text={"World"} actions={actions }></Modal>
    </div>
  );
}

export default App;
