import { Injectable } from '@nestjs/common';

@Injectable()
export class CleanersService {
    public cleanValue(value: string): string {
        if (value) {
            return String(value).trim();
        }
        return null;
    }

    public cleanValueNumber(value: number): number {
        try {
            return Number(value);
        } catch (error) { }
        return null;
    }

    public cleanValueBoolean(value: boolean): boolean {
        try {
            return value === true;
        } catch (error) { }
        return false;
    }

    public cleanID(id: string): string {
        return this.cleanValue(id);
    }
}
