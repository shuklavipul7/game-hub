import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack p="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
