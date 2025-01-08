import { Typography, Container } from '@mui/material';
import Mealcards from './MealCards';
import { useState, useEffect } from 'react';

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const fetchFavoriteRecipes = async () => {
      const recipes = await Promise.all(
        savedFavorites.map((idMeal) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
          ).then((res) => res.json()),
        ),
      );
      setFavoriteRecipes(recipes.map((res) => res.meals[0]));
    };

    fetchFavoriteRecipes();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          color: '#FFF',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '30px',
          background: '#2196F3',
          borderRadius: '15px',
        }}
      >
        Your Favorite Recipes
      </Typography>
      {favoriteRecipes.length > 0 ? (
        <Mealcards detail={favoriteRecipes} />
      ) : (
        <Typography variant="body1">No favorite recipes yet.</Typography>
      )}
    </Container>
  );
};

export default Favorites;
