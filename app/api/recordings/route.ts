import prisma from '@/utils/prisma';

export async function postAudio(
  req: { body: { name: any; audioData: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          id?: string;
          name?: string;
          audioData?: Buffer;
          createdAt?: Date;
          error?: string;
        }): void;
        new (): any;
      };
    };
  }
) {
  try {
    const { name, audioData } = req.body;

    const audioBuffer = Buffer.from(audioData, 'base64');

    const newRecording = await prisma.audioRecording.create({
      data: { name, audioData: audioBuffer },
    });
    res.status(200).json(newRecording);
  } catch (error) {
    console.error('Error saving audio', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
