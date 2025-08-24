/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Button,
  Group,
  Loader,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import _ from "lodash";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Community() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    onLoadData();
  }, []);

  async function onLoadData() {
    const res = await fetch("/api/community");
    const result = await res.json();
    setData(result?.data);
  }

  async function handleDelete(id: string) {
    const res = await fetch(`/api/community/${id}`, {
      method: "DELETE",
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
      message: "Deleted successfully",
      color: "green",
    });

    onLoadData();
  }

  return (
    <>
      <Stack>
        <Paper withBorder p={"md"}>
          <Stack>
            <Group justify="space-between">
              <Title order={4}>Community Section</Title>
              <Button
                component={Link}
                href={"/admin/dashboard/community/create"}
              >
                Tambah
              </Button>
            </Group>
          </Stack>
        </Paper>

        {_.isEmpty(data) ? (
          <Loader color="yellow" />
        ) : (
          data?.map((item, index) => (
            <Paper withBorder p={"md"} key={index}>
              <Stack gap={0}>
                <Text>Name: {item.name}</Text>
                <Text>Link: {item.link}</Text>
                <Text>Deskripsi: {item.description}</Text>
                <Text>Total: {item.total}</Text>
              </Stack>

              <Group mt={"md"}>
                <Button
                  component={Link}
                  href={`/admin/dashboard/community/${item.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="filled"
                  color="red"
                  onClick={() => handleDelete(item.id)}
                >
                  Hapus
                </Button>
              </Group>
            </Paper>
          ))
        )}
      </Stack>
    </>
  );
}
