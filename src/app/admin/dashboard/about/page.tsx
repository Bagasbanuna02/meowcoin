'use client'

import { Paper, Stack, Text, Title } from "@mantine/core";

export default function About() {
    return (
        <>
            <Stack>
                <Paper withBorder p={"md"}>
                    <Stack>
                        <Title order={4}>About Section</Title>
                        <Text>Deskripsi about section</Text>
                    </Stack>
                </Paper>
            </Stack>
        </>
    );
}
