export interface BodyParams {
  readonly message: string;
}

export const body = (params: BodyParams) => {
  return `
        <div style="width: 100%;height: auto;margin: 0 auto;border: 0;padding: 0; overflow: hidden;">
            ${
              params.message &&
              `
                <div style="width: 100%;height: auto;margin: 0 auto;border: 0;padding: 0; overflow: hidden;">
                    ${params.message}
                </div>`
            }
        </div>
    `;
};
