"use strict";

import React from "react";
import {NavigationActions} from "react-navigation";

let _container; // eslint-disable-line


export const navigation = {
  mapProps: (SomeComponent) => {
    return class extends React.Component {
      static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
      render () {
        const {navigation: {state: {params}}} = this.props;
        return <SomeComponent {...params} {...this.props} />;
      }
    }
  },
  setContainer: (container) => {
    _container = container;
  },
  reset: (routeName, params) => {
    _container.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            type: "Navigation/NAVIGATE",
            routeName,
            params
          })
        ]
      })
    );
  },
  goBack: () => {
    _container.dispatch(NavigationActions.back());
  },
  navigate: (routeName, params) => {
    _container.dispatch(
      NavigationActions.navigate({
        type: "Navigation/NAVIGATE",
        routeName,
        params
      })
    );
  },
  navigateDeep: (actions) => {
    _container.dispatch(
      actions.reduceRight(
        (prevAction, action) =>
          NavigationActions.navigate({
            type: "Navigation/NAVIGATE",
            routeName: action.routeName,
            params: action.params,
            action: prevAction
          }),
        undefined
      )
    );
  },
  getCurrentRoute: () => {
    if (!_container || !_container.state.nav) {
      return null;
    }

    return _container.state.nav.routes[_container.state.nav.index] || null;
  }
};