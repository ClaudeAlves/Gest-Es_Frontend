/**
 * Gest-ES Api
 * This api provides communication with a database for a TB project
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: claude-andre.inacioalves@heig-vd.ch
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiMessageDTO from '../model/ApiMessageDTO';
import CourseDTO from '../model/CourseDTO';
import ModuleDTO from '../model/ModuleDTO';
import SubjectDTO from '../model/SubjectDTO';

/**
* Creation service.
* @module api/CreationApi
* @version 1.0.0
*/
export default class CreationApi {

    /**
    * Constructs a new CreationApi. 
    * @alias module:api/CreationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCourse operation.
     * @callback module:api/CreationApi~createCourseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiMessageDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create course.
     * This endpoint is used to create a course.
     * @param {Object} opts Optional parameters
     * @param {module:model/CourseDTO} opts.courseDTO 
     * @param {module:api/CreationApi~createCourseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiMessageDTO}
     */
    createCourse(opts, callback) {
      opts = opts || {};
      let postBody = opts['courseDTO'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTSecurity'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiMessageDTO;
      return this.apiClient.callApi(
        '/creation/course', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createModule operation.
     * @callback module:api/CreationApi~createModuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiMessageDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create module.
     * This endpoint is used to create a module.
     * @param {Object} opts Optional parameters
     * @param {module:model/ModuleDTO} opts.moduleDTO 
     * @param {module:api/CreationApi~createModuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiMessageDTO}
     */
    createModule(opts, callback) {
      opts = opts || {};
      let postBody = opts['moduleDTO'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTSecurity'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiMessageDTO;
      return this.apiClient.callApi(
        '/creation/module', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSubject operation.
     * @callback module:api/CreationApi~createSubjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiMessageDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create subject.
     * This endpoint is used to create a subject.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubjectDTO} opts.subjectDTO 
     * @param {module:api/CreationApi~createSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiMessageDTO}
     */
    createSubject(opts, callback) {
      opts = opts || {};
      let postBody = opts['subjectDTO'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTSecurity'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiMessageDTO;
      return this.apiClient.callApi(
        '/creation/subject', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
