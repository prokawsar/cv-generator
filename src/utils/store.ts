import { writable } from 'svelte/store';

export const userInfo = writable({ name: '' });
export const user = writable(false);
