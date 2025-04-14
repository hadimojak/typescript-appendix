import { User } from "./User";
import { Company } from "./Company";
import * as L from "leaflet";

interface mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private map: L.Map;

  constructor(divId: string) {
    this.map = L.map(divId);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    this.map.setView([0, 0], 2);
  }

  public async addMarker(input: mappable): Promise<void> {
    const [lat, lng] = [input.location.lat, input.location.lng];
    L.marker([lat, lng]).addTo(this.map);
    this.map.setView([lat, lng], 13);

    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
    const data = await response.json();
    if (data.error) throw new Error(input.constructor.name + " address is invalid");
    else console.log(`user location:  ${Object.values(data.address).join()}`);
  }

}
