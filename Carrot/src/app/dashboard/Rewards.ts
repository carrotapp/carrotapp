import { ancestorWhere } from 'tslint/lib';
export class Rewards {
  Currency;
  Image;
  ProviderName;
  Name;
  Ratio;
  Value;
  InfoUrl;
  Summary;
  How;
  Where;
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
    this.InfoUrl = array.InfoUrl;
    this.Summary = array.Summary;
    this.Key = array.id;
    this.How = array.How;
    this.Where = array.Where;
    this.CardNumber = detailsArray.CardNumber;
    this.Email = detailsArray.Email;
    this.Password = detailsArray.Password;
    this.Points = detailsArray.Points;
  }

}
