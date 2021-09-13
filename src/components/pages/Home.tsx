import { memo, VFC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Text, Stack, Box, Button, Container } from "@chakra-ui/react";

export const Home: VFC = memo(() => {
  const history = useHistory();
  const onClickUserManagement = useCallback(() => {
    history.push("/home/user_management");
  }, []);

  const InnerLink = {
    display: "inline-block",
    color: "#fff",
    backgroundColor: "#fd999a",
    padding: "10px 20px",
    borderRadius: "10px"
  };

  return (
    <Container>
      <Box padding="7">
        <Stack>
          <Text as="h2" size="md" textAlign="center" mb="6">
            アニマル会社　従業員管理
          </Text>
          <Text as="p" size="md" textAlign="left" mb="6">
            従業員情報に変更があった場合は、すみやかに修正してください。
          </Text>
          <Button onClick={onClickUserManagement} style={InnerLink}>
            従業員一覧へ
          </Button>
        </Stack>
      </Box>
    </Container>
  );
});
