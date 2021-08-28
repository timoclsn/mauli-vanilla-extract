import type { Breakpoints } from '../../sprinkles.css';
import { breakpoints } from '../../sprinkles.css';
import { useMediaQuery } from './useMediaQuery';

export function useBreakpoints() {
    let breakpointName = Object.keys(breakpoints)[0] as Breakpoints;
    for (let key in breakpoints) {
        const availableBreakpoint = key as Breakpoints;
        const breakpoint = breakpoints[availableBreakpoint];
        const isAvailable = useMediaQuery(
            `screen and (min-width: ${breakpoint}px)`
        );
        if (isAvailable) {
            breakpointName = availableBreakpoint;
        }
    }
    return breakpointName;
}
