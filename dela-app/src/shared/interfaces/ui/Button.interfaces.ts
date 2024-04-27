export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariants;
}

export enum ButtonVariants {
  Disabled = 'disabled',
  Loading = 'loading',
  Error = 'error',
}
