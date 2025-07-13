"use client";

import { Paper, Stack, Text, Title } from "@mantine/core";

export default function Dashboard() {
  return (
    <>
      <Stack>
        <Paper withBorder p={"md"}>
          <Stack>
            <Title order={4}>Hero Section</Title>

            <Stack gap={0}>
              <Text>Sub title:</Text>
              <Text>THE FUTURE OF MEME COINS</Text>
            </Stack>

            <Stack gap={0}>
              <Text>Deskripsi:</Text>
              <Text>
                A community-driven meme token that loves cat and pawsitively
                changes the crypto world forever.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text>Link buy now:</Text>
              <Text>https://google.com</Text>
            </Stack>
          </Stack>
        </Paper>

        <Paper withBorder p={"md"}>
          <Stack>
            <Title order={4}>About Section</Title>

            <Stack gap={0}>
              <Text>Deskripsi:</Text>
              <Text>
                {
                  "MEOWCOIN is more than just a meme token - it's a revolution in the crypto space that combines the power of community with the charm of our feline friends."
                }
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text>Card 1</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, totam harum odit dolor fugit vitae illo quod labore
                natus doloremque soluta, error eum impedit, veritatis aperiam
                aut facilis possimus ullam!
              </Text>
            </Stack>

            {Array.from({ length: 4 }).map((_, index) => (
              <Stack gap={0} key={index}>
                <Text>Card {index + 1}</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, totam harum odit dolor fugit vitae illo quod
                  labore natus doloremque soluta, error eum impedit, veritatis
                  aperiam aut facilis possimus ullam!
                </Text>
              </Stack>
            ))}
          </Stack>
        </Paper>

        <Paper withBorder p={"md"}>
          <Stack>
            <Title order={4}>Community Section</Title>

            <Stack gap={0}>
              <Text>Deskripsi:</Text>
              <Text>
                {
                  "Connect with fellow MEOWCOIN enthusiasts, stay updated on the latest news, and be part of our growing family."
                }
              </Text>
            </Stack>

            {Array.from({ length: 4 }).map((_, index) => (
              <Stack gap={0} key={index}>
                <Text>Card {index + 1}</Text>
                <Text>Name: Twitter</Text>
                <Text>Link: https://twitter.com/meowcoin</Text>
                <Text>
                  Deskripsi: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Reiciendis, totam harum odit dolor fugit vitae illo quod
                  labore natus doloremque soluta, error eum impedit, veritatis
                  aperiam aut facilis possimus ullam!
                </Text>
                <Text>Total: 100</Text>
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </>
  );
}
