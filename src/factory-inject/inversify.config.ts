
import { Kernel, IFactory } from "inversify";
import { IVehicle } from "./IVehicle";
import {IFactoryInjectTest } from "./IFactoryInjectTest";
import  Car  from "./Car";
import Truck from "./Truck";

import FactoryInjectTest from "./FactoryInjectTest";


let kernel:inversify.IKernel = new Kernel();

kernel.bind<IVehicle>("IVehicle").to(Car).whenTargetNamed("car");
kernel.bind<IVehicle>("IVehicle").to(Truck).whenTargetNamed("truck");

kernel.bind<IFactoryInjectTest>("IFactoryInjectTest").to(FactoryInjectTest).inSingletonScope();


kernel.bind<IFactory<IVehicle>>("IFactory<IVehicle>").toFactory<IVehicle>((context) => {
    return (named: string) => {
        
        if (named === "car") {
            return  context.kernel.getNamed<IVehicle>("IVehicle", "car");
        } else {
            return  context.kernel.getNamed<IVehicle>("IVehicle", "truck");
        }
    }
});

export default kernel;