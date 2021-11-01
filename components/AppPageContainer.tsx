import { Box } from "@chakra-ui/react";
import { SIZE } from "../constants/size";

export type AppPageContainerProps = {
  children?: React.ReactNode;
};

export default function AppPageContainer({ children }: AppPageContainerProps) {
  return (
    <Box
      minHeight="100vh"
      mx={SIZE.mx}
      maxW={SIZE.maxW}
      py={SIZE.p}
      px={SIZE.p / 2}
    >
      {children}
    </Box>
  );
}
