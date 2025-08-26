"use client";

import { ActionIcon, Button, Stack, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCommunity() {
  const [data, setData] = useState({
    name: "",
    link: "",
    description: "",
    total: 0,
  });

  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch("/api/community", {
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

    router.push("/admin-panel/dashboard/community");
  };

  return (
    <>
      <Stack>
        <ActionIcon component={Link} href={"/admin-panel/dashboard/community"}>
          <IconArrowLeft />
        </ActionIcon>

        <TextInput
          label="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <TextInput
          label="Link"
          value={data.link}
          onChange={(e) => setData({ ...data, link: e.target.value })}
        />

        <TextInput
          label="Description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <TextInput
          type="number"
          label="Total"
          value={data.total || ""}
          onChange={(e) => setData({ ...data, total: Number(e.target.value) })}
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </>
  );
}
