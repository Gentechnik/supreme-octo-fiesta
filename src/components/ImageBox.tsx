interface IProps {
  title: string;
  body: string;
  imageFile: string;
  stars: number;
  highlight?: boolean;
}

export const ImageBox = ({
  title,
  body,
  imageFile,
  stars,
  highlight = false,
}: IProps) => {
  stars = stars > 5 ? 5 : stars;
  const highlighted = () => {
    return highlight ? "bg-yellow-400 border-red-700 border-2" : "";
  };

  return (
    <>
      <div className={`flex-col flex p-2 bg-orange-200 gap-2 ${highlighted()}`}>
        <h2>
          {title} {`*`.repeat(stars)}
        </h2>
        <div className="flex gap-2">
          <img src={`images/${imageFile}`} className="w-[250px]" />
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};
