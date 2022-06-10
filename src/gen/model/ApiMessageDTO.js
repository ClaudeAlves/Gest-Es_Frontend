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
 * The ApiMessageDTO model module.
 * @module model/ApiMessageDTO
 * @version 1.0.0
 */
class ApiMessageDTO {
    /**
     * Constructs a new <code>ApiMessageDTO</code>.
     * @alias module:model/ApiMessageDTO
     */
    constructor() { 
        
        ApiMessageDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiMessageDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiMessageDTO} obj Optional instance to populate.
     * @return {module:model/ApiMessageDTO} The populated <code>ApiMessageDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiMessageDTO();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} code
 */
ApiMessageDTO.prototype['code'] = undefined;

/**
 * @member {String} type
 */
ApiMessageDTO.prototype['type'] = undefined;

/**
 * @member {String} message
 */
ApiMessageDTO.prototype['message'] = undefined;






export default ApiMessageDTO;
