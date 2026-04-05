import { FilterXSS, getDefaultWhiteList, IWhiteList } from 'xss';

const defaultWhiteList = getDefaultWhiteList();

const options = {
  whiteList: {
    ...defaultWhiteList,
    span: [...(defaultWhiteList.span || []), 'class', 'style'],
    p: [...(defaultWhiteList.p || []), 'class', 'style'],
    div: [...(defaultWhiteList.div || []), 'class', 'style'],
    a: [...(defaultWhiteList.a || []), 'class', 'style', 'href', 'title', 'target'],
    h1: [...(defaultWhiteList.h1 || []), 'class', 'style'],
    h2: [...(defaultWhiteList.h2 || []), 'class', 'style'],
    h3: [...(defaultWhiteList.h3 || []), 'class', 'style'],
    h4: [...(defaultWhiteList.h4 || []), 'class', 'style'],
    h5: [...(defaultWhiteList.h5 || []), 'class', 'style'],
    h6: [...(defaultWhiteList.h6 || []), 'class', 'style'],
    ul: [...(defaultWhiteList.ul || []), 'class', 'style'],
    ol: [...(defaultWhiteList.ol || []), 'class', 'style'],
    li: [...(defaultWhiteList.li || []), 'class', 'style'],
    strong: [...(defaultWhiteList.strong || []), 'class', 'style'],
    em: [...(defaultWhiteList.em || []), 'class', 'style'],
    br: [...(defaultWhiteList.br || []), 'class', 'style'],
  } as IWhiteList
};

const customXss = new FilterXSS(options);

export function sanitizeHtml(html: string | null | undefined): string {
  if (!html) return '';
  return customXss.process(html);
}
