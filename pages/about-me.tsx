import { Box, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { SIZE } from "../constants/size";
import AppH1 from "../components/AppH1";
import AppPageContainer from "../components/AppPageContainer";

function AboutMe() {
  return (
    <AppPageContainer>
      <chakra.section my={SIZE.my}>
        <AppH1>About Me</AppH1>
        <Box py={SIZE.py}>
          <chakra.p mb={5}>
            {`I am a full stack software engineer and software craftsman based in
            Philippines. I practice test driven development and learning more
            about domain driven design and apply those principles on a daily
            basis. I also emphasize the importance of clean code and strongly
            believe in those principles in software engineering. DRY, YAGNI,
            SOLID to mention a few of those.`}
          </chakra.p>
          <chakra.p mb={5}>
            {`I am currently active in contributing to Open Source and some
            involvements in the Web 3.0 space. I am learning more about
            Blockchain technology on my free time, also interested in learning
            in depth with regards to smart contract security. Learning how to
            build smart contracts and Solidity got me hooked about security in
            general, it's very important to learn about security in this space.`}
          </chakra.p>
        </Box>
      </chakra.section>
    </AppPageContainer>
  );
}

export default AboutMe;
