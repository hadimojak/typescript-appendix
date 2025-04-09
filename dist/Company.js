"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = require("@faker-js/faker");
class Company {
    constructor() {
        this.companyName = faker_1.faker.company.name();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = { lat: faker_1.faker.location.latitude(), lng: faker_1.faker.location.longitude() };
    }
}
exports.Company = Company;
