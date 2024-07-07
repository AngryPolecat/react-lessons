import { Component } from 'react';
import { connect } from 'react-redux';
import { Information } from './components/information/Information';
import { Field } from './components/field/Field';
import { RESET } from './const/const';

class AppContainer extends Component {
  render() {
    return (
      <div className="text-center mx-auto my-0 p-5 border-2 app">
        <Information />
        <Field />
        <button
          className="font-medium cursor-pointer p-5 hover:text-red-600 border"
          onClick={() => {
            this.props.reset();
          }}
        >
          Начать заново
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(RESET),
});

export const App = connect(null, mapDispatchToProps)(AppContainer);
