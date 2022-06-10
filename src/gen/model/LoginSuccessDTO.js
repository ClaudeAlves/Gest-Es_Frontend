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
 * The LoginSuccessDTO model module.
 * @module model/LoginSuccessDTO
 * @version 1.0.0
 */
class LoginSuccessDTO {
    /**
     * Constructs a new <code>LoginSuccessDTO</code>.
     * @alias module:model/LoginSuccessDTO
     */
    constructor() { 
        
        LoginSuccessDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginSuccessDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginSuccessDTO} obj Optional instance to populate.
     * @return {module:model/LoginSuccessDTO} The populated <code>LoginSuccessDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginSuccessDTO();

            if (data.hasOwnProperty('jwt')) {
                obj['jwt'] = ApiClient.convertToType(data['jwt'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} jwt
 */
LoginSuccessDTO.prototype['jwt'] = undefined;

/**
 * @member {String} username
 */
LoginSuccessDTO.prototype['username'] = undefined;

/**
 * @member {Array.<String>} roles
 */
LoginSuccessDTO.prototype['roles'] = undefined;






export default LoginSuccessDTO;
