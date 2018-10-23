import { NgRedux } from "ng2-redux";
import {IAppState} from '../store'
import { Injectable } from "@angular/core";
export const FILTER_COURSES = 'FILTER_COURSES';


@Injectable()
export class CourseActions{

  constructor(
    private ngRedux: NgRedux<IAppState>
  ){}

  filterCourses(searchText: string){
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText, 
    })
  }
}