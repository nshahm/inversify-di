/// <reference path="../node_modules/inversify/type_definitions/inversify/inversify.d.ts" />

import {injectable , inject}  from "inversify";

import { IVehicle } from "./IVehicle";

import { ITest } from "./ITest";

@injectable()
export default class Test implements ITest {
    private _vehicle:IVehicle;
    
     constructor(@inject("IVehicle") vehicle:IVehicle) {
         this._vehicle = vehicle;
         
         console.log("from test" + this._vehicle);
     }
    
    init() {
        this._vehicle.drive();
    }
}
