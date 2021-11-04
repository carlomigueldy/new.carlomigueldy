import { Box, Link, Spacer, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import { SIZE } from "../constants/size";

const AppFooter = () => {
  return (
    <Box
      mx={SIZE.mx}
      maxW={SIZE.maxW}
      px={32 / 2}
      py={16 / 2}
      display="flex"
      // bgColor="blue.800"
    >
      <Box p={5}>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="widest"
          mb={5}
        >
          Links
        </Text>

        <AppLink path="/">Home</AppLink>
        <AppLink path="/tools">Tools</AppLink>
        <AppLink path="/about-me">About Me</AppLink>
      </Box>

      <Box mx={10} />

      <Box p={5}>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="widest"
          mb={5}
          color="transparent"
        >
          Links
        </Text>

        <AppLink path="/work">Work</AppLink>
        <AppLink path="/portfolio">Portfolio</AppLink>
        <AppLink path="/blog">Blog</AppLink>
      </Box>

      <Spacer />

      <Box display="flex" justifyContent="center" alignItems="center">
        <Text>
          Made with 💖 by{" "}
          <a
            href="https://linktr.ee/carlomigueldy"
            target="_blank"
            rel="noreferrer"
          >
            carlomigueldy.eth
          </a>
        </Text>
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
