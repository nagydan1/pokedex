import useTypes from "../hooks/useTypes";

const TypeList = () => {
  const { types } = useTypes();

  return (
    <ul>
      {types.map((type) => (
        <li key={type.name}>{type.name}</li>
      ))}
    </ul>
  );
};

export default TypeList;
