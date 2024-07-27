import { dbService } from "../services/db.service.js"
import { isLettersOnly, isNumber, isInLengthRange } from "../utils/inputValidations.util.js";
import { logError } from "../services/logger.service.js";

export const filterRequests = (query) => {
    const {name, status, employeeName: employee_name } = query;
    if(name && (!isInLengthRange(name, 1, 30))) {
        logError(`Error filtering requests - name is invalid`);
        return undefined;
    }

    if(status && (!isLettersOnly(status) || !isInLengthRange(1, 10))) {
        logError(`Error filtering requests - status is invalid`);
        return undefined;
    }

    if(employee_name && (!isLettersOnly(employee_name) || !isInLengthRange(employee_name, 1, 20))) {
        logError(`Error filtering requests - employee name is invalid`);
        return undefined;
    }

    return dbService.filter({name, status, employee_name });
}

export const getRequest = (id) => {
    if (!isNumber(id)) { 
        logError(`${id} is not a number`);
        return undefined; 
    }
    return dbService.get(Number(id));
}

export const addRequest = (request) => {
    if(!isInLengthRange(request.name, 1, 30)) {
        logError(`Error adding request - name is invalid`);
        return undefined;
    }

    if(!isInLengthRange(request.description, 1, 100)) {
        logError(`Error adding request - description is invalid`);
        return undefined;
    }

    if(!isLettersOnly(request.employee_name) || !isInLengthRange(request.employee_name, 1, 20)) {
        logError(`Error adding request - employee name is invalid`);
        return undefined;
    }
    return dbService.add(request);
}

export const updateRequest = (id, updateParams) => {
    if (!isNumber(id)) { 
        logError(`${id} is not a number`)
        return undefined; 
    }
    return dbService.set(Number(id), updateParams)
}