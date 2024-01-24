import { useRouter } from "next/router";
import { GoBackContainer } from "./GoBack.styles";

export const GoBack = () => {
    const router = useRouter();

    return (
        <GoBackContainer onClick={() => router.back()}>
            Go Back
        </GoBackContainer>
    );
}