import { Box, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { SIZE } from "../constants/size";
import AppH1 from "../components/AppH1";
import AppPageContainer from "../components/AppPageContainer";

function Work() {
  return (
    <AppPageContainer>
      <chakra.section my={SIZE.my}>
        <AppH1>Work Experience</AppH1>
        <Box py={SIZE.py}>
          <chakra.p mb={5} fontSize="2xl">
            {`I am currently in a full time position at FilledStacks and we are
            building mobile applications using Flutter & Firebase for our
            clients. We are also actively involved and contributing to Open
            Source as FilledStacks has various of packages published that is
            meant to help out other developers to build projects/products as
            effectively and efficiently as possible. Our mission is to allow
            creating software easier.`}
          </chakra.p>
        </Box>
      </chakra.section>
    </AppPageContainer>
  );
}

export default Work;
