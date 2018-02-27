import { GoogleMapsAPIWrapper } from '@agm/core';
import { Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
declare var google: any;


@Directive({
  selector: 'appMapDirections'
})
export class MapDirectionsDirective implements OnInit, OnChanges {

  @Input() origin;
  @Input() destination;
  @Input() directionsDisplay: any;
  constructor(private gmapsApi: GoogleMapsAPIWrapper) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.gmapsApi.getNativeMap().then(map => {
      this.directionsDisplay.setMap(map);
      const directionsService = new google.maps.DirectionsService;

      directionsService.route({
        origin: { lat: this.origin.latitude, lng: this.origin.longitude },
        destination: { lat: this.destination.latitude, lng: this.destination.longitude },
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          if (this.directionsDisplay === undefined){
           this.directionsDisplay = new google.maps.DirectionsRenderer;
           this.directionsDisplay.setMap(map);
           this.directionsDisplay.setDirections(response);
           this.directionsDisplay.setOptions({
            polylineOptions: {
                        strokeWeight: 8,
                        strokeOpacity: 0.7,
                        strokeColor:  '#14CFBE'
                    },
                    suppressMarkers : true
            });
            // this.showSteps(response);
          }else{
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = new google.maps.DirectionsRenderer;
            this.directionsDisplay.setMap(map);
            this.directionsDisplay.setDirections(response);
            this.directionsDisplay.setOptions({
              polylineOptions: {
                          strokeWeight: 8,
                          strokeOpacity: 0.7,
                          strokeColor:  '#14CFBE'
                      },
                      suppressMarkers : true
              });
              // this.showSteps(response);
          }

        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    });
  }
}