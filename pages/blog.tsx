import { Box, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { SIZE } from "../constants/size";
import AppH1 from "../components/AppH1";
import AppPageContainer from "../components/AppPageContainer";

function Blog() {
  return (
    <AppPageContainer>
      <chakra.section my={SIZE.my}>
        <AppH1>Blog</AppH1>
        <Box py={SIZE.py}>
          <chakra.p mb={5} fontSize="2xl">
            {`I enjoy writing tutorials on my blog at dev.to/carlomigueldy, when I
            learn new things or feel that I know a certain tool, technology, or a
            pattern well then I would love to share it by writing out a technical
            blog about it. Sometimes I also enjoy promoting products that gave me
            interest (e.g Supabase).`}
          </chakra.p>
        </Box>
      </chakra.section>
    </AppPageContainer>
  );
}

export default Blog;
