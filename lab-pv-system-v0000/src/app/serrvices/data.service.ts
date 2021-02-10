import { Injectable } from '@angular/core';
import { LabMachineInfo } from '../models/lab-machine-info';
import { PVInfo } from '../models/model.pv-info';
import { WebService } from './web.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //For communication from control panel to other compononents
  private _ctrlPanelMsgSrc = new Subject<String>();
  ctrlPanelMsgSrc$ = this._ctrlPanelMsgSrc.asObservable();
  //For initial pvIDs
  myPvID: number = 0; //PV-ID of this user

  //For liveUpdatation of myPVID
  myLat: number = 34.0482809;
  myLon: number = -118.2437;

  // for info panel
  infoPresent: Boolean = false;

  selectedLabMachine: LabMachineInfo = null;
  selectedPv: PVInfo = null;

  labMachineInfo: Boolean = false;
  pvInfo: Boolean = false;


  // for assigning pv to lab
  pvAssignInProgress: Boolean = false;
  pvAssignId: Number;
  labAssignId: Number;
  //

  constructor(public webService: WebService) { }

  sendCtrlPanelMsg(msg: string) {
    this._ctrlPanelMsgSrc.next(msg);
  }

  getLabInfo(){
    return this.webService.getLabInfo();
  }

  getMachineInfo(){
    return this.webService.getMachineInfo();
  }

  getPvInfo(){
    return this.webService.getPvInfo();
  }

  getEgcrInfo(){
    return this.webService.getEgcrInfo();
  }

  updatePvInfo(pv: any){
    return this.webService.updatePvInfo(pv);
  }

  DeletePVInfo(pv: any){
    return this.webService.DeletePVInfo(pv);
  }

  AddPVInfo(pv: any){
    return this.webService.AddPVInfo(pv);
  }

  updateMachineInfo(machine: any){
    return this.webService.updateMachineInfo(machine);
  }

  DeleteMachineInfo(machine: any){
    return this.webService.DeleteMachineInfo(machine);
  }

  AddLabInfo(lab: any){
    return this.webService.AddLabInfo(lab);
  }

  updateLabInfo(lab: any){
    return this.webService.updateLabInfo(lab);
  }

  DeleteLabInfo(lab: any){
    return this.webService.DeleteLabInfo(lab);
  }

  AddMachineInfo(machine: any){
    return this.webService.AddMachineInfo(machine);
  }
}
