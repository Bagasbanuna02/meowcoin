"use client";

import { Button, Paper, Stack, Text, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

export default function About() {
  const [data, setData] = useState({
    description: "",
    card1: "",
    card2: "",
    card3: "",
    card4: "",
  });

  const [update, setUpdate] = useState({
    description: "",
    card1: "",
    card2: "",
    card3: "",
    card4: "",
  });

  useEffect(() => {
    onLoadData();
  }, []);

  async function onLoadData() {
    const res = await fetch("/api/about");
    const result = await res.json();
    console.log("data:", result.data);
    setData({
      description: result?.data?.description,
      card1: result?.data?.card1,
      card2: result?.data?.card2,
      card3: result?.data?.card3,
      card4: result?.data?.card4,
    });
  }

  const handleSubmit = async () => {
    const res = await fetch("/api/about", {
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

  const listData = [
    {
      title: "Deskripsi",
      value: data.description,
    },
    {
      title: "Card 1",
      value: data.card1,
    },
    {
      title: "Card 2",
      value: data.card2,
    },
    {
      title: "Card 3",
      value: data.card3,
    },
    {
      title: "Card 4",
      value: data.card4,
    },
  ];

  return (
    <>
      <Stack>
        <Paper withBorder p={"md"}>
          <Stack>
            <Title order={4}>About Section</Title>

            {listData.map((item, index) => (
              <Stack gap={0} key={index}>
                <Text>{item.title} :</Text>
                <Text>{item.value}</Text>
              </Stack>
            ))}
          </Stack>
        </Paper>

        <TextInput
          label="Deskripsi"
          value={update.description}
          onChange={(e) =>
            setUpdate({ ...update, description: e.target.value })
          }
        />
        <TextInput
          label="Card 1"
          value={update.card1}
          onChange={(e) => setUpdate({ ...update, card1: e.target.value })}
        />
        <TextInput
          label="Card 2"
          value={update.card2}
          onChange={(e) => setUpdate({ ...update, card2: e.target.value })}
        />
        <TextInput
          label="Card 3"
          value={update.card3}
          onChange={(e) => setUpdate({ ...update, card3: e.target.value })}
        />
        <TextInput
          label="Card 4"
          value={update.card4}
          onChange={(e) => setUpdate({ ...update, card4: e.target.value })}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </>
  );
}
