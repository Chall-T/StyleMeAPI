import express from 'express';

import { addGender, addSilhouette, addStyle, getGenders, getSilhouettes, getStyles } from '../controllers/general';
import { isAuthenticated, isOwner } from '../middlewares';

export default( router: express.Router) =>{
    router.get('/genders', isAuthenticated, getGenders);
    router.get('/styles', isAuthenticated, getStyles)
    router.get('/silhouettes', isAuthenticated, getSilhouettes)
    router.post('/genders', isAuthenticated, addGender)
    router.post('/styles', isAuthenticated, addStyle)
    router.post('/silhouettes', isAuthenticated, addSilhouette)
};