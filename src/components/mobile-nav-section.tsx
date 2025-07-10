import { Stack, Button } from "@mantine/core";

export function MobileNav({ setOpened }: { setOpened: (value: boolean) => void }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpened(false);
  };

  return (
    <Stack gap="md">
      {["chart", "about", "community"].map((section) => (
        <Button
          key={section}
          variant="subtle"
          color="gray.0"
          onClick={() => scrollToSection(section)}
          fullWidth
          styles={{
            root: {
              textTransform: "uppercase",
              fontWeight: 500,
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            },
          }}
        >
          {section.replace("-", " ")}
        </Button>
      ))}
    </Stack>
  );
}