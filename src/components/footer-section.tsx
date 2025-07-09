import { useMantineTheme, Paper, rem, Container, Flex, Group, Stack, Text } from "@mantine/core";

export function Footer() {
  const theme = useMantineTheme();

  return (
    <footer>
      <Paper
        py={rem(48)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderTop: `1px solid ${theme.colors.violet[7]}`,
        }}
      >
        <Container size="xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "center", md: "center" }}
            gap="md"
          >
            <Group gap="xs">
              <Paper
                w={rem(40)}
                h={rem(40)}
                radius="xl"
                bg={theme.colors.orange[5]}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text size="lg">🐱</Text>
              </Paper>
              <Text size="lg" fw={700} c="white">
                MEOWCOIN
              </Text>
            </Group>

            <Stack gap={0} ta={{ base: "center", md: "right" }}>
              <Text c="dimmed">&copy; 2024 MEOWCOIN. All rights reserved.</Text>
              <Text size="sm" c="dimmed" mt={4}>
                Built with ❤️ by the MEOWCOIN community
              </Text>
            </Stack>
          </Flex>
        </Container>
      </Paper>
    </footer>
  );
}
