import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export { GET, POST };

async function GET() {
  const data = await prisma.heroSection.findFirst();

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: data,
  });
}

async function POST(request: Request) {
  const body = await request.json();
  const { subtitle, description, link } = body;

  // if (!subtitle || !description || !link) {
  //   return NextResponse.json(
  //     { error: "Missing subtitle, description, or link" },
  //     { status: 400 }
  //   );
  // }

  

  const heroSection = await prisma.heroSection.upsert({
    where: {
      id: "1",
    },
    create: {
      id: "1",
      subtitle,
      description,
      link,
    },
    update: {
      subtitle,
      description,
      link,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: heroSection,
  });
}
