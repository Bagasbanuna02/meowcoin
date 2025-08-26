import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export { GET, PUT, DELETE };

async function GET(request: Request) {
  const id = request.url.split("/").pop();

  const data = await prisma.aboutSection.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil mengambil data about",
    data: data,
  });
}

async function PUT(request: Request) {
  const id = request.url.split("/").pop();
  const body = await request.json();
  const { title, description } = body;
  if (!title || !description) {
    return NextResponse.json(
      { error: "Missing title or description" },
      { status: 400 }
    );
  }

  const aboutSection = await prisma.aboutSection.update({
    where: {
      id: id,
    },
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

async function DELETE(request: Request) {
  const id = request.url.split("/").pop();

  const aboutSection = await prisma.aboutSection.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: aboutSection,
  });
}
