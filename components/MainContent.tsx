import { Recipe } from "../interfaces/Recipe";
import RecipeCard from "./RecipeCard";

const recipes: Recipe[] = [
  {
    name: "5 Bean Chili Stew",
    time: "25 mins",
    author: "Mario",
    imgUrl: "/img/stew.jpg",
  },
  {
    name: "Veggy Noodles",
    time: "20 mins",
    author: "Eduard",
    imgUrl: "/img/noodles.jpg",
  },
  {
    name: "Tofu Curry",
    time: "35 mins",
    author: "Rossana",
    imgUrl: "/img/curry.jpg",
  },
];

export default function MainContent() {
  return (
    <main className="px-16 py-6 bg-gray-100">
      <div className="flex justify-center md:justify-end">
        <a href="#" className="text-primary">
          Log in
        </a>
        <a href="#" className="text-primary ml-4">
          Sign up
        </a>
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>
        <div className="mt-8 flex">
          {recipes.map((recipe, index) => (
            <RecipeCard key={`recipe-${index}`} {...recipe} />
          ))}
        </div>

        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>
      </div>

      <div className="flex justify-center">
        <div className="bg-secondary-100 text-secondary-200">Load more</div>
      </div>
    </main>
  );
}
