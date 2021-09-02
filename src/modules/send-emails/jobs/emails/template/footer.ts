export interface FooterParams {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
}

export const footer = (params: FooterParams) => {
  return `
        <div style="width: 100%;height: auto;margin: 0 auto;border: 0;padding: 0; overflow: hidden;">
            ${
              params.name &&
              `
                <div style="width: 100%;height: auto;margin: 0 auto;border: 0;padding: 0; overflow: hidden;">
                    ${params.name}
                </div>`
            }
            ${
              params.email &&
              `
                <div style="width: 100%;height: auto;margin: 0 auto;border: 0;padding: 0; overflow: hidden;">
                    ${params.email}
                </div>`
            }
            ${
              params.phone &&
              `
                <div style="width: 100%;height: auto;margin: 0 auto;border: 0;padding: 0; overflow: hidden;">
                    ${params.phone}
                </div>`
            }
        </div>
    `;
};
