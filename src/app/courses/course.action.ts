import { NgRedux } from "ng2-redux";
import {IAppState} from '../store'
import { Injectable } from "@angular/core";
import {CourseService} from './course.service'
export const FILTER_COURSES = 'FILTER_COURSES';
export const REQUEST_COURSES_SUCCESS = 'REQUEST_COURSES_SUCCESS';


@Injectable()
export class CourseActions{

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private CourseSvr : CourseService,
  ){}

  getCourses(){
    this.CourseSvr.getCourses()
      .subscribe( courses =>
        {
          this.ngRedux.dispatch({
            type: REQUEST_COURSES_SUCCESS,
            courses
          })
        }
      )
  }

  filterCourses(searchText: string){
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText, 
    })
  }
}