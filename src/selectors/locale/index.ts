import { LocalizedText } from '../../locale';
import { Locale } from '../../locale/types';

export { Locale, LocaleInfo } from '../../locale/types';

export function selectLocalizedText(locale: Locale, localizedText: LocalizedText): string {
    if (localizedText[locale.code]) {
        return localizedText[locale.code];
    }
    if (localizedText[locale.fallback]) {
        return localizedText[locale.fallback];
    }
    return `missing in ${locale.code}&${locale.fallback}`;
}