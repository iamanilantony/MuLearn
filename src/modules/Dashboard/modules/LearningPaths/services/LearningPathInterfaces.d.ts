type HackList = {
    id: string;
    title: string | null;
    type: string | null;
    tagline: string | null;
    event_logo: any;
    is_open_to_all: boolean;
    banner: any;
    website: string | null;
    place: string | null;
    status: string;
    event_start: string | null;
    event_end: string | null;
    application_start: string | null;
    application_ends: string | null;
    description: string | null;
    participant_count: number | null;
    district: string | null;
    organisation: string | null;
    district_id: string | null;
    org_id: string | null;
    editable: boolean;
    form_fields: string[];
};

type LearningPathList = {
    id: string | null
    title: string | null
    desc: string | null
    level: number | null
    tags: [string]
    ig: string | null
    learners: number | null
    status: string

}
interface Topic {
    title: string;
    code: string;
    content: Content[];
}

interface Content {
    title: string;
    url: string;
    content: Content[]
}

interface SingleLearningPath {
    id: string;
    title: string;
    desc: string;
    overview: string;
    learnings: string[];
    level: number;
    skills: string[];
    projects: string[];
    mainTopics: string[];
    ig: string;
    learners: number;
    mentors: number;
    topics: Topic[];
}

interface HackathonApplication {
    field_name: string;
    field_type: string;
    is_required: boolean;
}

interface HackathonOrganizerData {
    email: string;
    full_name: string;
    id: string;
    muid: string;
    profile_pic: string;
}

interface hackApiData {
    name: string;
    gender: string;
    email: string;
    mobile: number;
    bio: string;
    college: string;
    experience: string;
    github: string;
    linkedin: string;
}

export interface OriginalDataItem {
    data: {
        name: string;
        gender: string;
        email: string;
        mobile: string;
        bio: string;
        college: string;
        experience: string;
        github: string;
        linkedin: string;
    };
}

interface ColumnDefinition {
    column: keyof TransformedDataItem;
    Label: string;
    isSortable: boolean;
}
