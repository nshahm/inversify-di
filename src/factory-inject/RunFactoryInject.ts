
import "reflect-metadata";
import  kernel  from "./inversify.config";
import { IFactoryInjectTest } from "./IFactoryInjectTest";

import { IVehicle } from "./IVehicle";

/**
 * Named binding
 */

/**
 * Invoking basic @inject
 */
console.log(kernel.getNamed<IVehicle>("IVehicle", "truck").drive());
console.log("IFactoryInjectTest (@inject IVehicle)--> " + kernel.get<IFactoryInjectTest>("IFactoryInjectTest").init());
