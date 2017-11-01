export class Rewards {
  Currency;
  Image;
  ProviderName;
  Name;
  Ratio;
  Value;
  infoUrl;
  summary;

  constructor(array, Value) {
    this.Currency = array.Currency;
    this.Image = array.Image;
    this.ProviderName = array.ProviderName;
    this.Name = array.Name;
    this.Ratio = array.Ratio;
    this.Value = Value;
    this.infoUrl = array.infoUrl;
    this.summary = array.summary;
  }

}
