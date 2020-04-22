export class MapPanelParams {
  public showNormalHouse: boolean; //show/don't show a normal house on map
  public showAlarmedHouse: boolean; //show/don't show an alarmed house on map
  public showNormalPV: boolean; //show/don't show a normal PV on map
  public showEngagedPV: boolean; //show/don't show an engaged PV on map

  constructor(){
      this.showNormalHouse = true;
      this.showAlarmedHouse = true;
      this.showNormalPV = true;
      this.showEngagedPV = true;
  }
}
