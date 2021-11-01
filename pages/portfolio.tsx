import { Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { SIZE } from "../constants/size";
import AppH1 from "../components/AppH1";
import AppPageContainer from "../components/AppPageContainer";

function Portfolio() {
  return (
    <AppPageContainer>
      <chakra.section my={SIZE.my}>
        <AppH1>Portfolio</AppH1>
        <Text py={SIZE.py}>
          Here is a collection of my work as a freelancer and as an indie
          developer that loves to hack around and build projects, and a
          hackathon participant of various events!
        </Text>
      </chakra.section>
    </AppPageContainer>
  );
}

export default Portfolio;
