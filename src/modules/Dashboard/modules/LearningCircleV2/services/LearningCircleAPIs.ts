import { privateGateway } from "@/MuLearnServices/apiGateways";
import { dashboardRoutes, learningCircleRoutes } from "@/MuLearnServices/urls";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const openstreetmapurl =
    "https://nominatim.openstreetmap.org/search?format=json&q=";

export const searchCoordinates = async (
    searchString: string
): Promise<MapResult[]> => {
    try {
        const url = openstreetmapurl + searchString;
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.log(e);
        return [];
    }
};

export const getLearningCircleInfo = async (
    circleId: string
): Promise<LearningCircleInfo | null> => {
    try {
        const response = await privateGateway.get(
            learningCircleRoutes.getLearningCircleInfo + circleId
        );
        return response.data.response;
    } catch (err) {
        const error = err as AxiosError;
        console.log(error);
        return null;
    }
};

export const createLearningCircle = async (
    params: LearningCircleCreate
): Promise<boolean> => {
    try {
        const response = await privateGateway.post(
            learningCircleRoutes.createLearningCircle,
            params
        );
        if (response.status === 200) {
            if (response.data?.response?.circle_id) {
                return response.data?.response?.circle_id;
            }
            toast.success(
                [
                    response.data?.message?.general ??
                        "Learning circle created successfully"
                ][0]
            );
            return true;
        }
        toast.error(
            (response.data?.message?.general ?? [
                "Unable to create learning circle."
            ])[0]
        );
        return false;
    } catch (err) {
        const error = err as AxiosError;
        console.log(error);
        return false;
    }
};

export const scheduleMeetup = async (
    params: LCMeetCreate
): Promise<boolean> => {
    try {
        const response = await privateGateway.post(
            learningCircleRoutes.scheduleMeetup,
            params
        );
        if (response.status === 200) {
            toast.success(
                [
                    response.data?.message?.general ??
                        "Meetup scheduled successfully"
                ][0]
            );
            return true;
        }
        toast.error(
            (response.data?.message?.general ?? [
                "Unable to schedule meetup."
            ])[0]
        );
        return false;
    } catch (err) {
        const error = err as AxiosError;
        console.log(error);
        return false;
    }
};

export const getInterestGroups = async () => {
    try {
        const response = (await privateGateway.get(dashboardRoutes.getCampusIg))
            ?.data?.response.interestGroup as { id: string; name: string }[];
        return response?.map(obj => ({
            value: obj.id,
            label: obj.name
        }));
    } catch (err) {
        const error = err as AxiosError;
        if (error?.response) {
            throw error;
        }
    }
};
