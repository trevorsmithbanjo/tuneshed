'use client';

import { useState, useEffect, useRef } from 'react';
import { fetchRecordings, saveAudio } from '@/utils/api';

const AudioRecorder = () => {
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );

  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const audioChunksRef = useRef<Blob[]>([]);

  const [isRecording, setIsRecording] = useState(false);

  const [recordingName, setRecordingName] = useState('');
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    // Request access to the microphone
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
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
    fetchRecordings()
      .then((data) => setRecordings(data.data))
      .catch((error) => console.error(error));
  }, []);

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

    saveAudio(audioBlob, recordingName)
      .then((response) => {
        console.log('Recording saved', response);
        // TODO: Display to user that recording was saved
      })
      .catch((error) => {
        console.error('Error saving audio', error);
        // TODO: Display to user there was an error
      });

    setAudioChunks([]);
  };

  // const loadAudio = (key: any) => {
  //   getAudio(key)
  //     .then((audioBlob) => {
  //       const audioUrl = URL.createObjectURL(audioBlob as Blob | MediaSource);
  //       console.log('audioUrl');
  //       console.log(audioUrl);
  //       const audioElement = document.querySelector('audio');
  //       if (audioElement) {
  //         audioElement.src = audioUrl;
  //         audioElement.load();
  //       }
  //     })
  //     .catch((error) => console.error('Error loading audio', error));
  // };

  // useEffect(() => {
  //   console.log(recordingName);
  // }, [recordingName]);

  return (
    <article className="flex p-20 flex-col items-center justify-evenly">
      <p className="text-xl2">Recorder</p>
      <form className="my-12">
        <label className="mr-6">Name</label>
        <input
          className="text-black min-h-20 p-1"
          type="text"
          name="name"
          value={recordingName}
          onChange={(e) => setRecordingName(e.target.value)}
        />
      </form>
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
