import { INavCategory } from "../../interfaces/INavCategory";

export default function NavCategory({ href, name, pathD }: INavCategory) {
  return (
    <>
      <a href={href} className="px-4 flex justify-end">
        <span>{name}</span>
        <svg
          className="w-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={pathD}
          />
        </svg>
      </a>
    </>
  );
}
