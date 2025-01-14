/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { File } from './file';

export const protobufPackage = 'course';

export interface SetCourseFileRequest {
  courseId: number;
  fileIds: number[];
}

export interface SetCourseFileResponse {
  course: Course;
  files: File[];
}

export interface PaginationRequest {
  page: number;
  skip: number;
}

export interface CreateCourseRequest {
  courseName: string;
  price: number;
  duration: number;
}

export interface CreateCourseResponse {
  data: Course;
  errorStatus: number;
  errorMessage: string;
}

export interface UpdateCourseRequest {
  id: number;
  courseName?: string;
  price?: number;
  duration?: number;
}

export interface FindOneCourseRequest {
  id: number;
}

export interface Course {
  id: number;
  courseName: string;
  price: number;
  duration: number;
}

export interface Courses {
  courses: Course[];
}

export interface Empty {}

export const COURSE_PACKAGE_NAME = 'course';

export interface CourseServiceClient {
  createCourse(request: CreateCourseRequest): Observable<CreateCourseResponse>;

  findAllCourses(request: Empty): Observable<Courses>;

  findOneCourse(
    request: FindOneCourseRequest,
  ): Observable<CreateCourseResponse>;

  updateCourse(request: UpdateCourseRequest): Observable<CreateCourseResponse>;

  removeCourse(request: FindOneCourseRequest): Observable<CreateCourseResponse>;

  queryCourse(
    request: Observable<PaginationRequest>,
  ): Observable<CreateCourseResponse>;

  setCourseFile(
    request: SetCourseFileRequest,
  ): Observable<SetCourseFileResponse>;

  removeFilesFromCourse(
    request: SetCourseFileRequest,
  ): Observable<SetCourseFileResponse>;
}

export interface CourseServiceController {
  createCourse(
    request: CreateCourseRequest,
  ):
    | Promise<CreateCourseResponse>
    | Observable<CreateCourseResponse>
    | CreateCourseResponse;

  findAllCourses(
    request: Empty,
  ): Promise<Courses> | Observable<Courses> | Courses;

  findOneCourse(
    request: FindOneCourseRequest,
  ):
    | Promise<CreateCourseResponse>
    | Observable<CreateCourseResponse>
    | CreateCourseResponse;

  updateCourse(
    request: UpdateCourseRequest,
  ):
    | Promise<CreateCourseResponse>
    | Observable<CreateCourseResponse>
    | CreateCourseResponse;

  removeCourse(
    request: FindOneCourseRequest,
  ):
    | Promise<CreateCourseResponse>
    | Observable<CreateCourseResponse>
    | CreateCourseResponse;

  queryCourse(
    request: Observable<PaginationRequest>,
  ): Observable<CreateCourseResponse>;

  setCourseFile(
    request: SetCourseFileRequest,
  ):
    | Promise<SetCourseFileResponse>
    | Observable<SetCourseFileResponse>
    | SetCourseFileResponse;

  removeFilesFromCourse(
    request: SetCourseFileRequest,
  ):
    | Promise<SetCourseFileResponse>
    | Observable<SetCourseFileResponse>
    | SetCourseFileResponse;
}

export function CourseServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createCourse',
      'findAllCourses',
      'findOneCourse',
      'updateCourse',
      'removeCourse',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('CourseService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = ['queryCourse'];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('CourseService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const COURSE_SERVICE_NAME = 'CourseService';
