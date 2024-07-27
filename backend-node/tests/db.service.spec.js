import dbMock from '../db.js';
import { logError } from '../services/logger.service.js';
import { dbService } from '../services/db.service.js';

jest.mock('../services/logger.service.js');

describe('dbService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        dbMock.db = [
            {
                id: 1,
                name: 'Purchase Request 1',
                type: 'PurchaseRequest',
                description: 'Request to purchase office supplies',
                amount: 100,
                currency: 'USD',
                employee_name: 'John Doe',
                status: 'Pending',
                created_at: new Date('2024-07-19T08:30:00Z'),
                updated_at: null,
                approved_amount: 90
            }
        ];
        dbMock.nextId = 11;
    });

    describe('add', () => {
        test('should add an item to the database', () => {
            const newItem = {
                name: 'New Request',
                type: 'PurchaseRequest',
                description: 'New request description',
                amount: 150,
                currency: 'USD',
                employee_name: 'Jane Doe',
                status: 'Pending'
            };

            const result = dbService.add(newItem);
            expect(result.id).toBe(11);
            expect(result.created_at).toBeDefined();
            expect(dbMock.db).toContainEqual(result);
            expect(dbMock.nextId).toBe(12);
        });
    });

    describe('getAll', () => {
        test('should return all items in the database', () => {
            const result = dbService.getAll();
            expect(result).toEqual(dbMock.db);
        });
    });

    describe('get', () => {
        test('should return an item by id', () => {
            const result = dbService.get(1);
            expect(result).toEqual(dbMock.db[0]);
        });

        test('should return undefined if item not found', () => {
            const result = dbService.get(999);
            expect(result).toBeUndefined();
        });
    });

    describe('set', () => {
        test('should update an item by id', () => {
            const updateParams = { status: 'Approved', amount: 200 };
            const result = dbService.set(1, updateParams);
            expect(result.status).toBe('Approved');
            expect(result.amount).toBe(200);
            expect(result.updated_at).toBeDefined();
            expect(dbMock.db[0]).toEqual(result);
        });

        test('should return undefined and log error if item not found', () => {
            const updateParams = { status: 'Approved', amount: 200 };
            const result = dbService.set(999, updateParams);
            expect(result).toBeUndefined();
            expect(logError).toHaveBeenCalledWith('Error setting item - item #999 not found');
        });
    });

    describe('filter', () => {
        test('should return items that match the filter criteria', () => {
            const filterCriteria = { status: 'Pending', employee_name: 'john doe' };
            const result = dbService.filter(filterCriteria);
            expect(result).toEqual([dbMock.db[0]]);
        });

        test('should return all items if no filter criteria are provided', () => {
            const filterCriteria = {};
            const result = dbService.filter(filterCriteria);
            expect(result).toEqual(dbMock.db);
        });

        test('should return an empty array if no items match the filter criteria', () => {
            const filterCriteria = { status: 'NonexistentStatus' };
            const result = dbService.filter(filterCriteria);
            expect(result).toEqual([]);
        });
    });
});
