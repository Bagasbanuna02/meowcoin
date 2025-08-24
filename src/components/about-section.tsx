/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  Container,
  rem,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import { motion } from "framer-motion";

export function AboutSection({ dataAbout }: { dataAbout: any }) {
  const theme = useMantineTheme();

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
              {dataAbout.map((item: any, index: any) => (
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
                      height: 200,
                    }}
                  >
                    <Stack align="center">
                      <Text fw={600} size="lg" c="white">
                        {item.title}
                      </Text>
                      <ScrollArea style={{ height: 120 }}>
                        <Text c="gray.3" ta="center">
                          {item.description} Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Quae explicabo maxime
                          tenetur, eos earum eum. Eligendi veritatis voluptatum
                          reiciendis esse aliquid. Soluta nihil neque quis
                          reprehenderit ducimus laboriosam officia voluptates!
                        </Text>
                      </ScrollArea>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>

            {/* <motion.div
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
            </motion.div> */}
          </Stack>
        </Container>
      </Box>
    </section>
  );
}
