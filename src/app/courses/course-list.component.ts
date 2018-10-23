import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { IAppState} from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';
import { CourseActions} from './course.action';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<Course>

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private courseAction: CourseActions
    ) {

  }

  filterChanged(searchText: string) {
   // this.filteredCourses = this._filterService.filter(searchText, ['id', 'name', 'topic'], this.courses);
   // store.dispatch(filterCourses(searchText));
    this.courseAction.filterCourses(searchText);
  }

  // getCourses() {
  //   this._courseService.getCourses()
  //     .subscribe(courses => {
  //       this.courses = this.filteredCourses = courses;
  //     });
  // }

  // updateFromState(){
  //   const allState = store.getState();
  //   this.filteredCourses = allState.filteredCourses;
  // } 


  ngOnInit() {
    // this.updateFromState();
    // store.subscribe(() =>{
    //   this.updateFromState();
    // })
    this.courseAction.getCourses();
    componentHandler.upgradeDom();
  }
}
