'use client';

import { useState, useEffect, useRef } from 'react';
import { saveAudio, getAudio } from '@/utils/db';

const AudioRecorder = () => {
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );

  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const audioChunksRef = useRef<Blob[]>([]);

  const [isRecording, setIsRecording] = useState(false);
  const [audioKey, setAudioKey] = useState<any>(null);

  useEffect(() => {
    // Request access to the microphone
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        console.log(stream);

        setAudioStream(stream);
      })
      .catch((err) => {
        throw new Error('Error accessing media device', err);
      });

    return () => {
      // Clean up the stream
      if (audioStream) {
        audioStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (audioKey) {
      loadAudio(audioKey);
    }
  }, [audioKey]);

  useEffect(() => {
    console.log('audioChunks', audioChunks);
  }, [audioChunks]);

  const startRecording = () => {
    if (audioStream) {
      const recorder = new MediaRecorder(audioStream);
      recorder.ondataavailable = (e) => {
        setAudioChunks((prev) => {
          const newAudioChunks = [...prev, e.data];
          audioChunksRef.current = newAudioChunks;
          return newAudioChunks;
        });
        console.log('Data chunk added', e.data);
      };
      recorder.onstop = handleStopRecording;
      recorder.start(1000);
      setMediaRecorder(recorder);
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleStopRecording = () => {
    console.log('handleStopRecording called');
    console.log(audioChunksRef.current);
    const audioBlob: Blob | MediaSource = new Blob(audioChunksRef.current, {
      type: 'audio/webm;codecs=opus',
    });
    // Handle the blob (e.g., saving it, sending it to a server)
    // For demonstration, we'll log it to the console
    console.log(audioBlob);

    saveAudio(audioBlob)
      .then((key) => {
        setAudioKey(key);
        loadAudio(key);
      })
      .catch((error) => console.error('Error saving audio', error));
    setAudioChunks([]);
  };

  const loadAudio = (key: any) => {
    getAudio(key)
      .then((audioBlob) => {
        const audioUrl = URL.createObjectURL(audioBlob as Blob | MediaSource);
        console.log('audioUrl');
        console.log(audioUrl);
        const audioElement = document.querySelector('audio');
        if (audioElement) {
          audioElement.src = audioUrl;
          audioElement.load();
        }
      })
      .catch((error) => console.error('Error loading audio', error));
  };

  return (
    <article className="flex p-20 flex-col items-center justify-evenly">
      <p className="text-xl2">Recorder</p>
      <audio controls></audio>
      <button
        className="p-2 uppercase font-semibold bg-indigo-500 hover:opacity-50 my-4 rounded disabled:bg-gray-300 disabled:opacity-50"
        onClick={startRecording}
        disabled={isRecording}
      >
        Record
      </button>
      <button
        className="p-2 uppercase font-semibold bg-rose-500 hover:opacity-50 my-4 rounded disabled:bg-gray-300 disabled:opacity-50"
        onClick={stopRecording}
        disabled={!isRecording}
      >
        Stop
      </button>
    </article>
  );
};

export default AudioRecorder;
