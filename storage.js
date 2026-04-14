const PREFIX = "app_";

export function save(key, data) {
    localStorage.setItem(PREFIX + key, JSON.stringify(data));
}

export function load(key, defaultValue = []) {
    const data = localStorage.getItem(PREFIX + key);
    return data ? JSON.parse(data) : defaultValue;
}

export function remove(key) {
    localStorage.removeItem(PREFIX + key);
}
