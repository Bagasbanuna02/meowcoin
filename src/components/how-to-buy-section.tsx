import { Box, Card, Container, Paper, rem, SimpleGrid, Stack, Text, Title, useMantineTheme } from "@mantine/core";

export function HowToBuySection() {
  const theme = useMantineTheme();

  const steps = [
    {
      step: 1,
      title: "Create a Wallet",
      description:
        "Download and set up a crypto wallet like MetaMask or Trust Wallet.",
    },
    {
      step: 2,
      title: "Get ETH",
      description:
        "Purchase Ethereum from any major exchange and transfer to your wallet.",
    },
    {
      step: 3,
      title: "Connect to DEX",
      description:
        "Connect your wallet to Uniswap or PancakeSwap decentralized exchange.",
    },
    {
      step: 4,
      title: "Swap for MEOWCOIN",
      description:
        "Enter our contract address and swap your ETH for MEOWCOIN tokens.",
    },
  ];

  return (
    <section id="how-to-buy">
      <Container size="xl" py={rem(80)}>
        <Stack gap="xl">
          <Stack gap="xs" ta="center" maw={rem(800)} mx="auto">
            <Title order={2} size={rem(42)} c="white">
              How to Buy MEOWCOIN
            </Title>
            <Text size="lg" c="gray.3">
              Follow these simple steps to join the MEOWCOIN revolution and
              become part of our growing community.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            {steps.map((step, index) => (
              <Box key={index} style={{ position: "relative" }}>
                <Card
                  withBorder
                  radius="md"
                  padding="lg"
                  style={{
                    borderColor: theme.colors.violet[6],
                    backgroundColor: theme.colors.dark[8],
                    height: "100%",
                  }}
                >
                  <Stack gap="md" align="center">
                    <Paper
                      w={rem(64)}
                      h={rem(64)}
                      radius="xl"
                      bg={theme.colors.orange[5]}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text size={rem(24)} fw={700} c="white">
                        {step.step}
                      </Text>
                    </Paper>
                    <Text fw={600} size="lg" c="white">
                      {step.title}
                    </Text>
                    <Text c="gray.3" ta="center">
                      {step.description}
                    </Text>
                  </Stack>
                </Card>
                {index < steps.length - 1 && (
                  <Box
                    hiddenFrom="lg"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: rem(-24),
                      transform: "translateY(-50%)",
                      fontSize: rem(32),
                      color: theme.colors.orange[5],
                    }}
                  >
                    →
                  </Box>
                )}
              </Box>
            ))}
          </SimpleGrid>

          <Card
            withBorder
            radius="lg"
            padding="lg"
            mx="auto"
            maw={rem(700)}
            style={{
              borderColor: theme.colors.violet[6],
              backgroundColor: theme.colors.dark[8],
            }}
          >
            <Stack gap="md" align="center">
              <Title order={3} c="white">
                Contract Address
              </Title>
              <Paper
                p="md"
                radius="md"
                w="100%"
                style={{ backgroundColor: theme.colors.dark[9] }}
              >
                <Text
                  ff="monospace"
                  c={theme.colors.orange[4]}
                  fz="sm"
                  ta="center"
                  style={{ wordBreak: "break-all" }}
                >
                  0x1234567890abcdef1234567890abcdef12345678
                </Text>
              </Paper>
              <Text size="sm" c="gray.5">
                Always verify the contract address before purchasing
              </Text>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </section>
  );
}