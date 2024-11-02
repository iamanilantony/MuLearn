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
