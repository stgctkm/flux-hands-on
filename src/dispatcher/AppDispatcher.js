/**
 * Created by setoguchi on 1/25/17.
 */
import {Dispatcher} from 'flux';

//簡略化のために、fluxのDispatcherをimportしてexport
//Dispatcherはstore,view両方から参照されるので、ここでnewする

const dispatcher = new Dispatcher();
export default dispatcher;
