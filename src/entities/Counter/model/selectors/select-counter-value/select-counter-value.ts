import { createSelector } from '@reduxjs/toolkit';

import { selectCounter } from 'entities/Counter/model/selectors/select-counter/select-counter';

export const selectCounterValue = createSelector(selectCounter, (counter) => counter.value);
