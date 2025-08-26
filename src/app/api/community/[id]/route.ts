import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export { GET, PUT, DELETE };

async function GET(request: Request) {
  const id = request.url.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const data = await prisma.communitySection.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: data,
  });
}

async function PUT(request: Request) {
  const body = await request.json();
  const { id, name, link, description, total } = body;

  if (!id || !name || !link || !description || !total) {
    return NextResponse.json(
      { error: "Missing id, name, link, description, or total" },
      { status: 400 }
    );
  }


  const communitySection = await prisma.communitySection.update({
    where: {
      id: id,
    },
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

async function DELETE(request: Request) {
  const id = request.url.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const communitySection = await prisma.communitySection.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: communitySection,
  });
}
