import {map} from 'rxjs/operator/map';
import createHelper from './createHelper';
import withObs from './withObs';

const mapProps = propsMapper => withObs(({props$}) => ({props$: props$::map(propsMapper)}));

export default createHelper(mapProps, 'mapProps');