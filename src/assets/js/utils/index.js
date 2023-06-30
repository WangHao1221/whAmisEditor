
/**
 * @description: 设置SessionStorage
 * @param {string} key
 * @param {string} value
 * @return {void}
 */

export function setSessionStorage(key, value) {
    if (typeof key !== 'string' && key !== '') {
        throw new Error('Please set a key for storage.');
    }

    if (typeof value !== 'string' && typeof value !== 'object') {
        throw new Error('Please set a value for string or object.');
    }

    if (typeof value === 'string') {
        sessionStorage.setItem(key, value);
    } else {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            throw new Error('Please set a correct object for value.');
        }
    }
}

/**
 * @description: 获取sessionstorage
 * @param {string} key
 * @return {string | any}
 */
export function getSessionStorage(key) {
    if (typeof key !== 'string' && key !== '') {
        throw new Error('Please set a key for storage.');
    }

    let value = sessionStorage.getItem(key);
    let object = null;

    // 防止Storage中不存在数据
    if (value === null || typeof value === 'undefined') {
        //可设置0或者空
        return object;
    }

    try {
        object = JSON.parse(value);
    } catch (e) {
        object = value;
    }

    return object;
}

/**
 * @description: 获取localStorage
 * @param {string} key
 * @return {string | any}
 */
export function getStorage(key) {
    if (typeof key !== 'string' && key !== '') {
        throw new Error('Please set a key for storage.');
    }

    let value = localStorage.getItem(key);
    let object = null;

    // 防止localStorage中不存在数据
    if (value === null || typeof value === 'undefined') {
        //可设置0或者空
        return object;
    }

    try {
        object = JSON.parse(value);
    } catch (e) {
        object = value;
    }

    return object;
}

/**
 * @description: 设置localStorage
 * @param {string} key
 * @param {string} value
 * @return {void}
 */
export function setStorage(key, value) {
    if (typeof key !== 'string' && key !== '') {
        throw new Error('Please set a key for storage.');
    }

    if (typeof value !== 'string' && typeof value !== 'object') {
        throw new Error('Please set a value fro string or object.');
    }

    if (typeof value === 'string') {
        localStorage.setItem(key, value);
    } else {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            throw new Error('Please set a correct object for value.');
        }
    }
}

/**
 * @description: 删除localStorage
 * @param {string} key
 * @return {void}
 */
export function removeStorage(key) {
    if (typeof key !== 'string' && key !== '') {
        throw new Error('Please set a key for storage.');
    }

    localStorage.removeItem(key);
}
export default {
    setSessionStorage,
    getSessionStorage,
    setStorage,
    getStorage,
    removeStorage,
};
