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
 * The GradeDTO model module.
 * @module model/GradeDTO
 * @version 1.0.0
 */
class GradeDTO {
    /**
     * Constructs a new <code>GradeDTO</code>.
     * @alias module:model/GradeDTO
     */
    constructor() { 
        
        GradeDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GradeDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GradeDTO} obj Optional instance to populate.
     * @return {module:model/GradeDTO} The populated <code>GradeDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GradeDTO();

            if (data.hasOwnProperty('courseName')) {
                obj['courseName'] = ApiClient.convertToType(data['courseName'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} courseName
 */
GradeDTO.prototype['courseName'] = undefined;

/**
 * @member {Number} value
 */
GradeDTO.prototype['value'] = undefined;






export default GradeDTO;
