import { Box, Link, Spacer, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import { SIZE } from "../constants/size";

const AppFooter = () => {
  return (
    <Box
      height="25vh"
      mx={SIZE.mx}
      maxW={SIZE.maxW}
      px={32 / 2}
      py={32 / 2}
      display="flex"
      // bgColor="blue.800"
    >
      <Box p={5}>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="widest"
        >
          Links
        </Text>

        <AppLink path="/">Home</AppLink>
        <AppLink path="/uses">Uses</AppLink>
      </Box>

      <Box p={5}>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="widest"
        >
          Links
        </Text>

        <AppLink path="/">Home</AppLink>
        <AppLink path="/uses">Uses</AppLink>
      </Box>

      <Spacer />

      <Box display="flex" justifyContent="center" alignItems="center">
        <Text>Made with 💖 by carlomigueldy.eth</Text>
      </Box>
    </Box>
  );
};

export default AppFooter;

type AppLinkProps = {
  children?: React.ReactNode;
  path: string;
};

const AppLink = ({ children, path }: AppLinkProps) => {
  const router = useRouter();

  return (
    <Text
      onClick={() => router.push(path)}
      cursor="pointer"
      _hover={{ color: "blue.200" }}
    >
      {children}
    </Text>
  );
};
