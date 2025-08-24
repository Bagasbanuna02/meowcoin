/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Loader, Paper, Stack, Text, Title } from "@mantine/core";
import _ from "lodash";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [dataHero, setDataHero] = useState({
    subtitle: "",
    description: "",
    link: "",
  });

  const [dataAbout, setDataAbout] = useState<any[]>([]);

  const [dataCommunity, setDataCommunity] = useState<any[]>([]);

  useEffect(() => {
    onLoadHero();
    onLoadAbout();
    onLoadCommunity();
  }, []);

  async function onLoadHero() {
    const res = await fetch("/api/hero");
    const result = await res.json();
    setDataHero({
      subtitle: result?.data?.subtitle,
      description: result?.data?.description,
      link: result?.data?.link,
    });
  }

  async function onLoadAbout() {
    const res = await fetch("/api/about");
    const result = await res.json();
    setDataAbout(result?.data);
  }

  async function onLoadCommunity() {
    const res = await fetch("/api/community");
    const result = await res.json();
    setDataCommunity(result?.data);
  }

  return (
    <>
      <Stack>
        <Paper withBorder p={"md"}>
          <Stack>
            <Title order={4}>Hero Section</Title>

            <Stack gap={0}>
              <Text>Sub title:</Text>
              <Text>{dataHero.subtitle || <Loader color="yellow" />}</Text>
            </Stack>

            <Stack gap={0}>
              <Text>Deskripsi:</Text>
              <Text>{dataHero.description || <Loader color="yellow" />}</Text>
            </Stack>

            <Stack gap={0}>
              <Text>Link buy now:</Text>
              <Text>{dataHero.link || <Loader color="yellow" />}</Text>
            </Stack>
          </Stack>
        </Paper>

        <Paper withBorder p={"md"}>
          <Stack>
            <Title order={4}>About Section</Title>

            {_.isEmpty(dataAbout) ? (
              <Loader color="yellow" />
            ) : (
              dataAbout?.map((item, index) => (
                <Paper withBorder p={"md"} key={index}>
                  <Stack gap={0}>
                    <Text>Title: {item.title}</Text>
                    <Text>
                      Deskripsi: {item.description || <Loader color="yellow" />}
                    </Text>
                  </Stack>
                </Paper>
              ))
            )}
          </Stack>
        </Paper>

        <Paper withBorder p={"md"}>
          <Stack>
            <Title order={4}>Community Section</Title>

            {_.isEmpty(dataCommunity) ? (
              <Loader color="yellow" />
            ) : (
              dataCommunity?.map((item, index) => (
                <Paper withBorder p={"md"} key={index}>
                  <Stack gap={0}>
                    <Text>Name: {item.name}</Text>
                    <Text>Link: {item?.link}</Text>
                    <Text>Deskripsi: {item?.description}</Text>
                    <Text>Total: {item?.total}</Text>
                  </Stack>
                </Paper>
              ))
            )}
          </Stack>
        </Paper>
      </Stack>
    </>
  );
}
