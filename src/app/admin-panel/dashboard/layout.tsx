/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  AppShell,
  Avatar,
  Box,
  Burger,
  Group,
  Image,
  NavLink,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBubbleTextFilled,
  IconDashboard,
  IconImageInPicture,
  IconInfoCircle,
} from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(pathname);

  const listPage = [
    {
      label: "Dashboard",
      href: "/admin-panel/dashboard",
      icon: <IconDashboard size={25} />,
    },
    {
      label: "Hero",
      href: "/admin-panel/dashboard/hero",
      icon: <IconImageInPicture size={25} />,
    },
    {
      label: "About",
      href: "/admin-panel/dashboard/about",
      icon: <IconInfoCircle size={25} />,
    },
    {
      label: "Community",
      href: "/admin-panel/dashboard/community",
      icon: <IconBubbleTextFilled size={25} />,
    },
  ];

  const activePage = listPage.find((item) => item.href === pathname);

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 250, lg: 300 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header bg={"grape"}>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color="white"
          />
          <Box
            style={{
              cursor: "pointer",
              borderRadius: 50,
              border: "1px solid white",
              padding: 2,
            }}
            onClick={() => router.push("/")}
          >
            <Avatar bg={"grape"}>
              <Image
                src="/assets/logo.png"
                alt="Logo"
                w={30}
                h={30}
                fit="contain"
              />
            </Avatar>
          </Box>
          <Title
            order={4}
            ta="center"
            c={"white"}
            onClick={() => router.push("/")}
            style={{
              cursor: "pointer",
            }}
          >
            Meowcoin
          </Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack>
          {listPage.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              leftSection={item.icon}
              bg={activePage?.href === item.href ? "grape" : "transparent"}
              variant={activePage?.href === item.href ? "filled" : "default"}
              style={{
                borderRadius: 8,
              }}
            />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
