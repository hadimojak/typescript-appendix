import { faker } from "@faker-js/faker";
import { mappable } from "./CustomMap";
export class User implements mappable {
  name: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
