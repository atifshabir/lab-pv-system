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
  selector: 'app-mobile-main',
  templateUrl: './mobile-main.component.html',
  styleUrls: ['./mobile-main.component.css']
})
export class MobileMainComponent implements OnInit {

  constructor(private modalService: BsModalService, public route: ActivatedRoute, public dataService: DataService, private msgService: MessagingService, public webService: WebService)
  { }

  ngOnInit(): void {
  }

}
