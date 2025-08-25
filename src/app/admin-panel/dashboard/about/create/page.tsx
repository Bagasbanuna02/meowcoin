"use client";

import { ActionIcon, Button, Stack, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AboutCreate() {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async () => {
    const res = await fetch("/api/about", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.error) {
      return notifications.show({
        title: "Wrong credentials",
        message: result.error,
        color: "red",
      });
    }

    notifications.show({
      title: "Success",
      message: "User signed in successfully",
      color: "green",
    });

    router.back()
  };

  return (
    <>
      <Stack>
        <ActionIcon onClick={() => router.back()}>
          <IconArrowLeft />
        </ActionIcon>

        <TextInput
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <TextInput
          label="Deskripsi"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </>
  );
}
