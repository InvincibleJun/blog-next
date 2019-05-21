import actionTypes from './action-types';

export const loadTag = data => ({
  type: actionTypes.INIT_TAG,
  data
});

export const loadArticleList = data => ({
  type: actionTypes.LOAD_ARTICLELIST,
  data
})