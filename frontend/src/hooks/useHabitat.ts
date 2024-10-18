import useHabitats from "./useHabitats";

const useHabitat = (name?: string) => {
  const { data } = useHabitats();
  return data?.find((h) => h.name === name);
};

export default useHabitat;
