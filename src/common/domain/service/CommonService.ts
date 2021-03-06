import EmptyStringException from '../../../pokeapi/domain/exception/EmptyStringException';
import { Injectable } from '@nestjs/common';
import ObjectsToCsv from 'objects-to-csv';

@Injectable()
class CommonService {
  private readonly matchNonAlphabeticCharactersRegex = /[^a-zA-Z]+/g;

  public removeSpecialCharactersAndNumbers(originalString: string): string {
    const resultString = this.removeFromString(originalString, this.matchNonAlphabeticCharactersRegex);
    if (resultString === '') {
      throw new EmptyStringException();
    }
    return resultString;
  }

  public removeFromString(originalString: string, whatToRemove: string | RegExp, replaceWith = ''): string {
    return originalString.toLowerCase().replace(whatToRemove, replaceWith);
  }

  public objectArrayToCsv(objectArray: any[]): ObjectsToCsv {
    return new ObjectsToCsv(objectArray);
  }
}

export default CommonService;
