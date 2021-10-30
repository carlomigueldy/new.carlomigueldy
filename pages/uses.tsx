import { Box, Center, Heading, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { NextPage } from "next";
import { SIZE } from "../constants/size";
import NextImage from "next/image";
import { Image } from "@chakra-ui/image";
import { chakra } from "@chakra-ui/system";
import AppH2 from "../components/AppH2";

const hardwareItems: ItemProps[] = [
  {
    title: "RTX 2070 SUPER OC",
    description: "My very cool graphics card",
  },
];

const Uses: NextPage = () => {
  return (
    <>
      <Box
        minHeight="100vh"
        mx={SIZE.mx}
        maxW={SIZE.maxW}
        py={SIZE.p}
        px={SIZE.p / 2}
      >
        <Heading as="h1" fontSize="4xl" fontWeight="bold">
          Battle Station
        </Heading>
        <Text>Here is the equipment behind producing magical code!</Text>

        <chakra.section id="battle-station" my={SIZE.my}>
          <Center>
            <Image src="/battle-station.jpg" height="450px" borderRadius="md" />
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
      </Box>
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

        <Wrap spacing={8} py={SIZE.py}>
          {items.map((item, index) => (
            <WrapItem key={index}>
              <Item title={item.title} description={item.description} />
            </WrapItem>
          ))}
        </Wrap>
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
    <Box
      py={10}
      px={5}
      border="solid"
      borderColor="blue.600"
      borderRadius="md"
      borderWidth="2px"
    >
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <chakra.p>{description}</chakra.p>
    </Box>
  );
}
