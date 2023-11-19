const dbName = 'audioDB';
const storeName = 'audioStore';

export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onerror = (event) => reject(event?.target?.error);
    request.onsuccess = (event) => resolve(event?.target?.result);
    request.onupgradeneeded = (event) => {
      const db = event?.target?.result;
      db.createObjectStore(storeName, { autoIncrement: true });
    };
  });
};

export const saveAudio = async (audioBlob: any) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.add(audioBlob);
    request.onsuccess = () => resolve(request.result); // Returns the key of the stored audio
    request.onerror = () => reject(request.error);
  });
};

export const getAudio = async (key: any) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};
