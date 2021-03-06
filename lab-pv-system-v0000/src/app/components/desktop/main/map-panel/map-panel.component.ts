import { LabInfoToMarker } from './../../../../models/model.lab';
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
import { MapPanelParams } from 'src/app/components/desktop/main/map-panel/map-panel-params';
import { PVInfoToMarker } from 'src/app/models/model.pv-info';
//import { Console } from 'console';


@Component({
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})
export class MapPanelComponent implements OnInit {


  @Input() isMobile: Boolean = false;


  @ViewChild('optionTemplate') optionTemplate: any; // for option modal
  @ViewChild('infoTemplate') infoTemplate: any; // for info modal
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map // map reference for later

  // DEFAULT LAT LON OF CITY Los Angeles if no param is given
  //Lat: number = 34.0482809;
  //Lon: number = -118.2437;
  //Zoom: number = 12;
  Lat: number = 33.571735;
  Lon: number = 73.144699;
  Zoom: number = 16;
  //

  pollTime: number = 3; // time in seconds to sync with db

 
  // Data Arrays
  labMachineInfo: LabMachineInfo [] = [];
  pvInfo: PVInfo [] = [];
  egcrInfo: EGCR_Info[] = [];

  // markers on the map
  labMachineInfoMarkers: google.maps.Marker [] = [];

  pvInfoMarkers: google.maps.Marker [] = [];
  LabInfoToMarker :LabInfoToMarker [] = [];
  egcrInfoMarkers: google.maps.Marker [] = [];
  pvInfoToMarer: PVInfoToMarker [] = [];

  // from pv to labs arrows --->
  arrowPolylines: google.maps.Polyline [] = [];

  // location circle for mobile
  locationCircle: google.maps.Circle;

  //

  modalRef: BsModalRef;

  message: any;

  mapPanelParams: MapPanelParams;


  constructor(private modalService: BsModalService, public route: ActivatedRoute, public dataService: DataService, private msgService: MessagingService, public webService: WebService) {

    this.mapPanelParams = new MapPanelParams();
    //getting lat, lon and zoom from parameters if present
    this.route.params.subscribe(params => {
      if(params['lat']){
        if(params['lon']){
          this.Lat = Number(params['lat']);
          this.Lon = Number(params['lon']);
          //console.log(this.lat);
        }
        if(params['zoom']){
          this.Zoom = Number(params['zoom']);
          //console.log("zoom: "+this.Zoom);
        }
      }
    });
  }

  ngOnInit(){
    // this.map.setMapTypeId("SATELLITE");
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage;
    this.dataService.ctrlPanelMsgSrc$.subscribe(
      msg => {
        //console.log(msg);
        //alert(msg);
        this.HandleMsgFromCtrlPanelComp(msg);
      }
    )
    // this.map.setMapTypeId('terrain');
   
  }

  HandleMsgFromCtrlPanelComp(msg: String) {
    //console.log(msg);
    //alert(msg);

    if(msg == 'ShowNormalHouse') {
      this.mapPanelParams.showNormalHouse = true;
    } else if(msg == 'DontShowNormalHouse') {
      this.mapPanelParams.showNormalHouse = false;
    } else if(msg == 'ShowAlarmedHouse') {
      this.mapPanelParams.showAlarmedHouse = true;
    } else if(msg == 'DontShowAlarmedHouse') {
      this.mapPanelParams.showAlarmedHouse = false;
    } else if(msg == 'ShowNormalPV') {
      this.mapPanelParams.showNormalPV = true;
    } else if(msg == 'DontShowNormalPV') {
      this.mapPanelParams.showNormalPV = false;
    } else if(msg == 'ShowEngagedPV') {
      this.mapPanelParams.showEngagedPV = true;
    } else if(msg == 'DontShowEngagedPV') {
      this.mapPanelParams.showEngagedPV = false;
    } else if(msg == 'RecenterMap') {
      this.RecenterMap();
    } else {
      console.log("Invalid Message from ctrl-panel to map-panel: " + msg);
      alert("Invalid Message from ctrl-panel to map-panel: " + msg);
    }

    this.refreshMarkers(); //TODO: This should be placed in a good check

    /*
    console.log(this.mapPanelParams.showNormalHouse + "," +
                this.mapPanelParams.showAlarmedHouse + "," +
                this.mapPanelParams.showNormalPV + "," +
                this.mapPanelParams.showEngagedPV);
    */
  }

  RecenterMap() {
    //console.log("Going to recenter");
    this.map.setCenter({ lat: this.Lat.valueOf(), lng: this.Lon.valueOf() });
  }

  ngAfterViewInit() {
    //console.log(this.gmapElement);


    var mapProp = {
      center: new google.maps.LatLng(this.Lat, this.Lon),
      zoom: this.Zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      // mapTypeId: google.maps.MapTypeId.HYBRID
      // mapTypeId: google.maps.MapTypeId.SATELLITE
      // mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.createMarkers();


    // getting data from webService
    this.getData();
    this.dataPoll();
  }

  getDataCount: any = 0;
  updateLocAfterFreshPVData: boolean = false;
  dataPoll(){
    //console.log("pv assign: "+this.dataService.pvAssignInProgress);

    if(!this.dataService.pvAssignInProgress){
      /*
      if(this.isMobile){
        this.sendMyLocationUpdate();
      }
      */
      this.getDataCount ++;
      this.updateLocAfterFreshPVData = true;
      //console.log("Get data called ", this.getDataCount, " times");
      this.getData();
    }
    setTimeout(this.dataPoll.bind(this), this.pollTime*1000);
  }

  public invalidIDCount: number = 0;

  getLocation() {

    var elementOpts = document.getElementById("dbgAtif1")! as HTMLInputElement;

    if (navigator.geolocation) {

      console.log("Now getting loc");
      navigator.geolocation.getCurrentPosition(position => {
        console.log("loc gott");

        this.dataService.myLat = position.coords.latitude;
        this.dataService.myLon = position.coords.longitude;
      }, error => {
        console.log("loc error: ", error.message);
        //var dbgDisp = "log err " + this.dbgAtifGetLocCall.toString() + "," + error.code.toString();
        var dbgDisp = error.message;
        elementOpts.innerHTML = dbgDisp;
        //elementOpts.innerHTML = "locFail: " + error.code.toString();
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  async sendMyLocationUpdate(){

    //Get current location here and update these numbers

    //this.dataService.myLat = 34.0482809;
    //this.dataService.myLon = -118.2437;

    this.getLocation();

    //this.dataService.myLat = this.dataService.myLat + 0.001;

    var e = this.pvInfo.find(x => x.PV_ID === this.dataService.myPvID);


    if(e == null) {
      console.log("Atif_pvID. Couldnot find pvID " , this.invalidIDCount, "times");
      this.invalidIDCount ++;
      if(this.invalidIDCount > 1) {
        this.dataService.myPvID = 0;
      }
      return;
    }

    console.log("AtifLoc_02. ", this.dataService.myLat, ",", this.dataService.myLon);

    this.dataService.updatePvInfo({
      //pv_id: e.PV_ID,
      //lab_order: e.LAB_order,
      //lab_id: e.LAB_ID,
      //lat: this.dataService.myLat,
      //lon: this.dataService.myLon
      pv_id: e.PV_ID,
      lab_order: e.LAB_order,
      lab_id: e.LAB_ID,
      lat: this.dataService.myLat,
      lon: this.dataService.myLon
    }).subscribe( async data=>{
      //console.log(data);
      var notificationTitle = "New PV Assignment";
      var notificationBody = "Process Validation (PV) ID: "+data.data.pv_id+" has been assigned to LAB ID: "+ data.data.lab_id
      //this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
    });
  }

  clearData(){
    this.labMachineInfo = [];
    this.pvInfo = [];
    this.egcrInfo = [];
    this.refreshMarkers();
  }

  dbgAtifPVInfoUpdate: any = 0;
  getData(){

    this.clearData();

    //in this method we'll get data from webService from database but now I'm hard coding it for testing

    // adding to labMachineInfo Array

    /*
    this.labMachineInfo.push(new LabMachineInfo(6548265, 34.0507194, -118.2688471, "Los Angeles", "1331", "W", "7", "", "12", "1st", 0, 0, 0, 0, 0));
    this.labMachineInfo.push(new LabMachineInfo(6548266, 34.0575725, -118.2659292, "Los Angeles", "430", "S-Grand", "7", "", "142", "2nd", 1, 0, 0, 0, 0));
    this.labMachineInfo.push(new LabMachineInfo(6548267, 34.0485144, -118.2696499, "Los Angeles", "214", "Albany", "7", "", "10", "Ground", 1, 1, 1, 0, 0));
    this.labMachineInfo.push(new LabMachineInfo(6548268, 34.0444611, -118.2636114, "Los Angeles", "245", "Fifth Area", "7", "", "12", "4th", 1, 0, 1, 1, 0));*/

    this.dataService.getLabInfo().subscribe(
      data=>{
        const tempLab = data.data;
        this.dataService.getMachineInfo().subscribe(
          d => {
            const tempMachine = d.data;
            tempLab.forEach(lab => {
              tempMachine.forEach(machine => {
                //console.log(machine);
                if(lab.lab_id == machine.lab_id && machine.monitor == 1) {
                  this.labMachineInfo.push(new LabMachineInfo(lab.lab_id, lab.lat, lab.lon, lab.city, lab.area, lab.phase, lab.st, lab.s_st, lab.building, lab.floor, machine.pr1, machine.pr2, machine.dr1, machine.dr2, machine.ss));
                  //console.log("found_labmachine");
                  this.refreshMarkers();
                }
              });
            });

          }
        );
      },
      err=>{
        console.log(err);
      },
      ()=>{

      }
    );


    // adding to pvInfo array
    /*
    this.pvInfo.push(new PVInfo(90, 34.0494611, -118.2636114, 0, "CCR"));
    this.pvInfo.push(new PVInfo(91, 34.0359263, -118.2479044, 0, "CCR"));
    this.pvInfo.push(new PVInfo(92, 33.9903218, -118.2764002, 6548266, "Self"));*/

    this.dataService.getPvInfo().subscribe(
      data=>{
        const pvs = data.data;
        pvs.forEach(pv => {
          this.pvInfo.push(new PVInfo(pv.pv_id, pv.lat, pv.lon, pv.lab_id, pv.lab_order));
          this.refreshMarkers();
        });

        //Now update you PV in the database with your current location
        if(this.isMobile && this.updateLocAfterFreshPVData){
          this.sendMyLocationUpdate();
          this.updateLocAfterFreshPVData = false;
        }

       this.dbgAtifPVInfoUpdate ++;
       //console.log("PV info update.... ", this.dbgAtifPVInfoUpdate, " times")
      },
      err=>{
        console.log(err);
      }
    );


    // adding to egcrInfo array
    /*
    this.egcrInfo.push(new EGCR_Info(50, 34.0367087, -118.163447));
    */

    this.dataService.getEgcrInfo().subscribe(
      data=>{
        const egcrs = data.data;

        egcrs.forEach(egcr => {
          this.egcrInfo.push(new EGCR_Info(egcr.egcr_id, egcr.lat, egcr.lon));
          this.refreshMarkers();
        });
      }, err=>{

      }
    );


    if(this.dataService.infoPresent){

      this.labMachineInfo.forEach((lm)=>{
        if(this.dataService.selectedLabMachine != null && lm.LAB_ID == this.dataService.selectedLabMachine.LAB_ID){
          this.dataService.selectedLabMachine = lm;
        }
      });

      this.pvInfo.forEach((pv)=>{
        if(this.dataService.selectedPv != null && pv.PV_ID == this.dataService.selectedPv.PV_ID){
          this.dataService.selectedPv = pv;
        }
      });

    }

  }


  createArrowPolylines(originLat: Number, originLon: Number, desLat: Number, desLon: Number){
    // line
    var lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      strokeColor: '#700',
      fillColor: '#700',
      scale: 2
    };

    var line = new google.maps.Polyline({
      path: [{lat: originLat.valueOf(), lng: originLon.valueOf()}, {lat: desLat.valueOf(), lng: desLon.valueOf()}],
      strokeOpacity: 0,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '8px',
      }, {
        icon: {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          fillColor: "red",
          anchor: new google.maps.Point(0, -5),
          fillOpacity: 1,
          strokeOpacity: 1,
        }
      }],
      map: this.map
    });

    this.arrowPolylines.push(line);
  }


  createLabMachineInfoMarkers(){
    this.labMachineInfo.forEach((record)=>{
      var assigned = false;
      if(record.PR1 == 1 || record.PR2 == 1 || record.DR1 == 1 || record.DR2 == 1 || record.SS == 1){
        assigned = true;
      }


      var iconCfg;
      if(assigned){
        // creating red star
        if(this.mapPanelParams.showAlarmedHouse == false) {
          return;
        }
        iconCfg = {

		  url: 'assets/icons/red_alarmed_lab.png',
          anchor: new google.maps.Point(20, 20)
        };
      } else {
        // creating blue star
        if(this.mapPanelParams.showNormalHouse == false) {
          return;
        }
        iconCfg = {
		  url: 'assets/icons/green_lab.png',
          anchor: new google.maps.Point(20, 20)
        };
      }

      for(var i=0; i<this.LabInfoToMarker.length; i++) {
        if(this.LabInfoToMarker[i].LAB_ID == record.LAB_ID) {
          break;
        }
      }
      if(i < this.labMachineInfoMarkers.length) {
        // console.log(this.pvInfoToMarer[i].pvInfoMarker);
        var latLng = new google.maps.LatLng(record.Lat.valueOf(), record.Lon.valueOf());
        this.LabInfoToMarker[i].labInfoMarker.setPosition(latLng);
        this.LabInfoToMarker[i].labInfoMarker.setIcon(iconCfg);
       // this.pvInfoMarkers.splice(i, 1);
        //this.pvInfoToMarer.pop();
      } else {
      var newCreatedMarker = new google.maps.Marker({
        position: {lat: record.Lat.valueOf(), lng: record.Lon.valueOf()},
        icon: iconCfg,
        cursor: 'help',
        map: this.map,
        title: record.LAB_ID.toString()
      });

      console.log(newCreatedMarker);
        this.LabInfoToMarker.push(new LabInfoToMarker(record.LAB_ID, newCreatedMarker));
      /*
      // adding right click if it's desktop
      if(!this.isMobile){
        newCreatedMarker.addListener('rightclick', (ev)=> {
          this.openModal(this.optionTemplate);
          ev.stop();
        });
      }
      */

      newCreatedMarker.addListener('click', (ev)=> {

        if(this.dataService.pvAssignInProgress){
          this.assignPvToLab(this.dataService.pvAssignId, parseInt(newCreatedMarker.getTitle().toString()), "CCR");
          return;
        }

        var labMachineId = parseInt(newCreatedMarker.getTitle().toString());

        this.labMachineInfo.forEach((checkRec)=>{
          if(checkRec.LAB_ID.valueOf() == labMachineId){
            this.dataService.infoPresent = true;
            this.dataService.pvInfo = false;
            this.dataService.labMachineInfo = true;
            this.dataService.selectedLabMachine = checkRec;

            //console.log("found record");
          }
        })

        if(this.isMobile){
          // if it's mobile then showing info in model
          this.openModal(this.infoTemplate);
        }

        ev.stop();
      });


      this.labMachineInfoMarkers.push(newCreatedMarker);
    }
    });
  }


  createPvInfoMarkers(){

    this.pvInfo.forEach((record)=>{

      var assigned = true;
      if(record.LAB_ID.valueOf() == 0){
        assigned = false;
        //console.log("assigned = false");
      }

      var iconCfg;
// if
      if(assigned){
        // creating red triangle marker
        if(this.mapPanelParams.showEngagedPV == false) {
          return;
        }
        iconCfg = {
          url: 'assets/icons/pv_alarmed.gif',
          anchor: new google.maps.Point(20, 20)
        };

        // now creating arrow from pv to lab
        this.labMachineInfo.forEach((labMachine)=>{
          if(record.LAB_ID == labMachine.LAB_ID){
            this.createArrowPolylines(record.Lat, record.Lon, labMachine.Lat, labMachine.Lon);
          }
        });

      } else {
        // creating blue triangle marker
        if(this.mapPanelParams.showNormalPV == false) {
          return;
        }
        iconCfg = {
          url: 'assets/icons/pv.gif',
          anchor: new google.maps.Point(20, 20)
        };
      }

      for(var i=0; i<this.pvInfoToMarer.length; i++) {
        if(this.pvInfoToMarer[i].PV_ID == record.PV_ID) {
          break;
        }
      }

      console.log("pass 1, " + this.pvInfoToMarer.length + ", " +  i);
      if(i < this.pvInfoMarkers.length) {
        console.log(this.pvInfoToMarer[i].pvInfoMarker);
        var latLng = new google.maps.LatLng(record.Lat.valueOf(), record.Lon.valueOf());
        this.pvInfoToMarer[i].pvInfoMarker.setPosition(latLng);
        this.pvInfoToMarer[i].pvInfoMarker.setIcon(iconCfg);
       // this.pvInfoMarkers.splice(i, 1);
        //this.pvInfoToMarer.pop();
      } else {
        console.log("pass 11, " + this.pvInfoToMarer.length + ", " + i);

        var newCreatedMarker = new google.maps.Marker({
          position: {lat: record.Lat.valueOf(), lng: record.Lon.valueOf()},
          icon: iconCfg,
          cursor: 'help',
          map: this.map,
          title: record.PV_ID.toString()
        });

        console.log("pass 6");
        console.log(newCreatedMarker);
        this.pvInfoToMarer.push(new PVInfoToMarker(record.PV_ID, newCreatedMarker));

        if(!this.isMobile){
          // for right click if not mobile for options on PV
          newCreatedMarker.addListener('rightclick', (ev)=> {
            this.dataService.pvAssignId = parseInt(newCreatedMarker.getTitle().toString());
            this.openModal(this.optionTemplate);
            ev.stop();
          });
        }
  
        newCreatedMarker.addListener('click', (ev)=> {
  
          if(this.dataService.pvAssignInProgress){
            alert("Unabled to select PV due to assignment in progress");
            return;
          }
  
          var pvId = parseInt(newCreatedMarker.getTitle().toString());
  
          this.pvInfo.forEach((checkRec)=>{
            if(checkRec.PV_ID.valueOf() == pvId){
              this.dataService.infoPresent = true;
              this.dataService.labMachineInfo = false;
              this.dataService.pvInfo = true;
              this.dataService.selectedPv = checkRec;
  
              //console.log("found record");
            }
          })
  
          if(this.isMobile){
            // if it's mobile then showing info in model
            this.openModal(this.infoTemplate);
          }
  
          ev.stop();
        });

        this.pvInfoMarkers.push(newCreatedMarker);
      }
    });
  }

  createEgcrInfoMarkers(){

    this.egcrInfo.forEach((record)=>{
      var rectangle_marker = new google.maps.Marker({
        position: {lat: record.Lat.valueOf(), lng: record.Lon.valueOf()},
        icon:'assets/icons/egcr.gif',
        map: this.map,
        cursor: 'help',
        title: record.EGCR_ID.toString()
      });
      this.egcrInfoMarkers.push(rectangle_marker);
    })

  }


  createLocationCircle(){
    var locationCircle = new google.maps.Circle({
      strokeColor: "#003399",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#003399",
      fillOpacity: 0.35,
      map: this.map,
      center: {
        lat: this.Lat,
        lng: this.Lon
      },
      radius: 1000 * 0.7
    });
    this.map.fitBounds(locationCircle.getBounds());

    this.locationCircle = locationCircle;

  }

  createMarkers(){

    //this.createLabMachineInfoMarkers();
    //this.createPvInfoMarkers();
    this.createEgcrInfoMarkers();

    if(this.isMobile){
      this.createLocationCircle();
    }
  }


  refreshMarkers(){
    //removing old markers

    // this.labMachineInfoMarkers.forEach((e)=>{
    //   e.setMap(null);
    // });
    // this.createLabMachineInfoMarkers();

  //  this.pvInfoMarkers.forEach((e)=>{
  //    e.setMap(null);
  //  });
    // this.createPvInfoMarkers();

    // this.egcrInfoMarkers.forEach((e)=>{
    //   e.setMap(null);
    // });

    this.arrowPolylines.forEach((e)=>{
      e.setMap(null);
    });
    this.createEgcrInfoMarkers();

    // creating updated ones
    this.createLabMachineInfoMarkers();
    this.createPvInfoMarkers();
    this.createEgcrInfoMarkers();

    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  onAssignButtonClick(){
    //console.log(this.dataService.pvAssignId);
    this.modalRef.hide();

    this.pvInfo.forEach((e)=>{
      if(e.PV_ID == this.dataService.pvAssignId && e.LAB_ID != 0){
        // already assigned
        //alert("This PV is already assigned");
       // return;
       this.dataService.pvAssignInProgress = true;
      }
      else if(e.PV_ID == this.dataService.pvAssignId){
        this.dataService.pvAssignInProgress = true;
      }
    })
  }


  async assignPvToLab(PV_ID: Number, LAB_ID: Number, Mode: String){

    //console.log("assignToLabCalled: "+PV_ID+" "+LAB_ID);


    var e = this.pvInfo.find(x => x.PV_ID === PV_ID);

    //console.log(e);

    this.dataService.updatePvInfo({
      pv_id: e.PV_ID,
      lab_order: Mode,
      lab_id: LAB_ID,
      lat: e.Lat,
      lon: e.Lon
    }).subscribe( async data=>{
      //console.log(data);
      var notificationTitle = "New PV Assignment";
      var notificationBody = "Process Validation (PV) ID: "+data.data.pv_id+" has been assigned to LAB ID: "+ data.data.lab_id
      this.webService.sendNotification(notificationTitle, notificationBody).subscribe();
      this.getData();
    });


    //alert("Assigned");
    //await this.refreshMarkers();
    this.dataService.pvAssignInProgress = false;
  }



  // method to calculate distance
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  assignLabToMe(lab: LabMachineInfo){
    // now need to get PV from location of the user

    this.pvInfo.forEach((e)=>{
      //if(this.getDistanceFromLatLonInKm(e.Lat.valueOf(), e.Lon.valueOf(), this.Lat.valueOf(), this.Lon.valueOf()) < 0.5){
      console.log("Atif_AssignToMe ", e.PV_ID, ", ", this.dataService.myPvID);
      if(e.PV_ID == this.dataService.myPvID){
        this.assignPvToLab(e.PV_ID, lab.LAB_ID, "Self");
        this.modalRef.hide();
        return;
      }
    });
  }

    validationEnded(lab: LabMachineInfo){
    // now need to get PV from location of the user

    this.pvInfo.forEach((e)=>{
      //if(this.getDistanceFromLatLonInKm(e.Lat.valueOf(), e.Lon.valueOf(), this.Lat.valueOf(), this.Lon.valueOf()) < 0.5){
      console.log("Atif_InspectionEnded ", e.PV_ID, ", ", this.dataService.myPvID);
      if(e.PV_ID == this.dataService.myPvID){
        this.assignPvToLab(e.PV_ID, 0, "Self");
        this.modalRef.hide();
        return;
      }
    });
  }
}
