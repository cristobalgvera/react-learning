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

      <div className="mt-8">
        <div className="mt-12">
          <img src={imgUrl} alt={recipeName} />
          <div>
            <span>{recipeName}</span>
            {author && <span>Recipe by {author}</span>}
          </div>
        </div>
      </div>
    </>
  );
}
