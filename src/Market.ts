import * as Domain from './Language'

export class Market {
  name: Markets;
  languages: Domain.Language[];

}
export type Markets = "TCAS" | "CONDOR" | "TCUK";
