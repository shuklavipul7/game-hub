import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" p="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
