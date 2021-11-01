import { Box, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import AppH1 from "../components/AppH1";
import { SIZE } from "../constants/size";

function AboutMe() {
  return (
    <Box
      minHeight="100vh"
      mx={SIZE.mx}
      maxW={SIZE.maxW}
      py={SIZE.p}
      px={SIZE.p / 2}
    >
      <chakra.section >
        <AppH1>About Me</AppH1>
        <Text py={SIZE.py}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          nisi, quisquam eveniet officiis ea rem illo, dolore qui repellat harum
          adipisci minus, molestiae accusamus at assumenda saepe neque molestias
          iste?
        </Text>
      </chakra.section>
    </Box>
  );
}

export default AboutMe;
