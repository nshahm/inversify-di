
import { IVehicle } from "./IVehicle";
import  { injectable } from "inversify";

@injectable()
export default class Truck implements IVehicle {
    drive(): string {
        return "Drive Truck --> Truck instance";
    }   
}