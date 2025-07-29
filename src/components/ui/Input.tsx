import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required = false, className = '', ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block font-lato font-medium text-neutral-dark text-sm md:text-base">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={`input-field ${error ? 'border-red-500' : ''} ${className} text-sm md:text-base`}
          {...props}
        />
        {error && (
          <p className="text-red-500 text-xs md:text-sm font-lato">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
