import express from 'express';

import { authorization } from '../../controller/Auth.js'

import { auth_validator } from '../../middleware/validate_auth.js';

const auth_v1 = express.Router();

auth_v1.post('/auth/v1', auth_validator ,authorization);

export default auth_v1;