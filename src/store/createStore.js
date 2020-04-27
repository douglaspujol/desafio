import { createStore, compose } from 'redux';

export default reducers => {
  const enhancer =
    process.env.NODE_ENV === 'development' &&
    compose(console.tron.createEnhancer());
  return createStore(reducers, enhancer);
};
