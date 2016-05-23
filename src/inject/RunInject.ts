
import "reflect-metadata";
import  kernel  from "./inversify.config";
import { IInjectTest } from "./IInjectTest";


import { IVehicle } from "./IVehicle";


/**
 * Invoking basic @inject
 */
console.log(kernel.get<IVehicle>("IVehicle").drive());
console.log("IInjectTest (@inject IVehicle)--> " + kernel.get<IInjectTest>("IInjectTest").init());
