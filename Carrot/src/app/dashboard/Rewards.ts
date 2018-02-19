import { ancestorWhere } from 'tslint/lib';
export class Rewards {
  Currency;
  Image;
  ProviderName;
  Name;
  Ratio;
  Value;
  infoUrl;
  summary;
  how;
  where;
  CardNumber;
  Email;
  Password;
  Points;
  Key;


  // constructor(array, Value, detailsArray) {
  constructor(array, detailsArray) {
    this.Currency = array.Currency;
    this.Image = array.Image;
    this.ProviderName = array.ProviderName;
    this.Name = array.Name;
    this.Ratio = array.Ratio;
    // this.Value = Value;
    this.infoUrl = array.InfoUrl;
    this.summary = array.Summary;
    this.Key = array.id;
    this.how = array.How;
    this.where = array.Where;
    this.CardNumber = detailsArray.CardNumber;
    this.Email = detailsArray.Email;
    this.Password = detailsArray.Password;
    this.Points = detailsArray.Points;
  }

}
