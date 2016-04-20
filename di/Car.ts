/// <reference path="../node_modules/inversify/type_definitions/inversify/inversify.d.ts" />


import { IVehicle } from "./IVehicle";
import { injectable }  from "inversify";


@injectable()
export default class Car implements IVehicle {
    drive():void {
        console.log("Car --> This car supported two wheel drive");
    }   
}