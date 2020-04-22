import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serrvices/data.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  onClickChkBoxShowNormalHouse() {
    var chkBoxShowNormalHouse = document.getElementById("chkBoxShowNormalHouse")! as HTMLInputElement;
    if(chkBoxShowNormalHouse.checked == true) {
      this.dataService.sendCtrlPanelMsg('ShowNormalHouse');
    } else {
      this.dataService.sendCtrlPanelMsg('DontShowNormalHouse');
    }
  }

  onClickChkBoxShowAlarmedHouse() {
    var chkBoxShowAlarmedHouse = document.getElementById("chkBoxShowAlarmedHouse")! as HTMLInputElement;
    if(chkBoxShowAlarmedHouse.checked == true) {
      this.dataService.sendCtrlPanelMsg('ShowAlarmedHouse');
    } else {
      this.dataService.sendCtrlPanelMsg('DontShowAlarmedHouse');
    }
  }

  onClickChkBoxShowNormalPV() {
    var chkBoxShowNormalPV = document.getElementById("chkBoxShowNormalPV")! as HTMLInputElement;
    if(chkBoxShowNormalPV.checked == true) {
      this.dataService.sendCtrlPanelMsg('ShowNormalPV');
    } else {
      this.dataService.sendCtrlPanelMsg('DontShowNormalPV');
    }
  }

  onClickChkBoxShowEngagedPV() {
    var chkBoxShowEngagedPV = document.getElementById("chkBoxShowEngagedPV")! as HTMLInputElement;
    if(chkBoxShowEngagedPV.checked == true) {
      this.dataService.sendCtrlPanelMsg('ShowEngagedPV');
    } else {
      this.dataService.sendCtrlPanelMsg('DontShowEngagedPV');
    }
  }

  onClickBtnRecenter() {
    this.dataService.sendCtrlPanelMsg('RecenterMap');
  }
}
