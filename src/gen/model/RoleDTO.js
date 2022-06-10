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
 * The RoleDTO model module.
 * @module model/RoleDTO
 * @version 1.0.0
 */
class RoleDTO {
    /**
     * Constructs a new <code>RoleDTO</code>.
     * @alias module:model/RoleDTO
     */
    constructor() { 
        
        RoleDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoleDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleDTO} obj Optional instance to populate.
     * @return {module:model/RoleDTO} The populated <code>RoleDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
RoleDTO.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RoleDTO.prototype['name'] = undefined;






export default RoleDTO;
