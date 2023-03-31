import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe=>(
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
          {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Alternate
import { recipes } from './data.js';

const Recipe=(props)=>{
  const { id, name, ingredients }=props.data;
  return (
        <div key={id}>
          <h2>{name}</h2>
          <ul>
            {ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
  )
            }
  export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe data={recipe} key={recipe.id} />
      )}
    </div>
  );
}

//
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      
      {poem.lines.map((line, i) =>
      <fragment key={i}>
        <p key={i}>
          {i>0 && <hr/>}
          {line}
        </p>
        
      </fragment>             
      )}
    </article>
  );
}

