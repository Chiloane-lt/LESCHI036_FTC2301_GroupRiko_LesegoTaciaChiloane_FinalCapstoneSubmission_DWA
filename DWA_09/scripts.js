/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
// @ts-check

import { initialPageLoad, createShowMoreButton, showMorePages } from './modules/page-loading.js';
import './modules/summary.js';

initialPageLoad();
createShowMoreButton();
showMorePages();
