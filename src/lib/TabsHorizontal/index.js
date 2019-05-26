import React from 'react';
import { Link, Route } from 'react-router-dom';
import classNames from 'classnames';

import * as appHeaderStyle from './horizontaltabsCSS.js';

function joinClassnames(...classnames) {
  return classnames.filter(i => i).join(' ');
}

function NavTab({
  type,
  'aria-current': ariaCurrent = 'page',
  activeClassName = 'active',
  activeStyle,
  className: classNameProp,
  exact,
  isActive: isActiveProp,
  location,
  strict,
  style: styleProp,
  to,
  ...rest
}) {
  const path = typeof to === 'object' ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  const escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

  return (
    <Route
      path={escapedPath}
      exact={exact}
      strict={strict}
      location={location}
      children={({ location, match }) => {
        const isActive = !!(isActiveProp
          ? isActiveProp(match, location)
          : match);

        const className = isActive
          ? joinClassnames(classNameProp, activeClassName)
          : classNameProp;
        const style = isActive ? { ...styleProp, ...activeStyle } : styleProp;
        return (
          <Link
            aria-current={(isActive && ariaCurrent) || null}
            className={className}
            style={style}
            to={to}
            {...rest}
          />
        );
      }}
    />
  );
}

const TabsHorizontal = ({ left = [], right = [], type = 'dark' }) => {
  let defaultClass = classNames({
    [appHeaderStyle.darkTabDefault]: type === 'dark',
    [appHeaderStyle.lightTabDefault]: type === 'grey' || type === 'white'
  });

  let activeClass = classNames({
    [appHeaderStyle.darkTabActive]: type === 'dark',
    [appHeaderStyle.lightTabActive]: type === 'grey',
    [appHeaderStyle.whiteTabActive]: type === 'white'
  });
  // const defaultClass =
  //   type === 'header' ? 'header-textlink' : 'header-textlink-candidate';
  // const activeClassName =
  //   type === 'header'
  //     ? 'header-textlink-active'
  //     : 'header-textlink-candidate-active';
  return (
    <div
      className={
        type === 'dark'
          ? appHeaderStyle.appHeaderNoBorder
          : appHeaderStyle.appHeaderBorder
      }
    >
      <div className={type === 'dark' ? '' : appHeaderStyle.tabContainer}>
        <div className={appHeaderStyle.tabAligner}>
          {left &&
            left.map(el => (
              <NavTab
                key={el.path}
                type={type}
                to={el.path}
                title={el.name}
                className={defaultClass}
                activeClassName={activeClass}
              >
                <div>
                  <span>{el.name}</span>
                </div>
              </NavTab>
            ))}
        </div>
        <div className={appHeaderStyle.tabAligner}>
          {right &&
            right.map(el => (
              <NavTab
                key={el.path}
                type={type}
                to={el.path}
                title={el.name}
                className={defaultClass}
                activeClassName={activeClass}
              >
                <div>
                  <span>{el.name}</span>
                </div>
              </NavTab>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TabsHorizontal;
