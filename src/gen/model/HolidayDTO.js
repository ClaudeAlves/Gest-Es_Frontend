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
 * The HolidayDTO model module.
 * @module model/HolidayDTO
 * @version 1.0.0
 */
class HolidayDTO {
    /**
     * Constructs a new <code>HolidayDTO</code>.
     * @alias module:model/HolidayDTO
     */
    constructor() { 
        
        HolidayDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HolidayDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HolidayDTO} obj Optional instance to populate.
     * @return {module:model/HolidayDTO} The populated <code>HolidayDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HolidayDTO();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * begin of the holiday
 * @member {Date} start
 */
HolidayDTO.prototype['start'] = undefined;

/**
 * end of the holiday
 * @member {Date} end
 */
HolidayDTO.prototype['end'] = undefined;

/**
 * description of the holiday
 * @member {String} text
 */
HolidayDTO.prototype['text'] = undefined;






export default HolidayDTO;

