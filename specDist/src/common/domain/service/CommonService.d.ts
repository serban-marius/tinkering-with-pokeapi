import ObjectsToCsv from 'objects-to-csv';
declare class CommonService {
    private readonly matchNonAlphabeticCharactersRegex;
    removeSpecialCharactersAndNumbers(originalString: string): string;
    removeFromString(originalString: string, whatToRemove: string | RegExp, replaceWith?: string): string;
    objectArrayToCsv(objectArray: any[]): ObjectsToCsv;
}
export default CommonService;
