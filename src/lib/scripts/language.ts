import { writable, derived, get, type Readable } from 'svelte/store';
import en from './langs/en.json';
import cs from './langs/cs.json';
export interface Language {
	id: string;
	label: string;
	nativeLabel: string;
	flag: string; // ISO 3166-1 alpha-2 country code for flag
}
export const languages: Language[] = [
	{ id: 'en', label: 'English', nativeLabel: 'English', flag: 'gb' },
	{ id: 'cs', label: 'Czech', nativeLabel: 'Čeština', flag: 'cz' },
];
const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'en';
// Bundled translation maps (statically imported so first render has data)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const langCache: Record<string, any> = { en, cs };

// Pick the initial language synchronously so SSR/CSR first paint uses the right one.
function pickInitialLanguage(): string {
	if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
	try {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved && languages.some(l => l.id === saved)) return saved;
	} catch {
		// localStorage may be unavailable (private mode, etc.) — fall through.
	}
	const nav = window.navigator?.language?.toLowerCase() ?? '';
	const code = nav.split('-')[0];
	if (languages.some(l => l.id === code)) return code;
	return DEFAULT_LANGUAGE;
}

export const currentLanguage = writable<string>(pickInitialLanguage());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const translations = writable<any>(langCache[get(currentLanguage)] ?? langCache[DEFAULT_LANGUAGE]);

// Helper function to get nested value from object by path
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNestedValue(obj: any, path: string): string | undefined {
	const result = path.split('.').reduce((current, key) => current?.[key], obj);
	return typeof result === 'string' ? result : undefined;
}

// Reactive translation function — use as $t('common.back') or $t('key', { name: 'foo' }) in components.
// Returns the translation value or '{key}' fallback if missing.
// When vars are provided, replaces {placeholder} tokens with values.
export const t: Readable<(key: string, vars?: Record<string, string>) => string> = derived(translations, $translations => {
	return (key: string, vars?: Record<string, string>): string => {
		const text = getNestedValue($translations, key) ?? `{${key}}`;
		return vars ? text.replace(/\{(\w+)\}/g, (match, k) => vars[k] ?? match) : text;
	};
});

// Function for translations outside components — use as tt('common.back') or tt('key', { name: 'foo' })
export function tt(key: string, vars?: Record<string, string>): string {
	const current = get(translations);
	const text = getNestedValue(current, key) ?? `{${key}}`;
	return vars ? text.replace(/\{(\w+)\}/g, (match, k) => vars[k] ?? match) : text;
}

export function setLanguage(languageID: string): void {
	if (!languages.some(l => l.id === languageID)) return;
	currentLanguage.set(languageID);
	translations.set(langCache[languageID] ?? langCache[DEFAULT_LANGUAGE]);
	if (typeof window !== 'undefined') {
		try {
			window.localStorage.setItem(STORAGE_KEY, languageID);
		} catch {
			// Ignore storage failures (private mode, quota, etc.)
		}
		// Update <html lang="..."> for accessibility / SEO.
		document.documentElement.lang = languageID;
	}
}

export function getLanguage(id: string): Language | undefined {
	return languages.find(l => l.id === id);
}

// Get flag URL for a language
export function getFlagURL(langID: string): string {
	const lang = getLanguage(langID);
	const flagCode = lang?.flag ?? langID;
	return `/flags/${flagCode}.svg`;
}

// Re-apply the persisted language on the client. Call from onMount in the root layout to
// resync after hydration in case the SSR snapshot was rendered with the default language.
export function syncLanguageFromStorage(): void {
	if (typeof window === 'undefined') return;
	const id = pickInitialLanguage();
	if (id !== get(currentLanguage)) setLanguage(id);
	else document.documentElement.lang = id;
}

// Global open state for the language picker dialog.
export const languageDialogOpen = writable<boolean>(false);

export function openLanguageDialog(): void {
	languageDialogOpen.set(true);
}

export function closeLanguageDialog(): void {
	languageDialogOpen.set(false);
}
