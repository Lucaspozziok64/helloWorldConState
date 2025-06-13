import { Button } from "react-bootstrap";
import { useState } from "react";

const HelloWorldState = () => {

  const [mensaje, setMensajes] = useState('')
  const [boton, setBotons] = useState(false)

  const texto = '(from changed state)!'
  const agregarMensaje = () => {
    console.log('Aqui debo agregar el mensaje')
    setMensajes(mensaje + texto)
    console.log(mensaje)
    setBotons(true)
  }

  return (
    <div className="container my-5 text-white">
      <h1>Hello World {mensaje}</h1>
      <Button variant="primary" className="mx-2" onClick={agregarMensaje} disabled={boton}>Click me!</Button>
    </div>
  );
};

export default HelloWorldState;
