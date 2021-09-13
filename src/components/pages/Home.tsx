import { memo, VFC, useCallback } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Text, Stack, Box, Link } from "@chakra-ui/react";

export const Home: VFC = memo(() => {
  const history = useHistory();
  const onClickUserManagement = useCallback(() => {
    history.push("/home/user_management");
  }, []);

  const InnerLink = {
    display: "inline-block",
    color: "#fff",
    backgroundColor: "pink",
    padding: "10px 15px",
    borderRadius: "10px"
  };

  return (
    <BrowserRouter>
      <Box padding="7">
        <Stack>
          <Text as="h2" size="md" textAlign="center" mb="6">
            「パパちゃんママちゃん」はペットの里親を募集するサイトです。
          </Text>
          <Text as="p" size="sm" mb="6">
            お気に入りの猫ちゃんを見つけ、会いにいきましょう！
          </Text>
          <Text textAlign="center">
            <Link onClick={onClickUserManagement} style={InnerLink}>
              里親募集 ページへ
            </Link>
          </Text>
        </Stack>
      </Box>
    </BrowserRouter>
  );
});
