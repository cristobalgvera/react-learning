interface IProps {
  title: string;
  recipeName?: string;
  author?: string;
  imgUrl?: string;
}

export default function Recipe({ author, imgUrl, recipeName, title }: IProps) {
  return (
    <>
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">{title}</h4>

      <div className="mt-8 flex">
        <div className="bg-white rounded overflow-hidden shadow-md">
          <img src={imgUrl} alt={recipeName} className="w-full h-32 sm:h-48 object-cover" />
          <div className="m-4">
            <span className="font-bold">{recipeName}</span>
            {author && (
              <span className="block text-gray-500 text-sm">
                Recipe by {author}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
