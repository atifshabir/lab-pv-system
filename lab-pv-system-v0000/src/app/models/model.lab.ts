export class Lab{
    LAB_ID: Number; //Unique ID for each lab
    Lat: Number; //Latitude for google maps
    Lon: Number; //Longitute for google maps
    City: String; //City where the lab is installed
    Area: String; //Area of the city where the lab is installed
    Phase: String; //Phase of the area
    St: String; //Street of the area
    S_ST: String; //Sub street
    Building: String; //Building number
    Floor: String; //Floor of the building
}
export class LabInfoToMarker{
    LAB_ID: Number;
    labInfoMarker: google.maps.Marker;

    constructor(_labID: Number, _labInfoMarker: google.maps.Marker) {
        this.LAB_ID = _labID;
        this.labInfoMarker =_labInfoMarker;
    }
}