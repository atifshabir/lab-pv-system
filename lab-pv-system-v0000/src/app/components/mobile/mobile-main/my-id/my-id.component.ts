import { Component, OnInit } from '@angular/core';
import { ViewChild, TemplateRef, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LabMachineInfo } from 'src/app/models/lab-machine-info';
import { PVInfo } from 'src/app/models/model.pv-info';
import { EGCR_Info } from 'src/app/models/model.egcr-info';
import { DataService } from 'src/app/serrvices/data.service';
import { MessagingService } from 'src/app/serrvices/messaging.service';
import { WebService } from 'src/app/serrvices/web.service';
@Component({
  selector: 'app-my-id',
  templateUrl: './my-id.component.html',
  styleUrls: ['./my-id.component.css']
})
export class MyIdComponent implements OnInit {

  constructor(private modalService: BsModalService, public route: ActivatedRoute, public dataService: DataService, private msgService: MessagingService, public webService: WebService) {
  }

  usersPvID: number = 0;
  pvIDIsValid: Boolean = false;

  onClick_BtnStart() {
    var elementBtnMyPvID = document.getElementById("btnMyPvID")! as HTMLInputElement;
    var elementMyPvID = document.getElementById("myPvID")! as HTMLInputElement;
    console.log("Atif kya hai?");
    elementBtnMyPvID.innerHTML = "Started";
    this.usersPvID = Number(elementMyPvID.value);
    console.log("MyPV ID is", this.usersPvID);
    this.validateEnteredPvID();
  }

  ngOnInit(): void {
  }

  //A list of pv will be got from the server so that the entered ID could be verified
  validateEnteredPvID(){
    var elementInvalidNotif = document.getElementById("invalidIdNotif")! as HTMLInputElement;

    this.dataService.getPvInfo().subscribe(
      data=>{
        const pvs = data.data;
        pvs.forEach(pv => {
          //this.pvInfo.push(new PVInfo(pv.pv_id, pv.lat, pv.lon, pv.lab_id, pv.lab_order));
          console.log("AtifPvIDValidate: ", pv.pv_id, ",", this.usersPvID);
          if(pv.pv_id == this.usersPvID) {
            this.pvIDIsValid = true;
          }
        });

        if(this.pvIDIsValid) {
          console.log("Valid pvID");
          this.dataService.myPvID = this.usersPvID;
        } else {
          console.log("Invalid pvID");
          elementInvalidNotif.innerText = "Invalid ID";
        }
      },
      err=>{
        console.log(err);
        //elementInvalidNotif.innerHTML=error.code-caption;
      }
    );
  }
}
