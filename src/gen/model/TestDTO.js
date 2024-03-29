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
 * The TestDTO model module.
 * @module model/TestDTO
 * @version 1.0.0
 */
class TestDTO {
    /**
     * Constructs a new <code>TestDTO</code>.
     * @alias module:model/TestDTO
     */
    constructor() { 
        
        TestDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestDTO} obj Optional instance to populate.
     * @return {module:model/TestDTO} The populated <code>TestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestDTO();

            if (data.hasOwnProperty('courseId')) {
                obj['courseId'] = ApiClient.convertToType(data['courseId'], 'Number');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('weighting')) {
                obj['weighting'] = ApiClient.convertToType(data['weighting'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} courseId
 */
TestDTO.prototype['courseId'] = undefined;

/**
 * begin of the period
 * @member {Date} start
 */
TestDTO.prototype['start'] = undefined;

/**
 * end of the period
 * @member {Date} end
 */
TestDTO.prototype['end'] = undefined;

/**
 * description of the test
 * @member {String} text
 */
TestDTO.prototype['text'] = undefined;

/**
 * @member {Number} weighting
 */
TestDTO.prototype['weighting'] = undefined;






export default TestDTO;

