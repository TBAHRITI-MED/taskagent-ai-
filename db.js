const DB_NAME = "TaskAgentDB";
const DB_VERSION = 1;

const openDB = () => new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("tasks")) db.createObjectStore("tasks", { keyPath: "id" });
        if (!db.objectStoreNames.contains("messages")) db.createObjectStore("messages", { keyPath: "ts" });
        if (!db.objectStoreNames.contains("settings")) db.createObjectStore("settings", { keyPath: "key" });
    };
});

const dbGet = async (store, key) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readonly");
        const req = tx.objectStore(store).get(key);
        req.onsuccess = () => resolve(req.result?.value ?? null);
        req.onerror = () => reject(req.error);
    });
};

const dbSet = async (store, key, value) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readwrite");
        const req = tx.objectStore(store).put({ key, value });
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
};

const dbGetAll = async (store) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readonly");
        const req = tx.objectStore(store).getAll();
        req.onsuccess = () => resolve(req.result.map(r => r.value));
        req.onerror = () => reject(req.error);
    });
};

const dbPut = async (store, value) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readwrite");
        const req = tx.objectStore(store).put(value);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
};

const dbDelete = async (store, key) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readwrite");
        const req = tx.objectStore(store).delete(key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
};

const dbClear = async (store) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readwrite");
        const req = tx.objectStore(store).clear();
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
};
