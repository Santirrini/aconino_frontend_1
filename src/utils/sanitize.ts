import { FilterXSS, getDefaultWhiteList } from 'xss';

const options = {
  whiteList: {
    ...getDefaultWhiteList(),
    span: ['class', 'style'],
  },
};

const myxss = new FilterXSS(options);

export function sanitizeHtml(html: string): string {
  return myxss.process(html);
}
