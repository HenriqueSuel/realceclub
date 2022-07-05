export interface IOpeningHoursCompany {
    id?: string;
    monday: boolean;
    time_start_monday: string;
    time_end_monday: string;

    tuesday: boolean
    time_start_tuesday: string;
    time_end_tuesday: string;

    wednesday: boolean
    time_start_wednesday: string;
    time_end_wednesday: string;

    thursday: boolean
    time_start_thursday: string;
    time_end_thursday: string;

    friday: boolean
    time_start_friday: string;
    time_end_friday: string;

    saturday: boolean
    time_start_saturday: string;
    time_end_saturday: string;

    sunday: boolean
    time_start_sunday: string;
    time_end_sunday: string;

}