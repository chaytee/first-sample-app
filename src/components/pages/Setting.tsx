import { memo, VFC } from "react";
import { Text, Stack, Box, Container } from "@chakra-ui/react";
export const Setting: VFC = memo(() => {
  return (
    <Container>
      <Box padding="7">
        <Stack>
          <Text as="h2" size="md" textAlign="center" mb="6">
            アプリ設定画面
          </Text>
          <Text as="p" size="md" textAlign="center" mb="6">
            準備中です。
          </Text>
        </Stack>
      </Box>
    </Container>
  );
});
