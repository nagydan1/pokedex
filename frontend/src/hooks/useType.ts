import useTypes from "./useTypes";

const useType = (name: string | null) => {
  const { data } = useTypes();
  return data?.find((t) => t.name === name);
};

export default useType;
