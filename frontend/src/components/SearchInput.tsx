import { useRef } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch, BsXCircle } from "react-icons/bs";
import usePokemonQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = usePokemonQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search pokemons..."
          variant="filled"
        />
        <InputRightElement
          children={
            <Button
              variant="link"
              onClick={() => {
                if (ref.current) ref.current.value = "";
                setSearchText("");
              }}
            >
              <BsXCircle />
            </Button>
          }
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
