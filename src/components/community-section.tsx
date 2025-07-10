import { motion } from "framer-motion";
import {
  useMantineTheme,
  Container,
  rem,
  Stack,
  Title,
  SimpleGrid,
  Card,
  Paper,
  Button,
  Text,
} from "@mantine/core";

export function CommunitySection() {
  const theme = useMantineTheme();

  const socialPlatforms = [
    {
      name: "Twitter",
      icon: "🐦",
      color: "#1da1f2",
      members: "25K+",
      description: "Follow us for real-time updates and community news",
    },
    {
      name: "Discord",
      icon: "💬",
      color: "#1da1f2",
      members: "15K+",
      description: "Join our active community for discussions and support",
    },
    {
      name: "Telegram",
      icon: "📱",
      color: "#1da1f2",
      members: "30K+",
      description: "Get instant updates and chat with the community",
    },
    // {
    //   name: "GitHub",
    //   icon: "⚡",
    //   color: "#1da1f2",
    //   members: "500+",
    //   description: "Explore our open-source code and contribute",
    // },
  ];

  return (
    <section id="community">
      <Container size="xl" py={rem(80)}>
        <Stack gap="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Stack gap="xs" ta="center" maw={rem(800)} mx="auto">
              <Title order={2} size={rem(42)} c="white">
                Join Our Community
              </Title>
              <Text size="lg" c="gray.3">
                Connect with fellow MEOWCOIN enthusiasts, stay updated on the
                latest news, and be part of our growing family.
              </Text>
            </Stack>
          </motion.div>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  withBorder
                  radius="md"
                  padding="lg"
                  style={{
                    borderColor: platform.color,
                    backgroundColor: `${platform.color}22`,
                    cursor: "pointer",
                    transition: "transform 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Stack gap="md" align="center">
                    <Paper
                      w={rem(64)}
                      h={rem(64)}
                      radius="xl"
                      style={{
                        backgroundColor: platform.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text size={rem(24)}>{platform.icon}</Text>
                    </Paper>
                    <Text fw={600} size="lg" c="white">
                      {platform.name}
                    </Text>
                    <Text c="gray.3" ta="center">
                      {platform.description}
                    </Text>
                    <Stack gap={0} align="center">
                      <Text
                        size="xl"
                        fw={700}
                        style={{ color: platform.color }}
                      >
                        {platform.members}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {platform.name === "GitHub"
                          ? "Stars"
                          : platform.name === "Twitter"
                          ? "Followers"
                          : "Members"}
                      </Text>
                    </Stack>
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
                  Ready to Join the Revolution?
                </Title>
                <Text c="white" opacity={0.9} maw={rem(600)} ta="center">
                  Be part of the MEOWCOIN community and help shape the future of
                  meme coins together.
                </Text>
                <Button
                  size="lg"
                  radius="xl"
                  color="white"
                  c={theme.colors.orange[6]}
                >
                  Get Started Now
                </Button>
              </Stack>
            </Paper>
          </motion.div>
        </Stack>
      </Container>
    </section>
  );
}
