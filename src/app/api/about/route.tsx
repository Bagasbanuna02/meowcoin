import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export { GET, POST };

async function GET() {
  const data = await prisma.aboutSection.findFirst();

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: data,
  });
}

async function POST(request: Request) {
  const body = await request.json();
  const { description, card1, card2, card3, card4 } = body;

  if (!description || !card1 || !card2 || !card3 || !card4) {
    return NextResponse.json(
      { error: "Missing description, card1, card2, card3, or card4" },
      { status: 400 }
    );
  }

  const aboutSection = await prisma.aboutSection.upsert({
    where: {
      id: "1",
    },
    create: {
      id: "1",
      description,
      card1,
      card2,
      card3,
      card4,
    },
    update: {
      description,
      card1,
      card2,
      card3,
      card4,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Berhasil",
    data: aboutSection,
  });
}
