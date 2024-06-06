import P from 'prop-types';

import './style.css';

export const Button = ({ children, onButtonClicked, disabled = false }) => {
  return (
    <button className="button" disabled={disabled} onClick={onButtonClicked}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node,
  onButtonClicked: P.func,
  disabled: P.bool,
};
