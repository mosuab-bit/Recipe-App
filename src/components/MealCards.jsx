import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Mealcards = ({ detail, type = 'meal' }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return savedFavorites;
  });

  const toggleFavorite = (idMeal) => {
    let updatedFavorites;
    if (favorites.includes(idMeal)) {
      updatedFavorites = favorites.filter((id) => id !== idMeal);
    } else {
      updatedFavorites = [...favorites, idMeal];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="meals">
      {!detail
        ? 'Data Not Found'
        : detail.map((curItem) => {
            const isFavorite = favorites.includes(curItem.idMeal);
            return (
              <div
                className="mealImg"
                key={curItem.idMeal || curItem.idCategory}
              >
                <img
                  src={
                    type === 'meal'
                      ? curItem.strMealThumb
                      : curItem.strCategoryThumb
                  }
                  alt={type === 'meal' ? curItem.strMeal : curItem.strCategory}
                />
                <p>{type === 'meal' ? curItem.strMeal : curItem.strCategory}</p>

                {type === 'meal' ? (
                  <NavLink to={`/meal/${curItem.idMeal}`}>
                    <button>Recipe</button>
                  </NavLink>
                ) : (
                  <button>Explore</button>
                )}

                {type === 'meal' && (
                  <IconButton
                    sx={{
                      backgroundColor: '#FFA500',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#FF8C00',
                      },
                      borderRadius: '25px',
                      padding: '8px 16px',
                    }}
                    onClick={() => toggleFavorite(curItem.idMeal)}
                    color={isFavorite ? 'error' : 'default'}
                  >
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                )}
              </div>
            );
          })}
    </div>
  );
};

Mealcards.propTypes = {
  detail: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strMealThumb: PropTypes.string,
      idCategory: PropTypes.string,
      strCategory: PropTypes.string,
      strCategoryThumb: PropTypes.string,
    }),
  ),
  type: PropTypes.oneOf(['meal', 'category']),
};

export default Mealcards;
