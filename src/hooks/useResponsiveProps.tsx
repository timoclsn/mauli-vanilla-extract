import { Breakpoints } from '../../sprinkles.css';
import { useBreakpoints } from './useBreakpoints';

export function useResponsiveProps<T extends string>(
    props: T | Record<Breakpoints, T>
): T {
    const breakpoint = useBreakpoints();
    return typeof props === 'string' ? props : props[breakpoint];
}
