
import { IVehicle } from "./IVehicle";
import { injectable }  from "inversify";


@injectable()
export default class Car implements IVehicle {
    drive(): string {
        return "Drive Car --> Car instance";
    }   
}