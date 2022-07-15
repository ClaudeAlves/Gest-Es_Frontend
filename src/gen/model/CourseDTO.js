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

import ApiClient from '../ApiClient';

/**
 * The CourseDTO model module.
 * @module model/CourseDTO
 * @version 1.0.0
 */
class CourseDTO {
    /**
     * Constructs a new <code>CourseDTO</code>.
     * @alias module:model/CourseDTO
     */
    constructor() { 
        
        CourseDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CourseDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CourseDTO} obj Optional instance to populate.
     * @return {module:model/CourseDTO} The populated <code>CourseDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CourseDTO();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('periodsOfTheWeek')) {
                obj['periodsOfTheWeek'] = ApiClient.convertToType(data['periodsOfTheWeek'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CourseDTO.prototype['name'] = undefined;

/**
 * start of the course
 * @member {Date} start
 */
CourseDTO.prototype['start'] = undefined;

/**
 * end of the course
 * @member {Date} end
 */
CourseDTO.prototype['end'] = undefined;

/**
 * @member {Array.<Number>} periodsOfTheWeek
 */
CourseDTO.prototype['periodsOfTheWeek'] = undefined;






export default CourseDTO;

