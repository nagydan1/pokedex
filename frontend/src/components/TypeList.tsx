import useTypes from "../hooks/useTypes";

const TypeList = () => {
  const { resourceList } = useTypes();

  return (
    <ul>
      {resourceList.map((type) => (
        <li key={type.name}>{type.name}</li>
      ))}
    </ul>
  );
};

export default TypeList;
