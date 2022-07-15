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


import ApiClient from './ApiClient';
import ApiMessageDTO from './model/ApiMessageDTO';
import CalendarDTO from './model/CalendarDTO';
import ClassDTO from './model/ClassDTO';
import CourseDTO from './model/CourseDTO';
import HolidayDTO from './model/HolidayDTO';
import LoginRequestDTO from './model/LoginRequestDTO';
import LoginSuccessDTO from './model/LoginSuccessDTO';
import MarkDTO from './model/MarkDTO';
import ModuleDTO from './model/ModuleDTO';
import PeriodDTO from './model/PeriodDTO';
import RegisterDTO from './model/RegisterDTO';
import RoleDTO from './model/RoleDTO';
import SubjectDTO from './model/SubjectDTO';
import TestDTO from './model/TestDTO';
import UserDTO from './model/UserDTO';
import UserModificationDTO from './model/UserModificationDTO';
import UserSimpleDTO from './model/UserSimpleDTO';
import AuthenticationApi from './api/AuthenticationApi';
import CalendarApi from './api/CalendarApi';
import CreationApi from './api/CreationApi';
import EvaluationApi from './api/EvaluationApi';
import OrganisationApi from './api/OrganisationApi';
import UserApi from './api/UserApi';


/**
* This_api_provides_communication_with_a_database_for_a_TB_project.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GestEsApi = require('index'); // See note below*.
* var xxxSvc = new GestEsApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GestEsApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GestEsApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GestEsApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApiMessageDTO model constructor.
     * @property {module:model/ApiMessageDTO}
     */
    ApiMessageDTO,

    /**
     * The CalendarDTO model constructor.
     * @property {module:model/CalendarDTO}
     */
    CalendarDTO,

    /**
     * The ClassDTO model constructor.
     * @property {module:model/ClassDTO}
     */
    ClassDTO,

    /**
     * The CourseDTO model constructor.
     * @property {module:model/CourseDTO}
     */
    CourseDTO,

    /**
     * The HolidayDTO model constructor.
     * @property {module:model/HolidayDTO}
     */
    HolidayDTO,

    /**
     * The LoginRequestDTO model constructor.
     * @property {module:model/LoginRequestDTO}
     */
    LoginRequestDTO,

    /**
     * The LoginSuccessDTO model constructor.
     * @property {module:model/LoginSuccessDTO}
     */
    LoginSuccessDTO,

    /**
     * The MarkDTO model constructor.
     * @property {module:model/MarkDTO}
     */
    MarkDTO,

    /**
     * The ModuleDTO model constructor.
     * @property {module:model/ModuleDTO}
     */
    ModuleDTO,

    /**
     * The PeriodDTO model constructor.
     * @property {module:model/PeriodDTO}
     */
    PeriodDTO,

    /**
     * The RegisterDTO model constructor.
     * @property {module:model/RegisterDTO}
     */
    RegisterDTO,

    /**
     * The RoleDTO model constructor.
     * @property {module:model/RoleDTO}
     */
    RoleDTO,

    /**
     * The SubjectDTO model constructor.
     * @property {module:model/SubjectDTO}
     */
    SubjectDTO,

    /**
     * The TestDTO model constructor.
     * @property {module:model/TestDTO}
     */
    TestDTO,

    /**
     * The UserDTO model constructor.
     * @property {module:model/UserDTO}
     */
    UserDTO,

    /**
     * The UserModificationDTO model constructor.
     * @property {module:model/UserModificationDTO}
     */
    UserModificationDTO,

    /**
     * The UserSimpleDTO model constructor.
     * @property {module:model/UserSimpleDTO}
     */
    UserSimpleDTO,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The CalendarApi service constructor.
    * @property {module:api/CalendarApi}
    */
    CalendarApi,

    /**
    * The CreationApi service constructor.
    * @property {module:api/CreationApi}
    */
    CreationApi,

    /**
    * The EvaluationApi service constructor.
    * @property {module:api/EvaluationApi}
    */
    EvaluationApi,

    /**
    * The OrganisationApi service constructor.
    * @property {module:api/OrganisationApi}
    */
    OrganisationApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
