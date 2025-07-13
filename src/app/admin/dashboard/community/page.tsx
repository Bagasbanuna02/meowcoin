'use client'

import { Paper, Stack, Text, Title } from "@mantine/core";

export default function Community() {
    return (
        <>
            <Stack>
                <Paper withBorder p={"md"}>
                    <Stack>
                        <Title order={4}>Community Section</Title>
                        <Text>Deskripsi community section</Text>
                    </Stack>
                </Paper>
            </Stack>
        </>
    );
}
