import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`,
        );
        setInfo(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [mealid]);

  if (!info) {
    return <div>Data Not Found</div>;
  }

  return (
    <div>
      <div className="mealInfo">
        <img src={info.strMealThumb} alt={info.strMeal} />
        <div className="info">
          <h1>Recipe Detail</h1>
          <button>{info.strMeal}</button>
          <h3>Instructions</h3>
          <p>{info.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Mealinfo;
