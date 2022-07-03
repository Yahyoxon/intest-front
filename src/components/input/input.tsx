import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { StyledInput, StyledLabel, ToggleIcon } from './input.styles';
import { InputProps } from './input.types';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      label,
      helperText,
      required,
      fullWidth,
      id = 'Id',
      sx,
      endAdornment,
      type,
      ...otherProps
    },
    _ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const derivedType = React.useMemo(() => {
      if (type === 'password') {
        return showPassword ? 'text' : 'password';
      }
      return type;
    }, [type, showPassword]);

    const handleToggleType = React.useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    return (
      <FormControl
        error={error}
        variant="standard"
        fullWidth={fullWidth}
        required={required}
        sx={sx}
      >
        {label && (
          <StyledLabel htmlFor={id} shrink>
            {label}
          </StyledLabel>
        )}

        <StyledInput
          id={id}
          type={derivedType}
          {...otherProps}
          endAdornment={
            type === 'password' ? (
              <ToggleIcon
                showPassword={showPassword}
                onClick={handleToggleType}
              />
            ) : (
              endAdornment
            )
          }
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

export default Input;
