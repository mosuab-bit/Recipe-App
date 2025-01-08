import { useState, useEffect } from 'react';
import Mealcards from './MealCards';
import { fetchData } from '../utils/fetchdata';
import { Alert, Snackbar } from '@mui/material';
import Loader from './Loader';

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');
  const [defaultMeals, setDefaultMeals] = useState([]);
  const [searchByLetter, setSearchByLetter] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'warning',
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const handleInput = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const promises = [];
        const numberOfMeals = 10;
        for (let i = 0; i < numberOfMeals; i++) {
          promises.push(
            fetchData('https://www.themealdb.com/api/json/v1/1/random.php'),
          );
        }
        const responses = await Promise.all(promises);
        setDefaultMeals(responses.map((res) => res[0]));

        const categoriesData = await fetchData(
          'https://www.themealdb.com/api/json/v1/1/categories.php',
          'categories',
        );
        console.log('Fetched categories data:', categoriesData);

        if (categoriesData) {
          setCategories(categoriesData);
          console.log('Categories state after update:', categoriesData);
        } else {
          console.error('No categories data found');
        }
      } catch (error) {
        console.error('Error fetching initial data:', error);
        setMsg('Failed to load initial data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleSearch = async () => {
    if (search === '') {
      setMsg('Please Enter Something');
      return;
    }
    try {
      const Meals = await fetchData(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      );
      if (!Meals) {
        setMsg(`No results found for "${search}"`);
        setData([]);
      } else {
        setMsg('');
        setData(Meals);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setMsg('Failed to fetch meals. Please try again.');
    }
  };

  const fetchMealsByLetter = async (letter) => {
    try {
      const Meals = await fetchData(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
      );
      if (!Meals) {
        setAlert({
          open: true,
          message: `No meals found starting with "${letter.toUpperCase()}"`,
          severity: 'warning',
        });
        setSearchByLetter([]);
      } else {
        setMsg('');
        setSearchByLetter(Meals);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error fetching meals by letter:', error);
      setMsg('Failed to fetch meals. Please try again.');
    }
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <div className="container">
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{
            width: '100%',
            textAlign: 'center',
            padding: '8px 8px',
          }}
        >
          {alert.message}
        </Alert>
      </Snackbar>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Look up a recipe..."
          onChange={handleInput}
          value={search}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <h4 className="msg">{msg}</h4>

      {loading ? (
        <Loader />
      ) : (
        <div>
          {searchByLetter.length > 0 ? (
            <>
              <h2 className="title">
                Meals Starting with {searchByLetter[0].strMeal[0].toUpperCase()}
              </h2>
              <Mealcards detail={searchByLetter} />
            </>
          ) : data ? (
            <>
              <h2 className="title">Search Results</h2>
              <Mealcards detail={data} />
            </>
          ) : (
            <>
              <h2 className="title">Random Meals</h2>
              <Mealcards detail={defaultMeals} />
              <h2 className="title">Categories</h2>
              <Mealcards detail={categories} type="category" />
            </>
          )}
        </div>
      )}

      <div className="alphabet-buttons">
        <h2 className="title">Search by First Letter</h2>
        <div className="grid">
          {alphabet.map((letter) => (
            <button
              key={letter}
              className="letter-button"
              onClick={() => fetchMealsByLetter(letter)}
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
