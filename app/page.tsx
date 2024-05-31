import AudioRecorder from '../components/AudioRecorder/AudioRecorder';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        tuneshed
      </h1>
      <div>
        <AudioRecorder />
      </div>
    </main>
  );
}
