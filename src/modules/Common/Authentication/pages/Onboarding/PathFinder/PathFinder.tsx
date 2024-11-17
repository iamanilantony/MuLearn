import PathFinderComponent from "../../../components/PathFinder/PathFinderComponent";

export default function PathFinder() {
    const onSubmit = (data: string[]) => {
        console.log(data);
    };
    return <PathFinderComponent onContinue={onSubmit} />;
}
