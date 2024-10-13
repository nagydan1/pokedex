import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  sortOrder: SortOrder;
}

export interface SortOrder {
  value: string;
  factor: number;
  label: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrderList = [
    { value: "id", factor: 1, label: "ID ↑" },
    { value: "id", factor: -1, label: "ID ↓" },
    { value: "name", factor: 1, label: "A → Z" },
    { value: "name", factor: -1, label: "Z → A" },
    { value: "height", factor: 1, label: "Height ↑" },
    { value: "height", factor: -1, label: "Height ↓" },
    { value: "weight", factor: 1, label: "Weight ↑" },
    { value: "weight", factor: -1, label: "Weight ↓" },
  ];

  const currentSortOrder = sortOrderList.find(
    (so) => so.label === sortOrder?.label
  );

  return (
    <Menu>
      <MenuButton as={Button} size="lg" rightIcon={<BsChevronDown />} mb={4}>
        Order by: {currentSortOrder?.label || "ID ↑"}
      </MenuButton>
      <MenuList>
        {sortOrderList.map((so, index) => (
          <MenuItem
            onClick={() => onSelectSortOrder(so)}
            key={index}
            value={so.value}
          >
            {so.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
