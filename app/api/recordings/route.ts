import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const audioFile = data.get('audio') as Blob;
    const name = data.get('name') as string;

    if (!audioFile || !name) {
      return NextResponse.json(
        { success: false, error: 'Invalid data' },
        { status: 400 }
      );
    }

    const bytes = await audioFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const newRecording = await prisma.audioRecording.create({
      data: {
        name,
        audioData: buffer,
      },
    });

    return NextResponse.json({ success: true, newRecording }, { status: 201 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const recordings = await prisma.audioRecording.findMany();
    return NextResponse.json({ success: true, recordings }, { status: 200 });
  } catch (error) {
    console.error('Error recieving recordings', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
};
