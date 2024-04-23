export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  variant?: InputVariant;
}

export enum InputVariant {
  Disabled = 'disabled',
  Loading = 'loading',
  Error = 'error',
}
