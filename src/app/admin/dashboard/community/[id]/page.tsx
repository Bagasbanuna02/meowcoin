/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ActionIcon, Button, Stack, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconArrowLeft } from "@tabler/icons-react";
import { result } from "lodash";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CommunityEdit() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState({
    id: "",
    name: "",
    link: "",
    description: "",
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/community/${id}`);
      const result = await res.json();
      setData({
        id: result.data.id,
        name: result.data.name,
        link: result.data.link,
        description: result.data.description,
        total: result.data.total,
      });
    };
    fetchData();
  }, [id]);

  const handleSubmit = async () => {
    const res = await fetch(`/api/community/${id}`, {
      method: "PUT",
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

    router.back();
  };
  

  return (
    <>
      <Stack>
        <ActionIcon component={Link} href={"/admin/dashboard/community"}>
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

        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Update
        </Button>
      </Stack>
    </>
  );
}
