import { useMantineTheme, Box, rem, Container, Stack, Title, Paper, Text, Card, SimpleGrid } from "@mantine/core";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";

export function ChartSection() {
  const theme = useMantineTheme();

  // Mock price data for MEOWCOIN
  const priceData = [
    { time: "00:00", price: 0.000245, volume: 1200000 },
    { time: "04:00", price: 0.000267, volume: 1450000 },
    { time: "08:00", price: 0.000289, volume: 1680000 },
    { time: "12:00", price: 0.000298, volume: 1890000 },
    { time: "16:00", price: 0.000312, volume: 2100000 },
    { time: "20:00", price: 0.000298, volume: 1750000 },
    { time: "24:00", price: 0.000298, volume: 1650000 },
  ];

  return (
    <section id="chart">
      <Box py={rem(80)} style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} mt={rem(50)}>
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="xs" ta="center" maw={rem(800)} mx="auto">
              <Title order={2} size={rem(42)} c="white">
                MEOWCOIN Price Chart
              </Title>
              <Text size="lg" c="gray.3">
                {
                  "Track MEOWCOIN's performance with real-time price data and trading volume."
                }
              </Text>
            </Stack>

            {/* Price Chart Container */}
            <Paper
              p="md"
              radius="md"
              withBorder
              style={{
                height: rem(600),
                borderColor: theme.colors.violet[6],
                backgroundColor: theme.colors.dark[7],
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={theme.colors.violet[6]}
                  />
                  <XAxis
                    dataKey="time"
                    stroke={theme.colors.gray[4]}
                    fontSize={12}
                  />
                  <YAxis
                    stroke={theme.colors.gray[4]}
                    fontSize={12}
                    tickFormatter={(value) => `$${value.toFixed(6)}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.colors.dark[8],
                      border: `1px solid ${theme.colors.violet[6]}`,
                      borderRadius: "8px",
                      color: "white",
                    }}
                    formatter={(value: number, name: string) => [
                      name === "price"
                        ? `$${value.toFixed(6)}`
                        : value.toLocaleString(),
                      name === "price" ? "Price" : "Volume",
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={theme.colors.orange[5]}
                    strokeWidth={3}
                    dot={{ fill: theme.colors.orange[5], strokeWidth: 2, r: 4 }}
                    activeDot={{
                      r: 6,
                      stroke: theme.colors.orange[4],
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Paper>

            {/* Additional Price Info */}
            <PriceInfo />
          </Stack>
        </Container>
      </Box>
    </section>
  );
}

function PriceInfo() {
  const theme = useMantineTheme();

  return (
    <Stack gap="xl">
      {/* Price Info Cards */}
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        <Card
          withBorder
          radius="md"
          p="md"
          style={{
            borderColor: theme.colors.violet[6],
            backgroundColor: theme.colors.dark[7],
          }}
        >
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              Current Price
            </Text>
            <Text size="xl" fw={700} c="white">
              $0.000298
            </Text>
            <Text size="sm" c="teal.4">
              +4.5% (24h)
            </Text>
          </Stack>
        </Card>

        <Card
          withBorder
          radius="md"
          p="md"
          style={{
            borderColor: theme.colors.violet[6],
            backgroundColor: theme.colors.dark[7],
          }}
        >
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              Market Cap
            </Text>
            <Text size="xl" fw={700} c="white">
              $298M
            </Text>
            <Text size="sm" c={theme.colors.orange[4]}>
              Rank #156
            </Text>
          </Stack>
        </Card>

        <Card
          withBorder
          radius="md"
          p="md"
          style={{
            borderColor: theme.colors.violet[6],
            backgroundColor: theme.colors.dark[7],
          }}
        >
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              24h Volume
            </Text>
            <Text size="xl" fw={700} c="white">
              $45.2M
            </Text>
            <Text size="sm" c="teal.4">
              +23.5%
            </Text>
          </Stack>
        </Card>
      </SimpleGrid>

      {/* Trading Info */}
      <SimpleGrid cols={{ base: 2, md: 4 }} spacing="md">
        <Stack gap="xs" ta="center">
          <Text size="sm" c="dimmed">
            All Time High
          </Text>
          <Text fw={600} c="white">
            $0.000456
          </Text>
        </Stack>
        <Stack gap="xs" ta="center">
          <Text size="sm" c="dimmed">
            All Time Low
          </Text>
          <Text fw={600} c="white">
            $0.000012
          </Text>
        </Stack>
        <Stack gap="xs" ta="center">
          <Text size="sm" c="dimmed">
            Circulating Supply
          </Text>
          <Text fw={600} c="white">
            950M MEOW
          </Text>
        </Stack>
        <Stack gap="xs" ta="center">
          <Text size="sm" c="dimmed">
            Holders
          </Text>
          <Text fw={600} c="white">
            12,456
          </Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}