import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Show above="sm">
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;
