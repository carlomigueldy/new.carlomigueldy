import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { SIZE } from "../../constants/size";
import AppH2 from "../AppH2";
import ToolItem, { ToolItemProps } from "./ToolItem";

export type ToolItemListContainerProps = {
  id?: string;
  title: string;
  /** @todo type to be replaced with data model */
  items: ToolItemProps[];
};

export default function ToolItemListContainer({
  id,
  title,
  items,
}: ToolItemListContainerProps) {
  return (
    <>
      <chakra.section id={id} my={SIZE.my}>
        <AppH2>{title}</AppH2>

        <Center>
          <Wrap spacing={8} py={SIZE.py}>
            {items.map((item, index) => (
              <WrapItem key={index}>
                <ToolItem title={item.title} description={item.description} />
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      </chakra.section>
    </>
  );
}
