/* ============================================================
   CALENDAR HOOKS – LEARNING & USAGE ORDER
   ------------------------------------------------------------
   This index exports hooks in the exact sequence required to
   build a calendar system from scratch:
   structure → navigation → selection → validation → UI → extras
   ============================================================ */

/* ──────────────────────────────────────────────────────────── */
/* TIER 1 — Calendar Structure (FOUNDATION)                     */
/* ──────────────────────────────────────────────────────────── */

// Generates the full calendar grid (days + alignment)
export { useCalendar } from "./useCalendar/useCalendar";

// Provides localized weekday labels (Sun–Sat / Mon–Sun)
export { useWeekdayLabels } from "./useWeekDayLabels/useWeekDayLabels";

// Calculates ISO week numbers for a month
export { useWeekNumbers } from "./useWeekNumbers/useWeekNumbers";

/* ──────────────────────────────────────────────────────────── */
/* TIER 2 — Calendar Navigation                                 */
/* ──────────────────────────────────────────────────────────── */

// Handles next / previous month navigation
export { useMonthNavigation } from "./useMonthNavigation/useMonthNavigation";

// Enables multi-month calendar views (2–3 months)
export { useMultiMonthView } from "./useMultiMonthView/useMultiMonthView";

// Adds keyboard navigation (arrow keys)
export { useKeyboardNavigation } from "./useKeyboardNavigation/useKeyboardNavigation";

/* ──────────────────────────────────────────────────────────── */
/* TIER 3 — Date Selection                                      */
/* ──────────────────────────────────────────────────────────── */

// Manages single-date selection
export { useDateSelection } from "./useDateSelection/useDateSelection";

// Handles basic start/end range selection
export { useRangeSelection } from "./useRangeSelection/useRangeSelection";

// Handles range selection with min/max day rules
export { useAdvancedRangeSelection } from "./useAdvancedRangeSelection/useAdvancedRangeSelection";

// Tracks hovered date for range previews
export { useDateRangeHover } from "./useDateRangeHover/useDateRangeHover";

// It provide predefined single-date and date-range suggestions
export { useDateSuggestions } from "./useDateSuggestions/useDateSuggestions";

/* ──────────────────────────────────────────────────────────── */
/* TIER 4 — Date Logic & Validation                              */
/* ──────────────────────────────────────────────────────────── */

// Provides date comparison helpers
export { useDateComparison } from "./useDateComparison/useDateComparison";

// Disables dates using min/max/custom rules
export { useDateConstraints } from "./useDateConstraints/useDateConstraints";

// Identifies and compares against today
export { useToday } from "./useToday/useToday";

// Highlights special dates (events, holidays)
export { useDateHighlights } from "./useDateHighlights/useDateHighlights";

/* ──────────────────────────────────────────────────────────── */
/* TIER 5 — Formatting & Localization                           */
/* ──────────────────────────────────────────────────────────── */

// Formats dates using locale & Intl options
export { useDateFormatting } from "./useDateFormatting/useDateFormatting";

// Converts dates into a specific time zone
export { useTimeZoneDate } from "./useTimezoneDate/useTimeZoneDate";

/* ──────────────────────────────────────────────────────────── */
/* TIER 6 — Picker & Popover State                               */
/* ──────────────────────────────────────────────────────────── */

// Controls open/close state for date pickers
export { useDatePicker } from "./useDatePicker/useDatePicker";

// Controls open/close state for range pickers
export { useRangeDatePicker } from "./useRangeDatePicker/useRangeDatePicker";

/* ──────────────────────────────────────────────────────────── */
/* TIER 7 — Time & Shortcuts                                    */
/* ──────────────────────────────────────────────────────────── */

// Manages date + time selection
export { useTimeSelection } from "./useTimeSelection/useTimeSelection";

// Provides quick date shortcuts (Today, Last 7 Days)
export { useDateShortcuts } from "./useDateShortcuts/useDateShortcuts";

/* ──────────────────────────────────────────────────────────── */
/* TIER 8 — Advanced Scheduling                                 */
/* ──────────────────────────────────────────────────────────── */

// Generates recurring dates (daily, weekly, monthly, yearly)
export { useRecurrence } from "./useRecurrence/useRecurrence";

/* ──────────────────────────────────────────────────────────── */
/* TIER 9 — Accessibility (A11y)                                 */
/* ──────────────────────────────────────────────────────────── */

// Tracks focused date without re-rendering
export { useFocusManagement } from "./useFocusManagement/useFocusManagement";

// Implements roving tabindex for keyboard accessibility
export { useRovingTabIndex } from "./useRovingTabIndex/useRovingTabIndex";
