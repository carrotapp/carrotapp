export class Rewards {
  Currency;
  Image;
  ProviderName;
  Name;
  Ratio;
  Value;
  infoUrl;
  summary;

  //On details Array
  CardNumber;
  Email;
  Password;
  Points;


  constructor(array, Value, detailsArray) {
    this.Currency = array.Currency;
    this.Image = array.Image;
    this.ProviderName = array.ProviderName;
    this.Name = array.Name;
    this.Ratio = array.Ratio;
    this.Value = Value;
    this.infoUrl = array.infoUrl;
    this.summary = array.summary;

    //Details
    this.CardNumber = detailsArray.CardNumber;
    this.Email = detailsArray.Email;
    this.Password = detailsArray.Password;
    this.Points = detailsArray.Points;
  }

}
