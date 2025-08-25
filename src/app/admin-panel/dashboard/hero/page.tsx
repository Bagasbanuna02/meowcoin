"use client";

import {
  Button,
  Loader,
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
    setData({
      subtitle: result?.data?.subtitle,
      description: result?.data?.description,
      link: result?.data?.link,
    });
  }

  const handleSubmit = async () => {
    const fixData = {
      subtitle: update.subtitle || data.subtitle,
      description: update.description || data.description,
      link: update.link || data.link,
    };

    const res = await fetch("/api/hero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fixData),
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
              <Text>{data.subtitle || <Loader size="sm" />}</Text>
            </Stack>

            <Stack gap={0}>
              <Text>Deskripsi:</Text>
              <Text>{data.description || <Loader size="sm" />}</Text>
            </Stack>

            <Stack gap={0}>
              <Text>Link buy now:</Text>
              <Text>{data.link || <Loader size="sm" />}</Text>
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

          <Button
            disabled={
              update.subtitle === "" &&
              update.description === "" &&
              update.link === ""
            }
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
