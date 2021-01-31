import { Recipe } from "../interfaces/Recipe";

// This approach can be used to extract 'logic' from class names
// Also can be used directive @apply directly from TailwindCSS if you want
const badge = `
  absolute
  p-2 ml-2 mt-2 top-0
  rounded-full
  bg-secondary-100
  text-secondary-200 text-xs uppercase font-bold
`;

export default function RecipeCard({ author, imgUrl, name, time }: Recipe) {
  return (
    <>
      <div className="bg-white rounded overflow-hidden shadow-md relative">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-32 sm:h-48 object-cover"
        />
        <div className="m-4">
          <span className="font-bold">{name}</span>
          <span className="block text-gray-500 text-sm">
            Recipe by {author}
          </span>
        </div>
        <div className={badge}>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
}
