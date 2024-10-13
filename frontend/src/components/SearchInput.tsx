import { useRef } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch, BsXCircle } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
                onSearch("");
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
