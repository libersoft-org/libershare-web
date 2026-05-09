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
import bn from './langs/bn.json';
import ur from './langs/ur.json';
import sw from './langs/sw.json';
import pa from './langs/pa.json';
import fa from './langs/fa.json';
import mr from './langs/mr.json';
import te from './langs/te.json';
import ta from './langs/ta.json';
import tl from './langs/tl.json';
import yue from './langs/yue.json';
import jv from './langs/jv.json';
import ms from './langs/ms.json';
import ha from './langs/ha.json';
import gu from './langs/gu.json';
import ps from './langs/ps.json';
import am from './langs/am.json';
import yo from './langs/yo.json';
import kn from './langs/kn.json';
import my from './langs/my.json';
import om from './langs/om.json';
import ht from './langs/ht.json';
import kk from './langs/kk.json';
import km from './langs/km.json';
import ky from './langs/ky.json';
import lo from './langs/lo.json';
import mg from './langs/mg.json';
import mn from './langs/mn.json';
import ne from './langs/ne.json';
import si from './langs/si.json';
import so from './langs/so.json';
import tg from './langs/tg.json';
import tk from './langs/tk.json';
import uz from './langs/uz.json';
import af from './langs/af.json';
import zu from './langs/zu.json';
import xh from './langs/xh.json';
import sn from './langs/sn.json';
import ig from './langs/ig.json';
import sd from './langs/sd.json';
import qu from './langs/qu.json';
import mi from './langs/mi.json';
import sm from './langs/sm.json';
import fo from './langs/fo.json';
import rw from './langs/rw.json';
import ny from './langs/ny.json';
import ti from './langs/ti.json';
import gn from './langs/gn.json';
import ln from './langs/ln.json';
import st from './langs/st.json';
import tn from './langs/tn.json';
import bi from './langs/bi.json';
import tpi from './langs/tpi.json';
import kl from './langs/kl.json';
import rn from './langs/rn.json';
import to from './langs/to.json';
import fj from './langs/fj.json';
import wo from './langs/wo.json';
import ay from './langs/ay.json';
import bm from './langs/bm.json';
import tet from './langs/tet.json';
import bho from './langs/bho.json';
import mai from './langs/mai.json';
import awa from './langs/awa.json';
import or_ from './langs/or.json';
import as_ from './langs/as.json';
import su from './langs/su.json';
import mad from './langs/mad.json';
import ceb from './langs/ceb.json';
import ilo from './langs/ilo.json';
import hil from './langs/hil.json';
import ku from './langs/ku.json';
import ff from './langs/ff.json';
import ber from './langs/ber.json';
import skr from './langs/skr.json';
import ks from './langs/ks.json';
import ak from './langs/ak.json';
import lg from './langs/lg.json';
import ug from './langs/ug.json';
import bo from './langs/bo.json';
import sat from './langs/sat.json';
import mag from './langs/mag.json';
import hne from './langs/hne.json';
import wuu from './langs/wuu.json';
import nan from './langs/nan.json';
import hak from './langs/hak.json';
import hsn from './langs/hsn.json';
import gan from './langs/gan.json';
import ml from './langs/ml.json';
import tt_ from './langs/tt.json';
import mwr from './langs/mwr.json';
import syl from './langs/syl.json';
import ctg from './langs/ctg.json';
import cjy from './langs/cjy.json';
import cdo from './langs/cdo.json';
import hmn from './langs/hmn.json';
import ki from './langs/ki.json';
import bem from './langs/bem.json';
import kg from './langs/kg.json';
import nso from './langs/nso.json';
import ts from './langs/ts.json';
import lua from './langs/lua.json';
import umb from './langs/umb.json';
import luo from './langs/luo.json';
import min from './langs/min.json';
import bjn from './langs/bjn.json';
import ace from './langs/ace.json';
import ban from './langs/ban.json';
import bug from './langs/bug.json';
import din from './langs/din.json';
import kri from './langs/kri.json';
import kea from './langs/kea.json';
import crs from './langs/crs.json';
import rm from './langs/rm.json';
import nn from './langs/nn.json';
import ss from './langs/ss.json';
import nd from './langs/nd.json';
import ve from './langs/ve.json';
import haw from './langs/haw.json';
import ty from './langs/ty.json';
import sg from './langs/sg.json';
import mos from './langs/mos.json';
import zdj from './langs/zdj.json';
import ch from './langs/ch.json';
import iu from './langs/iu.json';
import dv from './langs/dv.json';
import se from './langs/se.json';
export interface Language {
	id: string;
	label: string;
	nativeLabel: string;
	flag: string; // ISO 3166-1 alpha-2 country code for flag
}
export const languages: Language[] = [
	{ id: 'ace', label: 'Acehnese', nativeLabel: 'Bahsa Acèh', flag: 'id' },
	{ id: 'af', label: 'Afrikaans', nativeLabel: 'Afrikaans', flag: 'za' },
	{ id: 'ak', label: 'Akan', nativeLabel: 'Akan', flag: 'gh' },
	{ id: 'sq', label: 'Albanian', nativeLabel: 'Shqip', flag: 'al' },
	{ id: 'am', label: 'Amharic', nativeLabel: 'አማርኛ', flag: 'et' },
	{ id: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: 'sa' },
	{ id: 'hy', label: 'Armenian', nativeLabel: 'Հայերեն', flag: 'am' },
	{ id: 'as', label: 'Assamese', nativeLabel: 'অসমীয়া', flag: 'in' },
	{ id: 'awa', label: 'Awadhi', nativeLabel: 'अवधी', flag: 'in' },
	{ id: 'ay', label: 'Aymara', nativeLabel: 'Aymar aru', flag: 'bo' },
	{ id: 'az', label: 'Azerbaijani', nativeLabel: 'Azərbaycanca', flag: 'az' },
	{ id: 'ban', label: 'Balinese', nativeLabel: 'Basa Bali', flag: 'id' },
	{ id: 'bm', label: 'Bambara', nativeLabel: 'Bamanankan', flag: 'ml' },
	{ id: 'bjn', label: 'Banjar', nativeLabel: 'Bahasa Banjar', flag: 'id' },
	{ id: 'eu', label: 'Basque', nativeLabel: 'Euskara', flag: 'es' },
	{ id: 'be', label: 'Belarusian', nativeLabel: 'Беларуская', flag: 'by' },
	{ id: 'bem', label: 'Bemba', nativeLabel: 'Ichibemba', flag: 'zm' },
	{ id: 'bn', label: 'Bengali', nativeLabel: 'বাংলা', flag: 'bd' },
	{ id: 'ber', label: 'Berber', nativeLabel: 'Tamaziɣt', flag: 'ma' },
	{ id: 'bho', label: 'Bhojpuri', nativeLabel: 'भोजपुरी', flag: 'in' },
	{ id: 'bi', label: 'Bislama', nativeLabel: 'Bislama', flag: 'vu' },
	{ id: 'bs', label: 'Bosnian', nativeLabel: 'Bosanski', flag: 'ba' },
	{ id: 'bug', label: 'Buginese', nativeLabel: 'ᨅᨔ ᨕᨘᨁᨗ', flag: 'id' },
	{ id: 'bg', label: 'Bulgarian', nativeLabel: 'Български', flag: 'bg' },
	{ id: 'my', label: 'Burmese', nativeLabel: 'မြန်မာ', flag: 'mm' },
	{ id: 'yue', label: 'Cantonese', nativeLabel: '粵語', flag: 'hk' },
	{ id: 'kea', label: 'Cape Verdean Creole', nativeLabel: 'Kabuverdianu', flag: 'cv' },
	{ id: 'ca', label: 'Catalan', nativeLabel: 'Català', flag: 'ad' },
	{ id: 'ceb', label: 'Cebuano', nativeLabel: 'Cebuano', flag: 'ph' },
	{ id: 'ch', label: 'Chamorro', nativeLabel: 'Chamoru', flag: 'gu' },
	{ id: 'hne', label: 'Chhattisgarhi', nativeLabel: 'छत्तीसगढ़ी', flag: 'in' },
	{ id: 'ny', label: 'Chichewa', nativeLabel: 'Chichewa', flag: 'mw' },
	{ id: 'zh', label: 'Chinese', nativeLabel: '中文', flag: 'cn' },
	{ id: 'ctg', label: 'Chittagonian', nativeLabel: 'চাঁটগাঁইয়া', flag: 'bd' },
	{ id: 'zdj', label: 'Comorian', nativeLabel: 'Shikomori', flag: 'km' },
	{ id: 'hr', label: 'Croatian', nativeLabel: 'Hrvatski', flag: 'hr' },
	{ id: 'cs', label: 'Czech', nativeLabel: 'Čeština', flag: 'cz' },
	{ id: 'da', label: 'Danish', nativeLabel: 'Dansk', flag: 'dk' },
	{ id: 'dv', label: 'Dhivehi', nativeLabel: 'ދިވެހި', flag: 'mv' },
	{ id: 'din', label: 'Dinka', nativeLabel: 'Thuɔŋjäŋ', flag: 'ss' },
	{ id: 'nl', label: 'Dutch', nativeLabel: 'Nederlands', flag: 'nl' },
	{ id: 'cdo', label: 'Eastern Min', nativeLabel: '閩東語', flag: 'cn' },
	{ id: 'en', label: 'English', nativeLabel: 'English', flag: 'gb' },
	{ id: 'et', label: 'Estonian', nativeLabel: 'Eesti', flag: 'ee' },
	{ id: 'fo', label: 'Faroese', nativeLabel: 'Føroyskt', flag: 'fo' },
	{ id: 'fj', label: 'Fijian', nativeLabel: 'Vosa Vakaviti', flag: 'fj' },
	{ id: 'tl', label: 'Filipino', nativeLabel: 'Filipino', flag: 'ph' },
	{ id: 'fi', label: 'Finnish', nativeLabel: 'Suomi', flag: 'fi' },
	{ id: 'fr', label: 'French', nativeLabel: 'Français', flag: 'fr' },
	{ id: 'ff', label: 'Fulah', nativeLabel: 'Fulfulde', flag: 'sn' },
	{ id: 'gl', label: 'Galician', nativeLabel: 'Galego', flag: 'es' },
	{ id: 'gan', label: 'Gan', nativeLabel: '贛語', flag: 'cn' },
	{ id: 'ka', label: 'Georgian', nativeLabel: 'ქართული', flag: 'ge' },
	{ id: 'de', label: 'German', nativeLabel: 'Deutsch', flag: 'de' },
	{ id: 'el', label: 'Greek', nativeLabel: 'Ελληνικά', flag: 'gr' },
	{ id: 'kl', label: 'Greenlandic', nativeLabel: 'Kalaallisut', flag: 'gl' },
	{ id: 'gn', label: 'Guaraní', nativeLabel: "Avañe'ẽ", flag: 'py' },
	{ id: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી', flag: 'in' },
	{ id: 'ht', label: 'Haitian Creole', nativeLabel: 'Kreyòl Ayisyen', flag: 'ht' },
	{ id: 'hak', label: 'Hakka', nativeLabel: '客家話', flag: 'cn' },
	{ id: 'ha', label: 'Hausa', nativeLabel: 'Hausa', flag: 'ng' },
	{ id: 'haw', label: 'Hawaiian', nativeLabel: 'ʻŌlelo Hawaiʻi', flag: 'us' },
	{ id: 'he', label: 'Hebrew', nativeLabel: 'עברית', flag: 'il' },
	{ id: 'hil', label: 'Hiligaynon', nativeLabel: 'Hiligaynon', flag: 'ph' },
	{ id: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', flag: 'in' },
	{ id: 'hmn', label: 'Hmong', nativeLabel: 'Hmoob', flag: 'la' },
	{ id: 'hu', label: 'Hungarian', nativeLabel: 'Magyar', flag: 'hu' },
	{ id: 'is', label: 'Icelandic', nativeLabel: 'Íslenska', flag: 'is' },
	{ id: 'ig', label: 'Igbo', nativeLabel: 'Igbo', flag: 'ng' },
	{ id: 'ilo', label: 'Ilocano', nativeLabel: 'Ilokano', flag: 'ph' },
	{ id: 'id', label: 'Indonesian', nativeLabel: 'Bahasa Indonesia', flag: 'id' },
	{ id: 'iu', label: 'Inuktitut', nativeLabel: 'ᐃᓄᒃᑎᑐᑦ', flag: 'ca' },
	{ id: 'ga', label: 'Irish', nativeLabel: 'Gaeilge', flag: 'ie' },
	{ id: 'it', label: 'Italian', nativeLabel: 'Italiano', flag: 'it' },
	{ id: 'ja', label: 'Japanese', nativeLabel: '日本語', flag: 'jp' },
	{ id: 'jv', label: 'Javanese', nativeLabel: 'Basa Jawa', flag: 'id' },
	{ id: 'cjy', label: 'Jin Chinese', nativeLabel: '晉語', flag: 'cn' },
	{ id: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', flag: 'in' },
	{ id: 'ks', label: 'Kashmiri', nativeLabel: 'كٲشُر', flag: 'in' },
	{ id: 'kk', label: 'Kazakh', nativeLabel: 'Қазақша', flag: 'kz' },
	{ id: 'km', label: 'Khmer', nativeLabel: 'ខ្មែរ', flag: 'kh' },
	{ id: 'ki', label: 'Kikuyu', nativeLabel: 'Gĩkũyũ', flag: 'ke' },
	{ id: 'rw', label: 'Kinyarwanda', nativeLabel: 'Ikinyarwanda', flag: 'rw' },
	{ id: 'rn', label: 'Kirundi', nativeLabel: 'Ikirundi', flag: 'bi' },
	{ id: 'kg', label: 'Kongo', nativeLabel: 'Kikongo', flag: 'cd' },
	{ id: 'ko', label: 'Korean', nativeLabel: '한국어', flag: 'kr' },
	{ id: 'kri', label: 'Krio', nativeLabel: 'Krio', flag: 'sl' },
	{ id: 'ku', label: 'Kurdish', nativeLabel: 'Kurdî', flag: 'iq' },
	{ id: 'ky', label: 'Kyrgyz', nativeLabel: 'Кыргызча', flag: 'kg' },
	{ id: 'lo', label: 'Lao', nativeLabel: 'ລາວ', flag: 'la' },
	{ id: 'lv', label: 'Latvian', nativeLabel: 'Latviešu', flag: 'lv' },
	{ id: 'ln', label: 'Lingala', nativeLabel: 'Lingála', flag: 'cd' },
	{ id: 'lt', label: 'Lithuanian', nativeLabel: 'Lietuvių', flag: 'lt' },
	{ id: 'lg', label: 'Luganda', nativeLabel: 'Luganda', flag: 'ug' },
	{ id: 'luo', label: 'Luo', nativeLabel: 'Dholuo', flag: 'ke' },
	{ id: 'lb', label: 'Luxembourgish', nativeLabel: 'Lëtzebuergesch', flag: 'lu' },
	{ id: 'mk', label: 'Macedonian', nativeLabel: 'Македонски', flag: 'mk' },
	{ id: 'mad', label: 'Madurese', nativeLabel: 'Basa Madhura', flag: 'id' },
	{ id: 'mag', label: 'Magahi', nativeLabel: 'मगही', flag: 'in' },
	{ id: 'mai', label: 'Maithili', nativeLabel: 'मैथिली', flag: 'in' },
	{ id: 'mg', label: 'Malagasy', nativeLabel: 'Malagasy', flag: 'mg' },
	{ id: 'ms', label: 'Malay', nativeLabel: 'Bahasa Melayu', flag: 'my' },
	{ id: 'ml', label: 'Malayalam', nativeLabel: 'മലയാളം', flag: 'in' },
	{ id: 'mt', label: 'Maltese', nativeLabel: 'Malti', flag: 'mt' },
	{ id: 'mi', label: 'Maori', nativeLabel: 'Māori', flag: 'nz' },
	{ id: 'mr', label: 'Marathi', nativeLabel: 'मराठी', flag: 'in' },
	{ id: 'mwr', label: 'Marwari', nativeLabel: 'मारवाड़ी', flag: 'in' },
	{ id: 'nan', label: 'Min Nan', nativeLabel: '閩南語', flag: 'tw' },
	{ id: 'min', label: 'Minangkabau', nativeLabel: 'Baso Minang', flag: 'id' },
	{ id: 'mn', label: 'Mongolian', nativeLabel: 'Монгол', flag: 'mn' },
	{ id: 'mos', label: 'Mooré', nativeLabel: 'Mooré', flag: 'bf' },
	{ id: 'ne', label: 'Nepali', nativeLabel: 'नेपाली', flag: 'np' },
	{ id: 'nd', label: 'Northern Ndebele', nativeLabel: 'isiNdebele', flag: 'zw' },
	{ id: 'se', label: 'Northern Sami', nativeLabel: 'Davvisámegiella', flag: 'no' },
	{ id: 'nso', label: 'Northern Sotho', nativeLabel: 'Sesotho sa Leboa', flag: 'za' },
	{ id: 'no', label: 'Norwegian', nativeLabel: 'Norsk', flag: 'no' },
	{ id: 'nn', label: 'Norwegian Nynorsk', nativeLabel: 'Nynorsk', flag: 'no' },
	{ id: 'or', label: 'Odia', nativeLabel: 'ଓଡ଼ିଆ', flag: 'in' },
	{ id: 'om', label: 'Oromo', nativeLabel: 'Afaan Oromoo', flag: 'et' },
	{ id: 'ps', label: 'Pashto', nativeLabel: 'پښتو', flag: 'af' },
	{ id: 'fa', label: 'Persian', nativeLabel: 'فارسی', flag: 'ir' },
	{ id: 'pl', label: 'Polish', nativeLabel: 'Polski', flag: 'pl' },
	{ id: 'pt', label: 'Portuguese', nativeLabel: 'Português', flag: 'pt' },
	{ id: 'pa', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ', flag: 'in' },
	{ id: 'qu', label: 'Quechua', nativeLabel: 'Runa Simi', flag: 'pe' },
	{ id: 'ro', label: 'Romanian', nativeLabel: 'Română', flag: 'ro' },
	{ id: 'rm', label: 'Romansh', nativeLabel: 'Rumantsch', flag: 'ch' },
	{ id: 'ru', label: 'Russian', nativeLabel: 'Русский', flag: 'ru' },
	{ id: 'sm', label: 'Samoan', nativeLabel: 'Gagana Sāmoa', flag: 'ws' },
	{ id: 'sg', label: 'Sango', nativeLabel: 'Sängö', flag: 'cf' },
	{ id: 'sat', label: 'Santali', nativeLabel: 'ᱥᱟᱱᱛᱟᱲᱤ', flag: 'in' },
	{ id: 'skr', label: 'Saraiki', nativeLabel: 'سرائیکی', flag: 'pk' },
	{ id: 'sc', label: 'Sardinian', nativeLabel: 'Sardu', flag: 'it' },
	{ id: 'sr', label: 'Serbian', nativeLabel: 'Српски', flag: 'rs' },
	{ id: 'st', label: 'Sesotho', nativeLabel: 'Sesotho', flag: 'ls' },
	{ id: 'crs', label: 'Seychellois Creole', nativeLabel: 'Seselwa', flag: 'sc' },
	{ id: 'sn', label: 'Shona', nativeLabel: 'ChiShona', flag: 'zw' },
	{ id: 'sd', label: 'Sindhi', nativeLabel: 'سنڌي', flag: 'pk' },
	{ id: 'si', label: 'Sinhala', nativeLabel: 'සිංහල', flag: 'lk' },
	{ id: 'sk', label: 'Slovak', nativeLabel: 'Slovenčina', flag: 'sk' },
	{ id: 'sl', label: 'Slovenian', nativeLabel: 'Slovenščina', flag: 'si' },
	{ id: 'so', label: 'Somali', nativeLabel: 'Soomaali', flag: 'so' },
	{ id: 'es', label: 'Spanish', nativeLabel: 'Español', flag: 'es' },
	{ id: 'su', label: 'Sundanese', nativeLabel: 'Basa Sunda', flag: 'id' },
	{ id: 'sw', label: 'Swahili', nativeLabel: 'Kiswahili', flag: 'tz' },
	{ id: 'ss', label: 'Swati', nativeLabel: 'siSwati', flag: 'sz' },
	{ id: 'sv', label: 'Swedish', nativeLabel: 'Svenska', flag: 'se' },
	{ id: 'syl', label: 'Sylheti', nativeLabel: 'ꠍꠤꠟꠐꠤ', flag: 'bd' },
	{ id: 'ty', label: 'Tahitian', nativeLabel: 'Reo Tahiti', flag: 'pf' },
	{ id: 'tg', label: 'Tajik', nativeLabel: 'Тоҷикӣ', flag: 'tj' },
	{ id: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்', flag: 'in' },
	{ id: 'tt', label: 'Tatar', nativeLabel: 'Татарча', flag: 'ru' },
	{ id: 'te', label: 'Telugu', nativeLabel: 'తెలుగు', flag: 'in' },
	{ id: 'tet', label: 'Tetum', nativeLabel: 'Tetun', flag: 'tl' },
	{ id: 'th', label: 'Thai', nativeLabel: 'ไทย', flag: 'th' },
	{ id: 'bo', label: 'Tibetan', nativeLabel: 'བོད་སྐད', flag: 'cn' },
	{ id: 'ti', label: 'Tigrinya', nativeLabel: 'ትግርኛ', flag: 'er' },
	{ id: 'tpi', label: 'Tok Pisin', nativeLabel: 'Tok Pisin', flag: 'pg' },
	{ id: 'to', label: 'Tongan', nativeLabel: 'Lea Faka-Tonga', flag: 'to' },
	{ id: 'lua', label: 'Tshiluba', nativeLabel: 'Tshiluba', flag: 'cd' },
	{ id: 'ts', label: 'Tsonga', nativeLabel: 'Xitsonga', flag: 'za' },
	{ id: 'tn', label: 'Tswana', nativeLabel: 'Setswana', flag: 'bw' },
	{ id: 'tr', label: 'Turkish', nativeLabel: 'Türkçe', flag: 'tr' },
	{ id: 'tk', label: 'Turkmen', nativeLabel: 'Türkmençe', flag: 'tm' },
	{ id: 'uk', label: 'Ukrainian', nativeLabel: 'Українська', flag: 'ua' },
	{ id: 'umb', label: 'Umbundu', nativeLabel: 'Umbundu', flag: 'ao' },
	{ id: 'ur', label: 'Urdu', nativeLabel: 'اردو', flag: 'pk' },
	{ id: 'uz', label: 'Uzbek', nativeLabel: 'Oʻzbekcha', flag: 'uz' },
	{ id: 'ug', label: 'Uyghur', nativeLabel: 'ئۇيغۇرچە', flag: 'cn' },
	{ id: 've', label: 'Venda', nativeLabel: 'Tshivenda', flag: 'za' },
	{ id: 'vi', label: 'Vietnamese', nativeLabel: 'Tiếng Việt', flag: 'vn' },
	{ id: 'cy', label: 'Welsh', nativeLabel: 'Cymraeg', flag: 'gb' },
	{ id: 'wo', label: 'Wolof', nativeLabel: 'Wolof', flag: 'sn' },
	{ id: 'wuu', label: 'Wu', nativeLabel: '吳語', flag: 'cn' },
	{ id: 'xh', label: 'Xhosa', nativeLabel: 'isiXhosa', flag: 'za' },
	{ id: 'hsn', label: 'Xiang', nativeLabel: '湘語', flag: 'cn' },
	{ id: 'yi', label: 'Yiddish', nativeLabel: 'ייִדיש', flag: 'il' },
	{ id: 'yo', label: 'Yoruba', nativeLabel: 'Yorùbá', flag: 'ng' },
	{ id: 'zu', label: 'Zulu', nativeLabel: 'isiZulu', flag: 'za' },
];
const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'en';
// Bundled translation maps (statically imported so first render has data)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const langCache: Record<string, any> = { en, ga, cs, sk, de, nl, lb, fr, es, ca, it, mt, pt, pl, hu, ro, sl, hr, bs, sr, mk, sq, bg, el, uk, be, ru, lt, lv, et, fi, sv, no, da, is, tr, az, ka, hy, ar, hi, th, vi, id, zh, ja, ko, gl, sc, cy, eu, yi, he, bn, ur, sw, pa, fa, mr, te, ta, tl, yue, jv, ms, ha, gu, ps, am, yo, kn, my, om, ht, kk, km, ky, lo, mg, mn, ne, si, so, tg, tk, uz, af, zu, xh, sn, ig, sd, qu, mi, sm, fo, rw, ny, ti, gn, ln, st, tn, bi, tpi, kl, rn, to, fj, wo, ay, bm, tet, bho, mai, awa, or: or_, as: as_, su, mad, ceb, ilo, hil, ku, ff, ber, skr, ks, ak, lg, ug, bo, sat, mag, hne, wuu, nan, hak, hsn, gan, ml, tt: tt_, mwr, syl, ctg, cjy, cdo, hmn, ki, bem, kg, nso, ts, lua, umb, luo, min, bjn, ace, ban, bug, din, kri, kea, crs, rm, nn, ss, nd, ve, haw, ty, sg, mos, zdj, ch, iu, dv, se };

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
