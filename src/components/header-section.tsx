import {
  Burger,
  Button,
  Container,
  Group,
  Paper,
  rem,
  Text,
  useMantineTheme,
} from "@mantine/core";

export function Header({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (value: boolean) => void;
}) {
  const theme = useMantineTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpened(false);
  };

  return (
    <Container size="xl" h="100%" py={rem(5)}>
      <Group justify="space-between" h="100%">
        {/* Logo */}
        <Group
          gap="xs"
          onClick={() => scrollToSection("hero")}
          style={{ cursor: "pointer" }}
        >
          <Paper
            w={rem(50)}
            h={rem(50)}
            radius="xl"
            bg={theme.colors.orange[5]}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text size="xl">🐱</Text>
          </Paper>
          <Text size="xl" fw={700} c="white">
            MEOWCOIN
          </Text>
        </Group>

        {/* Desktop Navigation */}
        <Group gap="xl" visibleFrom="sm">
          {["chart", "about", "community"].map((section) => (
            <Button
              key={section}
              variant="subtle"
              color="gray.0"
              onClick={() => scrollToSection(section)}
              styles={{
                root: {
                  textTransform: "uppercase",
                  fontWeight: 500,
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: theme.colors.orange[4],
                  },
                },
              }}
            >
              {section.replace("-", " ")}
            </Button>
          ))}
        </Group>

        {/* Mobile Menu Button */}
        <Burger
          opened={opened}
          onClick={() => setOpened(!opened)}
          hiddenFrom="sm"
          color="white"
        />
      </Group>
    </Container>
  );
}
