'use client'

import { Paper, Stack, Text, Title } from "@mantine/core";

export default function Hero() {
    return (
        <>
            <Stack>
                <Paper withBorder p={"md"}>
                    <Stack>
                        <Title order={4}>Hero Section</Title>
                        <Text>Deskripsi hero section</Text>
                    </Stack>
                </Paper>
            </Stack>
        </>
    );
}