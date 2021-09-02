import { body, BodyParams } from './body';
import { footer, FooterParams } from './footer';
import { header, HeaderParams } from './header';

interface Params {
  readonly header: HeaderParams;
  readonly body: BodyParams;
  readonly footer: FooterParams;
}

export const templateHTML = (params: Params) => {
  return `
        <div style="width: 100%;max-width: 600px;height: auto;margin: 0 auto;border: 1px solid #ddd;padding: 0; overflow: hidden;">
            ${header(params.header)}
            ${body(params.body)}
            ${footer(params.footer)}
        </div>
    `;
};
