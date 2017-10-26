export class Rewards {
  Currency;
  Image;
  ProviderName;
  Name;
  Ratio;
  Value;
  infoUrl;

  constructor(array, Value) {
    this.Currency = array.Currency;
    this.Image = array.Image;
    this.ProviderName = array.ProviderName;
    this.Name = array.Name;
    this.Ratio = array.Ratio;
    this.Value = Value;
    this.infoUrl = array.infoUrl;
>>>>>>> 0cf978f60688f70c236dd203748a976766091eb0
  }

}
