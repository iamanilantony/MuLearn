import UserInterestSelectionComponent from "../../../components/UserInterest/UserInterestComponent";
import { privateGateway } from "@/MuLearnServices/apiGateways";
import { onboardingRoutes } from "@/MuLearnServices/urls";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function UserInterest() {
    const [searchParams, _] = useSearchParams();
    const ruri = searchParams.get("ruri");
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<boolean>(true);
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            setNewUser(false);
        }
    }, []);
    const handleSubmit = (interests: RegisterInterestData) => {
        if (newUser) {
            const params = new URLSearchParams();

            if (interests.choosen_interests.length)
                params.append(
                    "interests",
                    interests.choosen_interests.join(",")
                );
            if (interests.other_interests?.length)
                params.set(
                    "interests",
                    [
                        params.get("interests"),
                        interests.other_interests.join(",")
                    ]
                        .filter(Boolean)
                        .join(",")
                );
            if (interests.choosen_endgoals.length)
                params.append("endgoals", interests.choosen_endgoals.join(","));
            if (interests.other_endgoals?.length)
                params.set(
                    "endgoals",
                    [params.get("endgoals"), interests.other_endgoals.join(",")]
                        .filter(Boolean)
                        .join(",")
                );
            if (ruri) params.append("ruri", ruri);

            navigate(`/register?${params.toString()}`);
        } else {
            privateGateway
                .post(onboardingRoutes.interests, interests)
                .then(res => {
                    toast.success(res.data?.message.general[0]);
                    navigate(
                        ruri
                            ? ruri == "noredirect"
                                ? "/dashboard/profile"
                                : `/register/organization/?ruri=${ruri}`
                            : "/register/organization"
                    );
                })
                .catch(err => {
                    toast.error(
                        err.response?.data.message.general[0] ||
                            "Unexpected Error occurred"
                    );
                });
        }
    };

    return <UserInterestSelectionComponent onContinue={handleSubmit} />;
}
