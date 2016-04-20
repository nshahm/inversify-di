/// <reference path="../node_modules/inversify/type_definitions/inversify/inversify.d.ts" />


import { IVehicle } from "./IVehicle";
import  { injectable } from "inversify";

@injectable()
export default class Truck implements IVehicle {
    drive():void {
        console.log("Truck --> This is a heavy vehicle drive");
    }   
}