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
 * The PeriodDTO model module.
 * @module model/PeriodDTO
 * @version 1.0.0
 */
class PeriodDTO {
    /**
     * Constructs a new <code>PeriodDTO</code>.
     * @alias module:model/PeriodDTO
     */
    constructor() { 
        
        PeriodDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PeriodDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeriodDTO} obj Optional instance to populate.
     * @return {module:model/PeriodDTO} The populated <code>PeriodDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeriodDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
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
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PeriodDTO.prototype['id'] = undefined;

/**
 * @member {String} tag
 */
PeriodDTO.prototype['tag'] = undefined;

/**
 * begin of the period
 * @member {Date} start
 */
PeriodDTO.prototype['start'] = undefined;

/**
 * end of the period
 * @member {Date} end
 */
PeriodDTO.prototype['end'] = undefined;

/**
 * description of the period
 * @member {String} text
 */
PeriodDTO.prototype['text'] = undefined;






export default PeriodDTO;

