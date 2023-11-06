interface IProps {
  choices: string[] | number[];
}

export const Dropdown = ({ choices }: IProps) => {
  return (
    <>
      <p>{choices.length}</p>
    </>
  );
};
