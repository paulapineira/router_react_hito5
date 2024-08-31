import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardPizza = ({ id,name, description, ingredients, price, img }) => {
  const ingredientsText = ingredients.join(', ');

  return (
    <Card className="pizza-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <hr className="divider" />
        <Card.Text className="description-text">{description}</Card.Text>
        <Card.Text className="ingredients-text">{ingredientsText}</Card.Text>
        <hr className="divider" />
        <Card.Text className="price-text">Precio: ${price.toLocaleString()}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <Button variant="light">Ver Más</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;




