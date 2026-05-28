import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn('p-3', className)}
            classNames={{
                months: 'flex flex-col sm:flex-row gap-4',
                month: 'space-y-4',
                month_caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-sm font-medium',
                nav: 'space-x-1 flex items-center',
                button_previous: 'absolute left-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-transparent p-0 opacity-50 hover:opacity-100',
                button_next: 'absolute right-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-transparent p-0 opacity-50 hover:opacity-100',
                month_grid: 'w-full border-collapse space-y-1',
                weekdays: 'flex',
                weekday: 'text-slate-500 rounded-md w-9 font-normal text-[0.8rem] text-center',
                weeks: 'space-y-1',
                week: 'flex w-full mt-2',
                day: 'h-9 w-9 text-center text-sm p-0 relative',
                day_button: cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-normal',
                    'hover:bg-slate-100 hover:text-slate-900',
                ),
                selected: 'bg-blue-600 text-white rounded-md hover:bg-blue-600',
                today: 'bg-slate-100 text-slate-900 rounded-md',
                outside: 'text-slate-400 opacity-50',
                disabled: 'text-slate-400 opacity-50',
                range_middle: 'bg-slate-100 text-slate-900',
                range_start: 'bg-blue-600 text-white rounded-l-md',
                range_end: 'bg-blue-600 text-white rounded-r-md',
                hidden: 'invisible',
                ...classNames,
            }}
            {...props}
        />
    );
}
Calendar.displayName = 'Calendar';

export { Calendar };
