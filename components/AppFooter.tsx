import { Box, Link, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import { SIZE } from "../constants/size";

const AppFooter = () => {
  return (
    <Box
      height="25vh"
      mx={SIZE.mx}
      maxW={SIZE.maxW}
      px={32}
      py={32 / 2}
      bgColor="blue.800"
    >
      <Text textTransform="uppercase" fontWeight="bold" letterSpacing="widest">
        Links
      </Text>

      <AppLink path="/">Home</AppLink>
      <AppLink path="/uses">Uses</AppLink>
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
