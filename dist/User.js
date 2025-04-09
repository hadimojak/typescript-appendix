"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker_1 = require("@faker-js/faker");
class User {
    constructor() {
        this.name = faker_1.faker.person.fullName();
        this.location = {
            lat: faker_1.faker.location.latitude(),
            lng: faker_1.faker.location.longitude(),
        };
    }
}
exports.User = User;
