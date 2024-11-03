interface MapResult {
    name: string;
    display_name: string;
    lat: number;
    lon: number;
}

interface LearningCircleCreate {
    ig: string;
    is_recurring: boolean;
    recurrence_type: string;
    recurrence: number;
}

interface LCMeetCreate {
    circle_id: string;
    coord_x: number;
    coord_y: number;
    meet_time: string;
    duration: number;
    title: string;
    is_report_needed: boolean;
    report_description: string;
    meet_place: string;
}
interface LCMeetup {
    id: string;
    is_scheduled: boolean;
    circle: string;
    meet_code: string;
    title: string;
    is_report_needed: boolean;
    report_description: string;
    coord_x: number;
    coord_y: number;
    meet_place: string;
    meet_time: string;
    duration: number;
    is_started: boolean;
    is_ended: boolean;
    is_report_submitted: boolean;
}
interface LearningCircleInfo {
    id: string;
    org: string;
    is_recurring: boolean;
    recurrence_type: string;
    recurrence: number;
    next_meetup: LCMeetup;
    past_meetups: LCMeetup[];
}
