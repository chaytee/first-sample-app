import { Box, Heading, Divider, Input, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => {
    login(userId);
  };

  return (
    <Box width="100vw" height="100vh" m="auto" pt="10">
      <Stack m="auto" textAlign="center">
        <Heading as="h1" size="lg" textAlign="center">
          パパちゃんママちゃん
        </Heading>
        <Divider my="4" />
        <Text mb="5">
          パパちゃんママちゃんはペットの里親を募集するサイトです。
        </Text>
      </Stack>
      <Stack bg="white" w="sm" p={4} borderRadius="md" shadow="md" m="auto">
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLogin}
            loading={loading}
            disabled={userId === ""}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Stack>
    </Box>
  );
});
