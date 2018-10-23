import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import {reducer} from './reducer';
import {IAppState} from './IAppState';

declare var window:any;

const devToolsExtension: GenericStoreEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__ ) ? 
                        window.__REDUX_DEVTOOLS_EXTENSION__ () : (f) => f;

export const store = createStore<IAppState>(reducer, 
        compose(devToolsExtension) as GenericStoreEnhancer);
