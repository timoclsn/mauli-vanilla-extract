import { breakpoints } from '../tokens';
import type { Breakpoint } from '../tokens';

const breakpointsArr = Object.keys(breakpoints) as Breakpoint[];

export function resolveResponsiveValue<TValues>(
  breakpoint: Breakpoint,
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
    } as Partial<Record<Breakpoint | 'default', TValues>>
  );
}
