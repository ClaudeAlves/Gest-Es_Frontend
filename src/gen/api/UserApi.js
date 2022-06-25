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
import UserDTO from '../model/UserDTO';
import UserModificationDTO from '../model/UserModificationDTO';
import UserSimpleDTO from '../model/UserSimpleDTO';

/**
* User service.
* @module api/UserApi
* @version 1.0.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiMessageDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a specific user.
     * This private endpoint is used to remove one user.
     * @param {String} username 
     * @param {module:api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiMessageDTO}
     */
    deleteUser(username, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteUser");
      }

      let pathParams = {
        'username': username
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
      let returnType = ApiMessageDTO;
      return this.apiClient.callApi(
        '/users/{username}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUsers operation.
     * @callback module:api/UserApi~deleteUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiMessageDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all users.
     * This private endpoint is used to remove all users.
     * @param {module:api/UserApi~deleteUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiMessageDTO}
     */
    deleteUsers(callback) {
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
      let returnType = ApiMessageDTO;
      return this.apiClient.callApi(
        '/admin/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific user.
     * This private endpoint is used to get one user.
     * @param {String} username 
     * @param {module:api/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDTO}
     */
    getUser(username, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUser");
      }

      let pathParams = {
        'username': username
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
      let returnType = UserDTO;
      return this.apiClient.callApi(
        '/users/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UserApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserSimpleDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users.
     * This private endpoint is used to get all users.
     * @param {module:api/UserApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserSimpleDTO>}
     */
    getUsers(callback) {
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
      let returnType = [UserSimpleDTO];
      return this.apiClient.callApi(
        '/admin/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific user.
     * This private endpoint is used to modify one user.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/UserModificationDTO} opts.userModificationDTO 
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDTO}
     */
    updateUser(username, opts, callback) {
      opts = opts || {};
      let postBody = opts['userModificationDTO'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateUser");
      }

      let pathParams = {
        'username': username
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
      let returnType = UserDTO;
      return this.apiClient.callApi(
        '/users/{username}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
