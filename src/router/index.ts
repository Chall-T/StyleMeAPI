import express from 'express';
import users from './users';
import authentication from './authentication';

export const router = express.Router();

export default(): express.Router =>{
    users(router);
    authentication(router)
    return router;
};