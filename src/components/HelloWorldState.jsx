import { Button } from "react-bootstrap";
import { useState } from "react";

const HelloWorldState = () => {

  const [mensaje, setMensajes] = useState('')

  const texto = '(from changed state)!'
  const agregarMensaje = () => {
    console.log('Aqui debo agregar el mensaje')
    setMensajes(mensaje + texto)
    console.log(mensaje)
  }

  return (
    <div className="container my-5 text-white">
      <h1>Hello World {mensaje}</h1>
      <Button variant="primary" className="mx-2" onClick={agregarMensaje}>Click me!</Button>
    </div>
  );
};

export default HelloWorldState;
