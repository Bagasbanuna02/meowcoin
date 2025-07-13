"use client";

import {
  Button,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Admin() {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    const res = await fetch("/api/user", {
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
    router.push("/admin/dashboard");
  };
  return (
    <Stack align="center" justify="center" h={"100vh"} bg={"black"}>
      <Paper withBorder p={"lg"} radius="md">
        <Stack>
          <Title order={2} ta="center">
            Admin Panel
          </Title>
          <form onSubmit={handleSubmit}>
            <Stack>
              <TextInput
                placeholder="Username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                required
              />

              <PasswordInput
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
              <Button type="submit">Sign In</Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Stack>
  );
}
