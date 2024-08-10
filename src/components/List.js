// src/components/RecipeList.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import RecipeCard from './Card';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: { from: '0', size: '70', tags: 'under_30_minutes' },
        headers: {
          'X-RapidAPI-Key': '63b21e2babmsh4e7cbeb37a6fc79p130b7djsne5fef4682401',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);
  if (recipes.length === 0) return <h1>loading...</h1>
  return (
    <Container className="mt-4">
      <Row>
        {recipes.map((recipe) => (
          <Col sm={12} md={6} lg={4} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
