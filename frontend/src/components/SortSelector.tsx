import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "number", label: "Serial number" },
    { value: "abc", label: "A → Z" },
    { value: "-abc", label: "Z → A" },
    { value: "height", label: "Height ↑" },
    { value: "-heigh", label: "Height ↓" },
    { value: "weight", label: "Weight ↑" },
    { value: "-weight", label: "Weight ↓" },
  ];

  const currentSortOrder = sortOrders. find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} size="lg" rightIcon={<BsChevronDown />} mb={4}>
        Order by: {currentSortOrder?.label || "Serial number"}
      </MenuButton>
      <MenuList>
        {/* <MenuItem onClick={() => onSelectHabitat(null)}>All habitats</MenuItem> */}
        {sortOrders.map((sortOrder, index) => (
          <MenuItem onClick={() => onSelectSortOrder(sortOrder.value)} key={index} value={sortOrder.value}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
