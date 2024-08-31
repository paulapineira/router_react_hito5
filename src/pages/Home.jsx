import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
/*import pizzas from '../assets/pizzas'; Esto ya no se usa en Home.jsx, porque ahora estamos trayendo la info desde la API, de todas formas lo dejo comentado en caso de que haya que ocuparlo a futuro*/
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
/*Función donde se obtienen los datos de la API en documento de Material de apoyo - Backend pizzas */
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error(`Upss...nos hemos encontrado con un error al cargar las pizzas. Por favor, intenta de nuevo más tarde. Status: ${response.status}`);
        }
        const data = await response.json();
        setPizzas(data);
        setLoading(false);
      } catch (err) {
        setError('Ups, algo salió mal. No pudimos cargar las pizzas. Por favor, intenta de nuevo más tarde.');
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []); /* array vacío para asegurar que esto solo se ejecute una vez al montar el componente*/
  if (loading) return <p className="text-center my-4">Cargando...</p>;
  if (error) return <p className="text-center my-4">{error}</p>;

  return (
    <div className="homecontainer">
      <Header />
      <h1 className="text-center my-4">Lista de Pizzas</h1>  
      {/* Fila para las tarjetas de pizza */}
      <Row>
        {pizzas.map(pizza => (
          <Col key={pizza.id} xs={12} md={4} className="mb-4">
            <CardPizza
              name={pizza.name}
              description={pizza.description}
              ingredients={pizza.ingredients}
              price={pizza.price}
              img={pizza.img} 
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;






