import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serrvices/data.service';

@Component({
  selector: 'app-lca-main',
  templateUrl: './lca-main.component.html',
  styleUrls: ['./lca-main.component.css']
})
export class LcaMainComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  onClick_BtnLock() {
    console.log("Lock button pressed");
    var elementInpMyMachineID = document.getElementById("myMachineID")! as HTMLInputElement;
    this.dataService.updateMachineInfo({
      lab_id: Number(elementInpMyMachineID.value),
      pr1: 0,
      pr2: 0,
      dr1: 0,
      dr2: 0,
      ss: 0,
      monitor: 1
    }).subscribe( async data=>{
      //console.log(data);
      var notificationTitle = "New PV Assignment";
      var notificationBody = "Process Validation (PV) ID: "+data.data.pv_id+" has been assigned to LAB ID: "+ data.data.lab_id
      //this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
    });
  }

  onClick_BtnUnlock() {
    console.log("Unlock button pressed");
    var elementInpMyMachineID = document.getElementById("myMachineID")! as HTMLInputElement;
    this.dataService.updateMachineInfo({
      lab_id: Number(elementInpMyMachineID.value),
      pr1: 0,
      pr2: 0,
      dr1: 0,
      dr2: 0,
      ss: 0,
      monitor: 0
    }).subscribe( async data=>{
      //console.log(data);
      var notificationTitle = "New PV Assignment";
      var notificationBody = "Process Validation (PV) ID: "+data.data.pv_id+" has been assigned to LAB ID: "+ data.data.lab_id
      //this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
    });
  }

  onClick_BtnTrigger() {
    console.log("Trigger button pressed");
    var elementInpMyMachineID = document.getElementById("myMachineID")! as HTMLInputElement;
    this.dataService.updateMachineInfo({
      lab_id: Number(elementInpMyMachineID.value),
      pr1: 1,
      pr2: 0,
      dr1: 0,
      dr2: 0,
      ss: 0,
      monitor: 1
    }).subscribe( async data=>{
      //console.log(data);
      var notificationTitle = "New PV Assignment";
      var notificationBody = "Process Validation (PV) ID: "+data.data.pv_id+" has been assigned to LAB ID: "+ data.data.lab_id
      //this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
    });
  }
}
