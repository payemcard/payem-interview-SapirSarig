import dbMock from "../db.js"
import { logError } from "../services/logger.service.js";

export const dbService = {
    add: (item) => {
        item.id = dbMock.nextId; // Assign the next available ID
        item.created_at = new Date();
        dbMock.db.push(item);
        dbMock.nextId++; // Increment the next ID for the next entry
        return item;
    },
    getAll: () => dbMock.db,
    get: (id) => dbMock.db.find(item => item.id === id),
    set: (id, params) => {
      const index = dbMock.db.findIndex(item => item.id === id);
      if (index === -1) {
        logError(`Error setting item - item #${id} not found`) 
        return undefined;
      }
      const item = dbMock.db[index];
      const updatedItem = {
        ...item,
        ...params,
        updated_at: new Date()
      }
      dbMock.db[index] = updatedItem;
      return updatedItem;
    },
    filter: (obj) => dbMock.db.filter(item => {
        return Object.keys(obj).every(key => {
            const value = obj?.[key]?.toString()?.toLowerCase();
            if (!value) return true;
            const itemValue = item?.[key]?.toString()?.toLowerCase();
            return itemValue?.includes(value);
        });
    })
}