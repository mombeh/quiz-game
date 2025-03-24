export function saveToStorage(key, value) {
    const val = JSON.stringify(value);
    sessionStorage.setItem(key, val);
};

export function getFromStorage(key) {
    const val = sessionStorage.getItem(key);
    if (!val) return null;

    try {
        const res = JSON.parse(val);
        return res;
    } catch {
        return null;
    }
};

export function removeFromStorage(key) {
    sessionStorage.removeItem(key);
}
