import { FilterXSS, getDefaultWhiteList } from 'xss';

const options = {
  whiteList: {
    ...getDefaultWhiteList(),
    span: ['class', 'style'],
    div: ['class', 'style'],
    p: ['class', 'style'],
    h1: ['class', 'style'],
    h2: ['class', 'style'],
    h3: ['class', 'style'],
    h4: ['class', 'style'],
    h5: ['class', 'style'],
    h6: ['class', 'style'],
    ul: ['class', 'style'],
    ol: ['class', 'style'],
    li: ['class', 'style'],
    a: ['href', 'title', 'target', 'class', 'style', 'rel'],
    img: ['src', 'alt', 'title', 'width', 'height', 'class', 'style'],
    br: [],
    strong: [],
    b: [],
    em: [],
    i: [],
    u: [],
  },
};

const xssFilter = new FilterXSS(options);

export const sanitizeHtml = (html: string | undefined | null): string => {
  if (!html) return '';
  return xssFilter.process(html);
};
