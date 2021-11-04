import { Box, Center, Heading, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { NextPage } from "next";
import { SIZE } from "../constants/size";
import { Image } from "@chakra-ui/image";
import { chakra } from "@chakra-ui/system";
import AppH2 from "../components/AppH2";
import { Tooltip } from "@chakra-ui/react";
import AppH1 from "../components/AppH1";
import AppPageContainer from "../components/AppPageContainer";

const hardwareItems: ItemProps[] = [
  {
    title: "AMD RYZEN 5 3600 6-Core",
    description:
      "AMD RYZEN 5 3600 6-Core 3.6 GHz-4.2 GHz Max Boost Socket AM4 65W Desktop Processor",
  },
  {
    title: "RTX 2070 SUPER OC",
    description: "GIGABYTE GeForce RTX 2070 SUPER GAMING OC 8G Graphics Card",
  },
  {
    title: "B550M mATX",
    description: "GIGABYTE B550M AORUS ELITE mATX Motherboard",
  },
  {
    title: "1TB M.2-2280 NVMe",
    description: "ADATA XPG SX8200 Pro 1TB M.2-2280 NVMe PCIe SSD",
  },
  {
    title: "Apexgaming 80plus Gold 850W PSU",
    description:
      "Apexgaming, AG-850M, 850 watts, US Type, 80plus Gold Full modular cable, Power Supply",
  },
  {
    title: "SteelSeries 64795 APEX 3 Gaming Keyboard",
    description:
      "SteelSeries 64795 APEX 3 Gaming Keyboard / Whisper and Quiet Keys / Water-resistant / 10-zone RGB Lighting / Cable Routing",
  },

  {
    title: "DEEPCOOL MATREXX 55 MESH",
    description: "DEEPCOOL MATREXX 55 MESH ADD-RGB 4F Tempered Glass PC Case",
  },
  {
    title: "Asus TUF GAMING VG279Q1A 27''",
    description:
      "Asus TUF GAMING VG279Q1A 27 inch FHD IPS 165Hz (above 144Hz), Extreme Low Motion Blur, Adaptive-sync, FreeSync Premium Gaming Monitor",
  },
  {
    title: "Asus TUF GAMING VG279Q1A 27''",
    description:
      "Asus TUF GAMING VG279Q1A 27 inch FHD IPS 165Hz (above 144Hz), Extreme Low Motion Blur, Adaptive-sync, FreeSync Premium Gaming Monitor",
  },
  {
    title: "Logitech G502 LIGHTSPEED",
    description:
      "Logitech G502 LIGHTSPEED Wireless Gaming Mouse Wireless 2.4GHz HERO 16000DPI RGB for Overwatch MMO MOBA Mouse Gamer",
  },
  {
    title: "CORSAIR VENGEANCE RGB PRO 3200MHz 16GB",
    description:
      "CORSAIR VENGEANCE RGB PRO 3200MHz 16GB (2 x 8GB) DDR4 DRAM C16 Memory Kit (Black)",
  },
];

const Uses: NextPage = () => {
  return (
    <>
      <AppPageContainer>
        <chakra.section my={SIZE.my}>
          <AppH1>Battle Station</AppH1>
          <Box py={SIZE.py}>
            <Text>Here is the equipment behind producing magical code!</Text>
          </Box>
        </chakra.section>

        <chakra.section id="battle-station" my={SIZE.my}>
          <Center>
            <Image src="/battle-station.jpg" height="600px" borderRadius="md" />
          </Center>
        </chakra.section>

        <ItemListContainer
          id="hardware"
          title="Hardware"
          items={hardwareItems}
        />

        <ItemListContainer
          id="software"
          title="Software"
          items={hardwareItems}
        />
      </AppPageContainer>
    </>
  );
};

export default Uses;

type ItemListContainerProps = {
  id?: string;
  title: string;
  /** @todo type to be replaced with data model */
  items: ItemProps[];
};

function ItemListContainer({ id, title, items }: ItemListContainerProps) {
  return (
    <>
      <chakra.section id={id} my={SIZE.my}>
        <AppH2>{title}</AppH2>

        <Center>
          <Wrap spacing={8} py={SIZE.py}>
            {items.map((item, index) => (
              <WrapItem key={index}>
                <Item title={item.title} description={item.description} />
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      </chakra.section>
    </>
  );
}

type ItemProps = {
  title: string;
  description: string;
};

function Item({ title, description }: ItemProps) {
  return (
    <Tooltip label={`${title}: ${description}`} fontSize="md" hasArrow>
      <Box
        py={10}
        px={5}
        maxW={325}
        minHeight={200}
        border="solid"
        borderColor="blue.600"
        borderRadius="md"
        borderWidth="2px"
        cursor="pointer"
        transition="all .2s ease-in-out"
        _hover={{
          borderColor: "blue.300",
          transform: "scale(1.05)",
        }}
      >
        <Text fontSize="lg" mb={2} fontWeight="bold">
          {title}
        </Text>
        <chakra.p noOfLines={2}>{description}</chakra.p>
      </Box>
    </Tooltip>
  );
}
