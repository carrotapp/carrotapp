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


  constructor(array, Value, detailsArray) {
    this.Currency = array.Currency;
    this.Image = array.Image;
    this.ProviderName = array.ProviderName;
    this.Name = array.Name;
    this.Ratio = array.Ratio;
    this.Value = Value;
    this.infoUrl = array.infoUrl;
    this.summary = array.summary;
    this.Key = array.key;
    this.how = array.how;
    this.where = array.where;
    this.CardNumber = detailsArray.CardNumber;
    this.Email = detailsArray.Email;
    this.Password = detailsArray.Password;
    this.Points = detailsArray.Points;
  }

}
