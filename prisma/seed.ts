/* eslint-disable prefer-const */
import prisma from "@/lib/prisma";
import hero from "../seeder/hero.json";
import about from "../seeder/about.json";
import community from "../seeder/community.json";
import user from "../seeder/user.json";

(async () => {
  console.log("start seeder >>");
  try {
    await seedUser();
    await seedHero();
    await seedAbout();
    await seedCommunity();
  } catch (error) {
    console.log("seeder gagal", error);
  }
})()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error("<< error seeder", e);
    process.exit(1);
  });

async function seedUser() {
  try {
    for (let i of user) {
      await prisma.user.upsert({
        where: {
          id: i.id,
        },
        create: {
          id: i.id,
          username: i.username,
          password: i.password,
          email: i.email,
        },
        update: {
          username: i.username,
          password: i.password,
          email: i.email,
        },
      });
    }
    console.log("seeder user berhasil");
  } catch (error) {
    console.log("seeder user gagal", error);
  }
}

async function seedHero() {
  try {
    for (let i of hero) {
      await prisma.heroSection.upsert({
        where: {
          id: i.id,
        },
        create: {
          id: i.id,
          subtitle: i.subtitle,
          description: i.description,
          link: i.link,
        },
        update: {
          subtitle: i.subtitle,
          description: i.description,
          link: i.link,
        },
      });
    }
    console.log("seeder hero berhasil");
  } catch (error) {
    console.log("seeder hero gagal", error);
  }
}

async function seedAbout() {
  try {
    for (let i of about) {
      await prisma.aboutSection.upsert({
        where: {
          id: i.id,
        },
        create: {
          id: i.id,
          title: i.title,
          description: i.description,
        },
        update: {
          title: i.title,
          description: i.description,
        },
      });
    }
    console.log("seeder about berhasil");
  } catch (error) {
    console.log("seeder about gagal", error);
  }
}

async function seedCommunity() {
  try {
    for (let i of community) {
      await prisma.communitySection.upsert({
        where: {
          id: i.id,
        },
        create: {
          id: i.id,
          name: i.name,
          link: i.link,
          description: i.description,
          total: i.total,
        },
        update: {
          name: i.name,
          link: i.link,
          description: i.description,
          total: i.total,
        },
      });
    }
    console.log("seeder community berhasil");
  } catch (error) {
    console.log("seeder community gagal", error);
  }
}
