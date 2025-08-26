"use client";

import {
  Button,
  Group,
  Loader,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Data {
  id: string;
  title: string;
  description: string;
}

export default function About() {
  const router = useRouter();
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    onLoadData();
  }, []);

  async function onLoadData() {
    const res = await fetch("/api/about");
    const result = await res.json();
    console.log(result);
    setData(result.data);
  }

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/about/${id}`, {
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
  };

  // const handleSubmit = async () => {
  //   const res = await fetch("/api/about", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(update),
  //   });

  //   const result = await res.json();
  //   if (result.error) {
  //     return notifications.show({
  //       title: "Wrong credentials",
  //       message: result.error,
  //       color: "red",
  //     });
  //   }

  //   notifications.show({
  //     title: "Success",
  //     message: "User signed in successfully",
  //     color: "green",
  //   });
  //   onLoadData();
  // };

  return (
    <>
      <Stack>
        <Paper withBorder p={"md"}>
          <Stack>
            <Group justify="space-between">
              <Title order={4}>About Section</Title>
              <Button
                onClick={() => router.push("/admin-panel/dashboard/about/create")}
              >
                Tambah
              </Button>
            </Group>
          </Stack>
        </Paper>

        {!data ? (
          <Loader color="yellow" />
        ) : (
          <SimpleGrid cols={2}>
            {data?.map((item, index) => (
              <Paper withBorder p={"md"} key={index}>
                <Stack gap={"xs"}>
                  <Text>Title: {item.title}</Text>
                  <Text>
                    Deskripsi: {item.description || <Loader size="sm" />}
                  </Text>
                </Stack>
                <Group mt={"lg"}>
                  <Button
                    justify="center"
                    onClick={() =>
                      router.push(`/admin-panel/dashboard/about/${item.id}`)
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    justify="center"
                    bg={"red"}
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </Button>
                </Group>
              </Paper>
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </>
  );
}
