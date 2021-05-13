import { colors } from "./colors";

export interface HeaderParams{
    readonly logo: string;
}

export const header = (params: HeaderParams) => {
    return `
        <div style="width: 100%;height: auto;margin: 0 auto;border: 0;padding: 0; overflow: hidden;background: ${colors.primary};">
            ${
                params.logo ? `
                <div style="width: 100%;height: auto;margin: 0 auto;border: 0;padding: 0; overflow: hidden;">
                    <img src="${params.logo}" style="width: 100%;" />
                </div>` : ''
            }
        </div>
    `;
}