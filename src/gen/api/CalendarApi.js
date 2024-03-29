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
import CalendarDTO from '../model/CalendarDTO';

/**
* Calendar service.
* @module api/CalendarApi
* @version 1.0.0
*/
export default class CalendarApi {

    /**
    * Constructs a new CalendarApi. 
    * @alias module:api/CalendarApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCalendar operation.
     * @callback module:api/CalendarApi~getCalendarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CalendarDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific user calendar.
     * This endpoint is used to get the calendar of a user
     * @param {Number} userId 
     * @param {module:api/CalendarApi~getCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CalendarDTO}
     */
    getCalendar(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getCalendar");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CalendarDTO;
      return this.apiClient.callApi(
        '/calendar/user/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCalendarUser operation.
     * @callback module:api/CalendarApi~getCalendarUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CalendarDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific user calendar.
     * This endpoint is used to get the calendar of the authenticated user
     * @param {module:api/CalendarApi~getCalendarUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CalendarDTO}
     */
    getCalendarUser(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CalendarDTO;
      return this.apiClient.callApi(
        '/calendar', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClassCalendar operation.
     * @callback module:api/CalendarApi~getClassCalendarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CalendarDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a class calendar.
     * This endpoint is used to get the calendar of a class
     * @param {Number} classId 
     * @param {module:api/CalendarApi~getClassCalendarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CalendarDTO}
     */
    getClassCalendar(classId, callback) {
      let postBody = null;
      // verify the required parameter 'classId' is set
      if (classId === undefined || classId === null) {
        throw new Error("Missing the required parameter 'classId' when calling getClassCalendar");
      }

      let pathParams = {
        'classId': classId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTSecurity'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CalendarDTO;
      return this.apiClient.callApi(
        '/calendar/class/{classId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
