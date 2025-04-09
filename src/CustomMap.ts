import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      center: { lat: 0, lng: 0 },
      zoom: 4,
    });
  }

  async addUserMarker(user: User): Promise<void> {
    this.googleMap.setCenter({ lat: user.location.lat, lng: user.location.lng });
    const latlng = this.googleMap.getCenter();
    const [lat, lng] = [latlng?.lat(), latlng?.lng()];

    console.log({ lat, lng });

    const response = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=67f67031afb2c744518634bwd4179ff`);
    const data = await response.json();
    if (!data.address) throw new Error("address is invalid");
    else console.log({ address: Object.values(data.address).join("__") });
  }

  addCompanyMarker(company: Company): void {}
}
