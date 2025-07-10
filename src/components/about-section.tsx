import {
  useMantineTheme,
  Box,
  rem,
  Container,
  Stack,
  Title,
  SimpleGrid,
  Card,
  Paper,
  Text,
} from "@mantine/core";
import { motion } from "framer-motion";

export function AboutSection() {
  const theme = useMantineTheme();

  const features = [
    {
      icon: "❤️",
      title: "Community First",
      description:
        "Built by the community, for the community. Every decision is made together.",
    },
    {
      icon: "🛡️",
      title: "Secure & Safe",
      description:
        "Audited smart contracts and transparent tokenomics for your peace of mind.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Built on efficient blockchain technology for instant transactions.",
    },
    {
      icon: "👥",
      title: "Growing Family",
      description:
        "Join thousands of cat lovers and crypto enthusiasts worldwide.",
    },
  ];

  return (
    <section id="about">
      <Box
        py={rem(80)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Container size="xl">
          <Stack gap="xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Stack gap="xs" ta="center" maw={rem(800)} mx="auto">
                <Title order={2} size={rem(42)} c="white">
                  About MEOWCOIN
                </Title>
                <Text size="lg" c="gray.3">
                  {
                    "MEOWCOIN is more than just a meme token - it's a revolution in the crypto space that combines the power of community with the charm of our feline friends."
                  }
                </Text>
              </Stack>
            </motion.div>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Card
                    withBorder
                    radius="md"
                    padding="lg"
                    style={{
                      borderColor: theme.colors.violet[6],
                      backgroundColor: theme.colors.dark[8],
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
                        <Text size={rem(24)}>{feature.icon}</Text>
                      </Paper>
                      <Text fw={600} size="lg" c="white">
                        {feature.title}
                      </Text>
                      <Text c="gray.3" ta="center">
                        {feature.description}
                      </Text>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper
                p="xl"
                radius="lg"
                mx="auto"
                maw={rem(900)}
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.orange[5]} 0%, ${theme.colors.orange[7]} 100%)`,
                }}
              >
                <Stack gap="md" align="center">
                  <Title order={3} c="white">
                    Tokenomics
                  </Title>
                  <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" w="100%">
                    <Stack gap="xs" align="center">
                      <Text size={rem(32)} fw={700} c="white">
                        1B
                      </Text>
                      <Text c="white" opacity={0.8}>
                        Total Supply
                      </Text>
                    </Stack>
                    <Stack gap="xs" align="center">
                      <Text size={rem(32)} fw={700} c="white">
                        5%
                      </Text>
                      <Text c="white" opacity={0.8}>
                        Marketing
                      </Text>
                    </Stack>
                    <Stack gap="xs" align="center">
                      <Text size={rem(32)} fw={700} c="white">
                        95%
                      </Text>
                      <Text c="white" opacity={0.8}>
                        Community
                      </Text>
                    </Stack>
                  </SimpleGrid>
                </Stack>
              </Paper>
            </motion.div>
          </Stack>
        </Container>
      </Box>
    </section>
  );
}
