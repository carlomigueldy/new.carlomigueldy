import { Heading } from "@chakra-ui/layout";

export type AppH2Props = {
  children?: React.ReactNode;
};

export default function AppH2({ children }: AppH2Props) {
  return (
    <Heading as="h2" fontSize="4xl" fontWeight="bold">
      {children}
    </Heading>
  );
}
