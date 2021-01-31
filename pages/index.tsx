import NavMenu from "../components/NavMenu";
import Recipe from "../components/Recipe";

export default function Home() {
  return (
    <div className="text-gray-600">
      <div>
        <NavMenu />
      </div>

      <main className="px-16 py-6">
        <div className="flex justify-center md:justify-end">
          <a href="#" className="text-primary">Log in</a>
          <a href="#" className="text-primary ml-4">Sign up</a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <Recipe
            title="Latest Recipes"
            recipeName="5 Bean Chili Stew"
            author="Mario"
            imgUrl="/img/stew.jpg"
          />

          <Recipe title="Most Popular" />
        </div>

        <div className="flex justify-center">
          <div className="bg-secondary-100 text-secondary-200">Load more</div>
        </div>
      </main>
    </div>
  );
}
