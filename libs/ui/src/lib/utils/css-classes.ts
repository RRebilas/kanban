export function makeClasses({
  styles,
  moduleClasses,
  className,
}: {
  styles: { [_: string]: string };
  moduleClasses: string[];
  className?: string;
}) {
  return `${moduleClasses.map((c) => styles[c]).join(' ')} ${className}`;
}
