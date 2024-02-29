import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
  Text,
  Image,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box
        display={"flex"}
        flexDir={"row-reverse"}
        padding={" 0 20px"}
        gap={"50px"}
      >
        <Text fontSize={"20px"} fontWeight={"Bold"}>
          <Link to="/driverStats"> Driver Stats</Link>
        </Text>
        <Text fontSize={"20px"} fontWeight={"Bold"}>
          <Link to="/manufacturerStats"> Manufacturer Stats</Link>
        </Text>
        <Text fontSize={"20px"} fontWeight={"Bold"}>
          <Link to="/raceStats"> Race Stats</Link>
        </Text>
      </Box>
    </>
  );
}

export default NavBar;
