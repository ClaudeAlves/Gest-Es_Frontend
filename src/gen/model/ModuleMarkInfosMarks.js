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
 * The ModuleMarkInfosMarks model module.
 * @module model/ModuleMarkInfosMarks
 * @version 1.0.0
 */
class ModuleMarkInfosMarks {
    /**
     * Constructs a new <code>ModuleMarkInfosMarks</code>.
     * @alias module:model/ModuleMarkInfosMarks
     */
    constructor() { 
        
        ModuleMarkInfosMarks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModuleMarkInfosMarks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModuleMarkInfosMarks} obj Optional instance to populate.
     * @return {module:model/ModuleMarkInfosMarks} The populated <code>ModuleMarkInfosMarks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModuleMarkInfosMarks();

            if (data.hasOwnProperty('studentName')) {
                obj['studentName'] = ApiClient.convertToType(data['studentName'], 'String');
            }
            if (data.hasOwnProperty('marks')) {
                obj['marks'] = ApiClient.convertToType(data['marks'], ['Number']);
            }
            if (data.hasOwnProperty('moduleMean')) {
                obj['moduleMean'] = ApiClient.convertToType(data['moduleMean'], 'Number');
            }
            if (data.hasOwnProperty('marksUnderMean')) {
                obj['marksUnderMean'] = ApiClient.convertToType(data['marksUnderMean'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} studentName
 */
ModuleMarkInfosMarks.prototype['studentName'] = undefined;

/**
 * @member {Array.<Number>} marks
 */
ModuleMarkInfosMarks.prototype['marks'] = undefined;

/**
 * @member {Number} moduleMean
 */
ModuleMarkInfosMarks.prototype['moduleMean'] = undefined;

/**
 * @member {String} marksUnderMean
 */
ModuleMarkInfosMarks.prototype['marksUnderMean'] = undefined;






export default ModuleMarkInfosMarks;
