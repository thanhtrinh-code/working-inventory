
import { useEffect, useState } from 'react'
import LoadingRecipe from './LoadingRecipe';
import RecipeCard from './RecipeCard';

export default function GettingRecipe({query, trigger}) {
    const [recipes, setRecipes] = useState([]);
    const [randomRecipe, setRandomRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData(){
      if(!query) return;
      try {
        setIsLoading(true);
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`);
        const data = await res.json();
        setRecipes(data.hits);
      } catch (error) {
        console.error(error);
      }finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query, setIsLoading]);

  useEffect(() => {
    if(recipes.length > 0 || trigger) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setRandomRecipe(recipes[randomIndex]?.recipe);
    }
  }, [recipes, setRandomRecipe, trigger]);
  return (
    <>
      {isLoading ? <LoadingRecipe /> : <RecipeCard randomRecipe={randomRecipe}/>}
    </>
  )
}
