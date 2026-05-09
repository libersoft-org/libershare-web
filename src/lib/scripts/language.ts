import { writable, derived, get, type Readable } from 'svelte/store';
import en from './langs/en.json';
import cs from './langs/cs.json';
import zh from './langs/zh.json';
import es from './langs/es.json';
import hi from './langs/hi.json';
import pt from './langs/pt.json';
import ru from './langs/ru.json';
import ja from './langs/ja.json';
import vi from './langs/vi.json';
import tr from './langs/tr.json';
import ko from './langs/ko.json';
import id from './langs/id.json';
import de from './langs/de.json';
import fr from './langs/fr.json';
import it from './langs/it.json';
import th from './langs/th.json';
import ar from './langs/ar.json';
import sk from './langs/sk.json';
import hu from './langs/hu.json';
import ro from './langs/ro.json';
import uk from './langs/uk.json';
import pl from './langs/pl.json';
import no from './langs/no.json';
import sv from './langs/sv.json';
import fi from './langs/fi.json';
import el from './langs/el.json';
import bg from './langs/bg.json';
import lt from './langs/lt.json';
import lv from './langs/lv.json';
import et from './langs/et.json';
import nl from './langs/nl.json';
import lb from './langs/lb.json';
import ga from './langs/ga.json';
import ca from './langs/ca.json';
import mt from './langs/mt.json';
import sl from './langs/sl.json';
import hr from './langs/hr.json';
import bs from './langs/bs.json';
import sr from './langs/sr.json';
import mk from './langs/mk.json';
import sq from './langs/sq.json';
import be from './langs/be.json';
import da from './langs/da.json';
import is from './langs/is.json';
import az from './langs/az.json';
import ka from './langs/ka.json';
import hy from './langs/hy.json';
import gl from './langs/gl.json';
import sc from './langs/sc.json';
import cy from './langs/cy.json';
import eu from './langs/eu.json';
import yi from './langs/yi.json';
import he from './langs/he.json';
export interface Language {
	id: string;
	label: string;
	nativeLabel: string;
	flag: string; // ISO 3166-1 alpha-2 country code for flag
}
export const languages: Language[] = [
	{ id: 'sq', label: 'Albanian', nativeLabel: 'Shqip', flag: 'al' },
	{ id: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: 'sa' },
	{ id: 'hy', label: 'Armenian', nativeLabel: 'Հայերեն', flag: 'am' },
	{ id: 'az', label: 'Azerbaijani', nativeLabel: 'Azərbaycanca', flag: 'az' },
	{ id: 'eu', label: 'Basque', nativeLabel: 'Euskara', flag: 'es' },
	{ id: 'be', label: 'Belarusian', nativeLabel: 'Беларуская', flag: 'by' },
	{ id: 'bs', label: 'Bosnian', nativeLabel: 'Bosanski', flag: 'ba' },
	{ id: 'bg', label: 'Bulgarian', nativeLabel: 'Български', flag: 'bg' },
	{ id: 'ca', label: 'Catalan', nativeLabel: 'Català', flag: 'ad' },
	{ id: 'zh', label: 'Chinese', nativeLabel: '中文', flag: 'cn' },
	{ id: 'hr', label: 'Croatian', nativeLabel: 'Hrvatski', flag: 'hr' },
	{ id: 'cs', label: 'Czech', nativeLabel: 'Čeština', flag: 'cz' },
	{ id: 'da', label: 'Danish', nativeLabel: 'Dansk', flag: 'dk' },
	{ id: 'nl', label: 'Dutch', nativeLabel: 'Nederlands', flag: 'nl' },
	{ id: 'en', label: 'English', nativeLabel: 'English', flag: 'gb' },
	{ id: 'et', label: 'Estonian', nativeLabel: 'Eesti', flag: 'ee' },
	{ id: 'fi', label: 'Finnish', nativeLabel: 'Suomi', flag: 'fi' },
	{ id: 'fr', label: 'French', nativeLabel: 'Français', flag: 'fr' },
	{ id: 'gl', label: 'Galician', nativeLabel: 'Galego', flag: 'es' },
	{ id: 'ka', label: 'Georgian', nativeLabel: 'ქართული', flag: 'ge' },
	{ id: 'de', label: 'German', nativeLabel: 'Deutsch', flag: 'de' },
	{ id: 'el', label: 'Greek', nativeLabel: 'Ελληνικά', flag: 'gr' },
	{ id: 'he', label: 'Hebrew', nativeLabel: 'עברית', flag: 'il' },
	{ id: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', flag: 'in' },
	{ id: 'hu', label: 'Hungarian', nativeLabel: 'Magyar', flag: 'hu' },
	{ id: 'is', label: 'Icelandic', nativeLabel: 'Íslenska', flag: 'is' },
	{ id: 'id', label: 'Indonesian', nativeLabel: 'Bahasa Indonesia', flag: 'id' },
	{ id: 'ga', label: 'Irish', nativeLabel: 'Gaeilge', flag: 'ie' },
	{ id: 'it', label: 'Italian', nativeLabel: 'Italiano', flag: 'it' },
	{ id: 'ja', label: 'Japanese', nativeLabel: '日本語', flag: 'jp' },
	{ id: 'ko', label: 'Korean', nativeLabel: '한국어', flag: 'kr' },
	{ id: 'lv', label: 'Latvian', nativeLabel: 'Latviešu', flag: 'lv' },
	{ id: 'lt', label: 'Lithuanian', nativeLabel: 'Lietuvių', flag: 'lt' },
	{ id: 'lb', label: 'Luxembourgish', nativeLabel: 'Lëtzebuergesch', flag: 'lu' },
	{ id: 'mk', label: 'Macedonian', nativeLabel: 'Македонски', flag: 'mk' },
	{ id: 'mt', label: 'Maltese', nativeLabel: 'Malti', flag: 'mt' },
	{ id: 'no', label: 'Norwegian', nativeLabel: 'Norsk', flag: 'no' },
	{ id: 'pl', label: 'Polish', nativeLabel: 'Polski', flag: 'pl' },
	{ id: 'pt', label: 'Portuguese', nativeLabel: 'Português', flag: 'pt' },
	{ id: 'ro', label: 'Romanian', nativeLabel: 'Română', flag: 'ro' },
	{ id: 'ru', label: 'Russian', nativeLabel: 'Русский', flag: 'ru' },
	{ id: 'sc', label: 'Sardinian', nativeLabel: 'Sardu', flag: 'it' },
	{ id: 'sr', label: 'Serbian', nativeLabel: 'Српски', flag: 'rs' },
	{ id: 'sk', label: 'Slovak', nativeLabel: 'Slovenčina', flag: 'sk' },
	{ id: 'sl', label: 'Slovenian', nativeLabel: 'Slovenščina', flag: 'si' },
	{ id: 'es', label: 'Spanish', nativeLabel: 'Español', flag: 'es' },
	{ id: 'sv', label: 'Swedish', nativeLabel: 'Svenska', flag: 'se' },
	{ id: 'th', label: 'Thai', nativeLabel: 'ไทย', flag: 'th' },
	{ id: 'tr', label: 'Turkish', nativeLabel: 'Türkçe', flag: 'tr' },
	{ id: 'uk', label: 'Ukrainian', nativeLabel: 'Українська', flag: 'ua' },
	{ id: 'vi', label: 'Vietnamese', nativeLabel: 'Tiếng Việt', flag: 'vn' },
	{ id: 'cy', label: 'Welsh', nativeLabel: 'Cymraeg', flag: 'gb' },
	{ id: 'yi', label: 'Yiddish', nativeLabel: 'ייִדיש', flag: 'il' },
];
const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'en';
// Bundled translation maps (statically imported so first render has data)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const langCache: Record<string, any> = { en, ga, cs, sk, de, nl, lb, fr, es, ca, it, mt, pt, pl, hu, ro, sl, hr, bs, sr, mk, sq, bg, el, uk, be, ru, lt, lv, et, fi, sv, no, da, is, tr, az, ka, hy, ar, hi, th, vi, id, zh, ja, ko, gl, sc, cy, eu, yi, he };

// Pick the initial language synchronously so SSR/CSR first paint uses the right one.
function pickInitialLanguage(): string {
	if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
	try {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved && languages.some(l => l.id === saved)) return saved;
	} catch {
		// localStorage may be unavailable (private mode, etc.) - fall through.
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

// Reactive translation function - use as $t('common.back') or $t('key', { name: 'foo' }) in components.
// Returns the translation value or '{key}' fallback if missing.
// When vars are provided, replaces {placeholder} tokens with values.
export const t: Readable<(key: string, vars?: Record<string, string>) => string> = derived(translations, $translations => {
	return (key: string, vars?: Record<string, string>): string => {
		const text = getNestedValue($translations, key) ?? `{${key}}`;
		return vars ? text.replace(/\{(\w+)\}/g, (match, k) => vars[k] ?? match) : text;
	};
});

// Function for translations outside components - use as tt('common.back') or tt('key', { name: 'foo' })
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
