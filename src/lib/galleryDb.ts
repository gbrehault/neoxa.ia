export type GalleryItem = {
  id: string;
  src: string;
  prompt: string;
  createdAt: string;
};

const DB_NAME = "my-gallery";
const STORE_NAME = "images";
const DB_VERSION = 1;

const openDb = () =>
  new Promise<IDBDatabase>((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB indisponible"));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

const withStore = async <T>(
  mode: IDBTransactionMode,
  handler: (store: IDBObjectStore) => Promise<T>,
) => {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, mode);
  const store = tx.objectStore(STORE_NAME);
  const result = await handler(store);

  await new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });

  db.close();
  return result;
};

export const addGalleryItem = (item: GalleryItem) =>
  withStore("readwrite", (store) => {
    store.put(item);
    return Promise.resolve();
  });

export const listGalleryItems = () =>
  withStore("readonly", (store) => {
    return new Promise<GalleryItem[]>((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        const items = (request.result as GalleryItem[]) ?? [];
        items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        resolve(items);
      };
      request.onerror = () => reject(request.error);
    });
  });
