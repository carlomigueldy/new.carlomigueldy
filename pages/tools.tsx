import { Box, Center, Heading, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { NextPage } from "next";
import { SIZE } from "../constants/size";
import { Image } from "@chakra-ui/image";
import { chakra } from "@chakra-ui/system";
import AppH2 from "../components/AppH2";
import { Tooltip } from "@chakra-ui/react";
import AppH1 from "../components/AppH1";
import AppPageContainer from "../components/AppPageContainer";
import ToolItemListContainer from "../components/tools/ToolItemListContainer";
import { hardwareItems } from "../constants/tools";

const Uses: NextPage = () => {
  return (
    <>
      <AppPageContainer>
        <chakra.section my={SIZE.my}>
          <AppH1>Battle Station</AppH1>
          <Box py={SIZE.py}>
            <chakra.p fontSize="2xl">
              Here is the equipment behind producing magical code!
            </chakra.p>
          </Box>
        </chakra.section>

        <chakra.section id="battle-station" my={SIZE.my}>
          <Center>
            <Image src="/battle-station.jpg" height="600px" borderRadius="md" />
          </Center>
        </chakra.section>

        <ToolItemListContainer
          id="hardware"
          title="Hardware"
          items={hardwareItems}
        />

        <ToolItemListContainer
          id="software"
          title="Software"
          items={hardwareItems}
        />
      </AppPageContainer>
    </>
  );
};

export default Uses;
