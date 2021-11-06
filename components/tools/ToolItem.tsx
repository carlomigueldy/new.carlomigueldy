import { Box, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";

export type ToolItemProps = {
  title: string;
  description: string;
};

export default function ToolItem({ title, description }: ToolItemProps) {
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
