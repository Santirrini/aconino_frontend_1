import { FilterXSS, getDefaultWhiteList, IWhiteList } from 'xss';

// Deep clone the default whitelist to avoid mutating the global default
const customWhiteList: IWhiteList = JSON.parse(JSON.stringify(getDefaultWhiteList()));

for (const tag in customWhiteList) {
    if (customWhiteList.hasOwnProperty(tag)) {
        if (!customWhiteList[tag]) {
            customWhiteList[tag] = [];
        }
        customWhiteList[tag]!.push('class');
        customWhiteList[tag]!.push('style');
    }
}

const xssFilter = new FilterXSS({
    whiteList: customWhiteList,
});

export function sanitizeHtml(html: string): string {
    return xssFilter.process(html);
}
