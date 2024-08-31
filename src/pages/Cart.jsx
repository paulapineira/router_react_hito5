import React, { useState } from 'react';
import pizzaCart from '../assets/pizzas'; 
import { Row, Col, Button, Card } from 'react-bootstrap'; 

const Cart = () => {
  // Inicializa el carrito con las cantidades definidas en pizzaCart
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(pizza =>
        pizza.id === id
          ? { ...pizza, quantity: pizza.quantity + 1 }
          : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(pizza =>
        pizza.id === id
          ? { ...pizza, quantity: Math.max(pizza.quantity - 1, 0) }
          : pizza
      );

      // Filtra las pizzas con cantidad mayor a cero
      return updatedCart.filter(pizza => pizza.quantity > 0);
    });
  };

  const getTotal = () => {
    return cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0).toFixed(0);
  };

  return (
    <div className="Cartcontainer">
      <h1 className="text-center my-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <h4 className="text-center">Tu carrito está vacío</h4>
      ) : (
        <>
          <div className="d-flex flex-column align-items-center mt-4 mb-4">
            <h3>Total: ${getTotal()}</h3> 
            <Button variant="success" className="mt-3">Pagar</Button>
          </div>
          <Row className="mb-4">
            {cart.map(pizza => (
              <Col key={pizza.id} xs={12} md={4} className="mb-4">
                <Card className="pizza-card">
                  <Card.Img variant="top" src={pizza.img} />
                  <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>Precio: ${pizza.price.toFixed(0)}</Card.Text>
                    <Card.Text>Cantidad: {pizza.quantity}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button 
                        variant="secondary" 
                        onClick={() => decreaseQuantity(pizza.id)} 
                        disabled={pizza.quantity === 0}
                      >
                        -
                      </Button>
                      <Button 
                        variant="primary" 
                        onClick={() => increaseQuantity(pizza.id)}
                      >
                        +
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default Cart;

