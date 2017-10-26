export class Rewards {
  Currency;
  Image;
  RewardName;
  Name;
  Ratio;
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
  }

}
