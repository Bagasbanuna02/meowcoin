"use client";

import {
  Button,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function Hero() {
  const [data, setData] = useState({
    subtitle: "",
    description: "",
    link: "",
  });
  const [update, setUpdate] = useState({
    subtitle: "",
    description: "",
    link: "",
  });

  useEffect(() => {
    onLoadData();
  }, []);

  async function onLoadData() {
    const res = await fetch("/api/hero");
    const result = await res.json();
    console.log("data:", result.data);
    setData({
      subtitle: result?.data?.subtitle,
      description: result?.data?.description,
      link: result?.data?.link,
    });
  }

  const handleSubmit = async () => {
    const res = await fetch("/api/hero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
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
    onLoadData();
  };
  return (
    <>
      <Stack>
        <Paper withBorder p={"md"}>
          <Stack>
            <Title order={4}>Hero Section</Title>

            <Stack gap={0}>
              <Text>Sub title:</Text>
              <Text>{data.subtitle || ""}</Text>
            </Stack>

            <Stack gap={0}>
              <Text>Deskripsi:</Text>
              <Text>{data.description || ""}</Text>
            </Stack>

            <Stack gap={0}>
              <Text>Link buy now:</Text>
              <Text>{data.link || ""}</Text>
            </Stack>
          </Stack>
        </Paper>

        <Stack>
          <TextInput
            label="Subtitle"
            value={update.subtitle}
            onChange={(e) => setUpdate({ ...update, subtitle: e.target.value })}
          />
          <Textarea
            label="Description"
            value={update.description}
            onChange={(e) =>
              setUpdate({ ...update, description: e.target.value })
            }
          />
          <TextInput
            label="Link"
            value={update.link}
            onChange={(e) => setUpdate({ ...update, link: e.target.value })}
          />

          <Button onClick={handleSubmit}>Submit</Button>
        </Stack>
      </Stack>
    </>
  );
}
