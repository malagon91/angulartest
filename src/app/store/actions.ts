export const FILTER_COURSES = 'FILTER_COURSES';

export function filterCourses(searchText: string){
  return {
    type: FILTER_COURSES,
    searchText, 
  }
}