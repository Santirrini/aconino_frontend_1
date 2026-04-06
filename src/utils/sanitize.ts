import { FilterXSS, getDefaultWhiteList } from 'xss';

const customXSS = new FilterXSS({
  whiteList: {
    ...getDefaultWhiteList(),
    span: ['class', 'style'],
    div: ['class', 'style'],
    p: ['class', 'style'],
    a: ['class', 'style', 'href', 'title', 'target'],
    img: ['src', 'alt', 'class', 'style', 'width', 'height'],
    h1: ['class', 'style'],
    h2: ['class', 'style'],
    h3: ['class', 'style'],
    h4: ['class', 'style'],
    h5: ['class', 'style'],
    h6: ['class', 'style'],
    ul: ['class', 'style'],
    ol: ['class', 'style'],
    li: ['class', 'style'],
    strong: [],
    b: [],
    i: [],
    em: [],
    br: []
  }
});

export const sanitizeHtml = (html: string) => {
  if (!html) return '';
  return customXSS.process(html);
};
