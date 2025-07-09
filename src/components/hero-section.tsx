/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState, useEffect } from "react";

export function HeroSection() {
  const theme = useMantineTheme();
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section id="hero">
      <Box size="xl" py={matches ? rem(120) : rem(60)} mb={matches ? rem(120) : rem(0)}>
        <Grid align="center" grow>
          <Grid.Col
            span={{ base: 12, lg: matches ? 6 : 6, md: matches ? 6 : 6 }}
          >
            <Stack gap="xl" align="center">
              <Stack gap="md">
                <Title
                  order={1}
                  size={matches ? rem(72) : rem(45)}
                  c="white"
                  lh={1.1}
                >
                  MEOWCOIN
                </Title>
                <Title
                  order={2}
                  size={matches ? rem(25) : rem(28)}
                  c={theme.colors.orange[4]}
                  fw={700}
                >
                  THE FUTURE OF MEME COINS
                </Title>
                <Text
                  size={matches ? "md" : "lg"}
                  c="gray.2"
                  maw={matches ? rem(300) : rem(500)}
                >
                  A community-driven meme token that loves cat and pawsitively changes the crypto world forever.
                </Text>
              </Stack>

              <Group gap="md" wrap="nowrap">
                <Button
                  size={matches ? "md" : "lg"}
                  radius="xl"
                  color="orange"
                  onClick={() =>
                    document
                      .getElementById("how-to-buy")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  BUY NOW
                </Button>
                <Button
                  size={matches ? "md" : "lg"}
                  radius="xl"
                  variant="outline"
                  color="gray.0"
                  onClick={() =>
                    document
                      .getElementById("chart")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  VIEW CHART
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, lg: 6, md: 6 }}
            mt={matches ? rem(100) : rem(0)}

            // ta={{ base: "center", lg: "right" }}
          >
            <Stack align="center">
              <Box
                style={{
                  width: matches ? rem(200) : rem(320),
                  height: matches ? rem(200) : rem(320),
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    fit="contain"
                    bg={"rgba(67, 14, 107, 0.8)"}
                    style={{
                      height: "auto",
                      width: !matches ? rem(300) : rem(400),
                    }}
                    radius={"50%"}
                    alt="Hero"
                    src={"/assets/image-logo.png"}
                  />
                </Box>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </section>
  );
}

