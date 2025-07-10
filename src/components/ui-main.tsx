/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  AppShell,
  Box,
  Button,
  Stack,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { AboutSection } from "./about-section";
import { ChartSection } from "./chart-section";
import { CommunitySection } from "./community-section";
import { Footer } from "./footer-section";
import { Header } from "./header-section";
import { HeroSection } from "./hero-section";
import { HowToBuySection } from "./how-to-buy-section";
import { RoadmapSection } from "./road-map-section";

import dynamic from "next/dynamic";
import { MobileNav } from "./mobile-nav-section";

const TradingViewWidget = dynamic(() => import("./view-chart"), { ssr: false });

export default function MeowcoinLanding() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
      styles={{
        main: {
          background: `linear-gradient(135deg, ${theme.colors.violet[9]} 0%, ${theme.colors.violet[7]} 50%, ${theme.colors.indigo[7]} 100%)`,
          minHeight: "100vh",
        },
      }}
    >
      <AppShell.Header
        style={{
          backgroundColor: "rgba(67, 14, 107, 0.8)",
          borderBottom: "none",
        }}
      >
        <Header opened={opened} setOpened={setOpened} />
      </AppShell.Header>

      <AppShell.Navbar p="md" style={{ backgroundColor: theme.colors.dark[8] }}>
        <MobileNav setOpened={setOpened} />
      </AppShell.Navbar>

      <AppShell.Main>
        {/* Background decorative elements */}
        <BackgroundDecorative />

        <Box style={{ position: "relative", zIndex: 1 }}>
          <HeroSection />
          <TradingViewWidget
            symbol="CRYPTOCAP:SOL"
            height={700}
            interval="15"
            theme="dark"
          />
          {/* <ChartSection /> */}
          <AboutSection />
          {/* <HowToBuySection /> */}
          {/* <RoadmapSection />  */}
          <CommunitySection />
          <Footer />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

function BackgroundDecorative() {
  const theme = useMantineTheme();
  return (
    <>
      <Box
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: rem(80),
            left: rem(40),
            width: rem(128),
            height: rem(128),
            borderRadius: "50%",
            backgroundColor: theme.colors.violet[6],
            filter: "blur(40px)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            top: rem(160),
            right: rem(80),
            width: rem(96),
            height: rem(96),
            borderRadius: "50%",
            backgroundColor: theme.colors.indigo[6],
            filter: "blur(40px)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            bottom: rem(80),
            left: rem(80),
            width: rem(160),
            height: rem(160),
            borderRadius: "50%",
            backgroundColor: theme.colors.violet[7],
            filter: "blur(40px)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            bottom: rem(160),
            right: rem(40),
            width: rem(112),
            height: rem(112),
            borderRadius: "50%",
            backgroundColor: theme.colors.violet[7],
            filter: "blur(40px)",
          }}
        />
      </Box>
    </>
  );
}


