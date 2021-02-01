import { IRecipe } from "../interfaces/IRecipe";

// This approach can be used to extract 'logic' from class names
// Also can be used directive @apply directly from TailwindCSS if you want
const badge = `
  absolute
  p-2 ml-2 mt-2 top-0
  rounded-full
  bg-secondary-100
  text-secondary-200 text-xs uppercase font-bold
`;

interface IProps {
  extraClasses?: string;
}

export default function RecipeCard({
  author,
  imgUrl,
  name,
  time,
  extraClasses,
}: IRecipe & IProps) {
  return (
    <>
      <div
        className={`bg-white rounded overflow-hidden shadow-md relative ${extraClasses || ''}`}
      >
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
          <svg
            className="w-5 inline-block mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
}
