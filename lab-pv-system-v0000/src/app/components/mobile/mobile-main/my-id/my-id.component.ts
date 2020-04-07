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

  onClick_BtnStart() {
    var elementBtnMyPvID = document.getElementById("btnMyPvID")! as HTMLInputElement;
    var elementMyPvID = document.getElementById("myPvID")! as HTMLInputElement;
    console.log("Atif kya hai?");
    elementBtnMyPvID.innerHTML = "Started";
    this.usersPvID = Number(elementMyPvID.value);
    console.log("MyPV ID is", this.usersPvID);
    this.dataService.myPvID = this.usersPvID;
  }

  ngOnInit(): void {
  }

}
