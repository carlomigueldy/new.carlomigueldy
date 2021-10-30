import { Heading } from "@chakra-ui/layout";

export type AppH1Props = {
  children?: React.ReactNode;
};

export default function AppH1({ children }: AppH1Props) {
  return (
    <Heading as="h1" fontSize="5xl" fontWeight="bold">
      {children}
    </Heading>
  );
}
