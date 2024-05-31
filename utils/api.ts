export const fetchRecordings = async () => {
  try {
    const response = await fetch('api/recordings');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Recordings', data);
    // setRecordings(data.recordings);

    return data;
  } catch (error) {
    console.error('Error fetching recordings:', error);
    return error;
  }
};

export const saveAudio = async (audioBlob: Blob, name: string) => {
  const formData = new FormData();
  formData.append('audio', audioBlob, 'recording.webm');
  formData.append('name', name);

  const response = await fetch('/api/recordings', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
