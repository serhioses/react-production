import { createSelector } from '@reduxjs/toolkit';

import { selectUser } from 'entities/User/model/selectors/select-user/select-user';

export const selectUserAuthData = createSelector(selectUser, (user) => user.authData);
