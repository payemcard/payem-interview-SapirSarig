import { Router } from "express";
import { filterRequests, getRequest, addRequest, updateRequest } from "../controllers/requests.controller.js";

const router = Router();

// Get all requests
router.get('/', (req, res) => {
    const requests = filterRequests(req.query);
    if (!requests){
        res.status(400);
    }
    res.json(filterRequests(req.query));
});

// Get request by id
router.get('/:id', (req, res) => {
    const requestItem = getRequest(req.params.id);
    if(!requestItem) {
        res.status(400);
    }
    res.status(200).json(requestItem);
});

// Create a new request
router.post('/', (req, res) => {
    const newRequest = req.body;
    const addedRequest = addRequest(newRequest);
    if (!addedRequest) {
        res.status(400).send();
    }
    res.status(201).json(addedRequest);
});

// Update request by id
router.post('/:id', (req, res) => {
    const requestId = req.params.id;
    const updateParams = req.body;
    const updatedItem = updateRequest(requestId, updateParams);
    res.status(200).json(updatedItem);
});

export default router;