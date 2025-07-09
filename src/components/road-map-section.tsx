import { useMantineTheme, Box, rem, Container, Stack, Title, SimpleGrid, Card, Group, Text } from "@mantine/core";

export function RoadmapSection() {
  const theme = useMantineTheme();

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      status: "completed",
      items: [
        "Token Creation & Audit",
        "Website Launch",
        "Community Building",
        "Initial Marketing Campaign",
      ],
    },
    {
      phase: "Phase 2",
      title: "Growth & Expansion",
      status: "current",
      items: [
        "DEX Listings",
        "Partnership Development",
        "Mobile App Development",
        "NFT Collection Launch",
      ],
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Development",
      status: "upcoming",
      items: [
        "CEX Listings",
        "DeFi Integration",
        "Staking Platform",
        "Governance Implementation",
      ],
    },
    {
      phase: "Phase 4",
      title: "Global Adoption",
      status: "future",
      items: [
        "Cross-chain Bridge",
        "Metaverse Integration",
        "Real-world Utilities",
        "Charity Initiatives",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return {
          bg: theme.colors.green[9],
          border: theme.colors.green[6],
          dot: theme.colors.green[4],
        };
      case "current":
        return {
          bg: theme.colors.orange[9],
          border: theme.colors.orange[6],
          dot: theme.colors.orange[4],
        };
      default:
        return {
          bg: theme.colors.violet[9],
          border: theme.colors.violet[6],
          dot: theme.colors.violet[4],
        };
    }
  };

  return (
    <section id="roadmap">
      <Box py={rem(80)} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="xs" ta="center" maw={rem(800)} mx="auto">
              <Title order={2} size={rem(42)} c="white">
                Roadmap
              </Title>
              <Text size="lg" c="gray.3">
                Our journey to revolutionize the meme coin space with innovative
                features and community-driven development.
              </Text>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
              {roadmapItems.map((item, index) => {
                const colors = getStatusColor(item.status);
                return (
                  <Card
                    key={index}
                    withBorder
                    radius="md"
                    padding="lg"
                    style={{
                      backgroundColor: colors.bg,
                      borderColor: colors.border,
                    }}
                  >
                    <Stack gap="md">
                      <Group justify="space-between">
                        <Text fw={600} size="lg" c="white">
                          {item.phase}
                        </Text>
                        {item.status === "completed" && (
                          <Text c="green.4">✓</Text>
                        )}
                        {item.status === "current" && (
                          <Box
                            style={{
                              width: rem(12),
                              height: rem(12),
                              borderRadius: "50%",
                              backgroundColor: theme.colors.orange[4],
                              animation: "pulse 2s infinite",
                            }}
                          />
                        )}
                      </Group>
                      <Text fw={600} size="md" c="gray.2">
                        {item.title}
                      </Text>
                      <Stack gap="xs">
                        {item.items.map((listItem, itemIndex) => (
                          <Group key={itemIndex} gap="xs" align="center">
                            <Box
                              style={{
                                width: rem(8),
                                height: rem(8),
                                borderRadius: "50%",
                                backgroundColor: colors.dot,
                              }}
                            />
                            <Text size="sm" c="gray.3">
                              {listItem}
                            </Text>
                          </Group>
                        ))}
                      </Stack>
                    </Stack>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </section>
  );
}
