interface ICategory {
  name: string;
  href: string;
  pathD: string;
}

export default function NavCategory({ href, name, pathD }: ICategory) {
  return (
    <>
      <a href={href}>
        <svg
          className="w-5"
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
        <span>{name}</span>
      </a>
    </>
  );
}
