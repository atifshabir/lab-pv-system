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
    
    this.dataService.getMyMachineInfo({
      hss_id: "ab:cd:ef:01:23:45",
      lab_id: Number(elementInpMyMachineID.value),
      monitor: 1,
      lastUpdatedBy: "lca"
    }).subscribe( async data=>{
      console.log("myMachine info is");
      console.log(data);
      const machine = data.data;
      console.log(machine.lab_id);
      console.log(machine.monitor);
      //console.log(data.monitors)
      var notificationTitle = "New PV Assignment";
      var notificationBody = "Process Validation (PV) ID: "+data.data.pv_id+" has been assigned to LAB ID: "+ data.data.lab_id
      //this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
    });

    /*
    this.dataService.updateMachineInfo({
      hss_id: "ab:cd:ef:01:23:45",
      lab_id: Number(elementInpMyMachineID.value),
      monitor: 1,
      lastUpdatedBy: "lca"
    }).subscribe( async data=>{
      console.log(data);
      var notificationTitle = "New PV Assignment";
      var notificationBody = "Process Validation (PV) ID: "+data.data.pv_id+" has been assigned to LAB ID: "+ data.data.lab_id
      //this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
    });
    */
    
    /*
    this.dataService.DeleteMachineInfo({
      hss_id: "ad:01:cd:33:43:56"
    }).subscribe( async data=>{
      console.log(data);
    });
    */

    /*
    this.dataService.DeletePVInfo({
      pv_id: Number(elementInpMyMachineID.value)
    }).subscribe( async data=>{
      console.log(data);
    });
    */
    
   /*
   this.dataService.DeleteLabInfo({
    lab_id: Number(elementInpMyMachineID.value),
    lat: 2.2,
    lon: 5.6,
    city: "abcd",
    area: "def",
    phase: "ghi",
    st: "jkl",
    s_st: "mno",
    building: "pqr",
    floor: "stu"
  }).subscribe( async data=>{
    console.log(data);
  });
  */

  /*
   this.dataService.updateLabInfo({
    lab_id: Number(elementInpMyMachineID.value),
    lat: 2.2,
    lon: 5.6,
    city: "abcd",
    area: "def",
    phase: "ghi",
    st: "jkl",
    s_st: "mno",
    building: "pqr",
    floor: "stu"
  }).subscribe( async data=>{
    console.log(data);
  });
  */
/*
   this.dataService.updatePvInfo({
    pv_id: Number(elementInpMyMachineID.value),
    lab_id: 0,
    lat: 3.5,
    lon: 6.4,
    lab_order: "CCR"
  }).subscribe( async data=>{
    console.log(data);
  });
  */

/*
   this.dataService.AddLabInfo({
    lab_id: Number(elementInpMyMachineID.value),
    lat: 2.2,
    lon: 5.6,
    city: "abcd",
    area: "def",
    phase: "ghi",
    //st: "jkl",
    s_st: "mno",
    building: "pqr",
    floor: "stu"
  }).subscribe( async data=>{
    console.log(data);
  });
  */
    
  /*
    this.dataService.AddMachineInfo({
      hss_id: "12:21:34:ab:ca:de",
      lab_id: Number(elementInpMyMachineID.value)
      
    }).subscribe( async data=>{
      console.log(data);
    });
    */

    /*
    this.dataService.AddPVInfo({
      lat: 2.3,
      lon: 5.4,
      lab_id: 0,
      lab_order: "CCR"
      
    }).subscribe( async data=>{
      console.log(data);
    });
    */
  }

  onClick_BtnUnlock() {
    console.log("Unlock button pressed");
    var elementInpMyMachineID = document.getElementById("myMachineID")! as HTMLInputElement;
    this.dataService.updateMachineInfo({
      hss_id: "ab:cd:ef:01:23:45",
      lab_id: Number(elementInpMyMachineID.value),
      pr1: 0,
      pr2: 0,
      dr1: 0,
      dr2: 0,
      ss: 0,
      monitor: 0,
      lastUpdatedBy: "lca"
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
    var elementInpMyPR1 = document.getElementById("myPR1")! as HTMLInputElement;
    this.dataService.updateMachineInfo({
      hss_id: "ab:cd:ef:01:23:45",
      lab_id: Number(elementInpMyMachineID.value),
      pr1: Number(elementInpMyPR1.value),
      pr2: 0,
      dr1: 0,
      dr2: 0,
      ss: 0,
      monitor: 0,
      lastUpdatedBy: "devcom"
    }).subscribe( async data=>{
      //console.log(data);
      var notificationTitle = "New PV Assignment";
      var notificationBody = "Process Validation (PV) ID: "+data.data.pv_id+" has been assigned to LAB ID: "+ data.data.lab_id
      //this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
    });
  }
}
