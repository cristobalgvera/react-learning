import { Recipe } from "../interfaces/Recipe";
import Button from "./common/Button";
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
    <main className="px-16 py-6 bg-gray-100 md:col-span-3">
      <div className="flex justify-center md:justify-end">
        <Button
          message="Log in"
          extraClasses="text-primary md:border-primary md:border-2 hover:bg-primary hover:text-gray-100"
        />
        <Button
          message="Sign up"
          extraClasses="text-primary ml-2 md:border-primary md:border-2 hover:bg-primary hover:text-gray-100"
        />
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={`recipe-${index}`}
              extraClasses="hover:shadow-lg"
              {...recipe}
            />
          ))}
        </div>

        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>
        <div className="mt-8 grid gap-10 lg:grid-cols-3"></div>
      </div>

      <div className="flex justify-center">
        <Button
          message="Load more"
          extraClasses="bg-secondary-100 text-secondary-200 hover:shadow-inner"
        />
      </div>
    </main>
  );
}
