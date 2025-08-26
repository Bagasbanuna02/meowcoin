import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export { GET, POST };

async function GET() {
  const data = await prisma.aboutSection.findMany();

  return NextResponse.json({
    status: 200,
    message: "Berhasil mengambil data about",
    data: data,
  });
}

async function POST(request: Request) {
  const body = await request.json();
  const { title, description } = body;

  if (!title || !description) {
    return NextResponse.json(
      { error: "Missing title or description" },
      { status: 400 }
    );
  }

  const aboutSection = await prisma.aboutSection.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: aboutSection,
  });
}

