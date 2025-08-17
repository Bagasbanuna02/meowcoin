import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export { GET, POST };

async function GET() {
  const data = await prisma.communitySection.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: data,
  });
}

async function POST(request: Request) {
  const body = await request.json();
  const { name, link, description, total } = body;

  if (!name || !link || !description || !total) {
    return NextResponse.json(
      { error: "Missing name, link, description, or total" },
      { status: 400 }
    );
  }

  const communitySection = await prisma.communitySection.create({
    data: {
      name,
      link,
      description,
      total,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: communitySection,
  });
}
