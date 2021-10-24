import { breakpoints } from '../theme.css';
import type { Breakpoints } from '../theme.css';

const breakpointsArr = Object.keys(breakpoints) as Breakpoints[];

export function resolveResponsiveValue<TValues>(
  breakpoint: Breakpoints,
  startValue: TValues,
  endValue: TValues
) {
  const breakpointIndex = breakpointsArr.indexOf(breakpoint);

  return breakpointsArr.reduce(
    (acc, breakpoint, index) => {
      if (index === breakpointIndex) {
        acc[breakpoint] = endValue;
      }

      return acc;
    },
    {
      default: startValue,
    } as Partial<Record<Breakpoints | 'default', TValues>>
  );
}
