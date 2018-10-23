import { Course } from './../courses/course';
import { IAppState } from './IAppState';

const initialState: IAppState = {
  courses: [
    {
      "id": 1, 
      "name": "Building Apps with React (local)",
      "topic": "Reactjs"
    },
    {
      "id": 2, 
      "name": "Building Apps with angular (local)",
      "topic": "AngularJs"
    },
    {
      "id": 3, 
      "name": "Building Apps with angular and redux dd (local)",
      "topic": "Angular and Redux dd"
    },
  ]
};

export function reducer(state= initialState,action){
    return  state;
}


