import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addFeature, removeItem } from './actions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
 
  const removeFeature = index => {
    // state.removeItem(item)
    dispatch({type: 'REMOVE_FEATURES', payload: index})
  };

  const buyItem = item => {
    dispatch({type: 'ADD_FEATURES', payload: item})
    // state.addFeature(item)
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

// export default connect(mapStateToProps, { addFeature, removeItem })(App);
export default App;
