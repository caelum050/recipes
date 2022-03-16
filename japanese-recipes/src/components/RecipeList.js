import { Link } from "react-router-dom";

import { projectFirestore } from "../firebase/config";

// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>

          <img src={recipe.url} alt="recipe-img" />

          <div>{recipe.description}</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
          <span className="delete" onClick={() => handleClick(recipe.id)}>
            X
          </span>
        </div>
      ))}
    </div>
  );
}
