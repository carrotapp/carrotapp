export class Rewards {
  Currency;
  Image;
  ProviderName;
  Name;
  Ratio;
<<<<<<< HEAD
  Value;
  MoreInfo;
  Summary;

  constructor(array, Value) {
    this.Currency = array[0].$value;
    this.Image = array[1].$value;
    this.RewardName = array[2].$value;
    this.Name = array[3].$value;
    this.Ratio = array[4].$value;
    this.Value = Value;
    this.MoreInfo = array[5].$value;
    this.Summary = array[6].$value;
=======
  // Value;
  infoUrl;

  // constructor(array, Value) {
  constructor(array) {
    this.Currency = array.Currency;
    this.Image = array.Image;
    this.ProviderName = array.ProviderName;
    this.Name = array.Name;
    this.Ratio = array.Ratio;
    // this.Value = Value;
    this.infoUrl = array.infoUrl;
>>>>>>> 0cf978f60688f70c236dd203748a976766091eb0
  }

}
