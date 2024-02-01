interface RadioOption {
  id: string;
  label: string;
}

interface RadioButtonGroupProps {
  options: RadioOption[];
  selectedOption: string;
  onChange: (newOption: string) => void;
  disabled?: boolean;
  label?: string;
}

export type { RadioOption, RadioButtonGroupProps };
