import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// note: You can also create a function instead of importing classnames library. Then call the function in className prop
// const validateClasses = () => {
//   if (!errMsg && val.length > 1) {
//     return 'form-control form-control-lg is-valid'
//   } else if (errMsg) {
//     return 'form-control form-control-lg is-invalid'
//   } else {
//     return 'form-control form-control-lg'
//   }
// }

// then className = {validateClasses()}

const TextInputGroups = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroups.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroups.defaultProps = {
  type: 'text'
};

export default TextInputGroups;
