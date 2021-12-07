import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCustomPackages } from "../../store/actions/customPackage/customPackagesActions";

export const CustomPackage = () => {
    const dispatch = useDispatch();
    const [customPackages] = useSelector((state) => state.customPackages);

    useEffect(() => {
        dispatch(getAllCustomPackages());
    }, []);


      return (
        <>
        <h3>CustomPackages</h3>
        {
            customPackages?.length > 0 &&
            customPackages.map(customPackage => 
                <ul>
                <li><strong>Client</strong>: {customPackage.clientName} ({customPackage.clientEmail})</li>
                <li><strong>Destination</strong>: {customPackage.destination} / {customPackage.type} / {customPackage.category}</li>
                <li>Package for {customPackage.membersQuantity} person(s) - {customPackage.totalDays} days</li>
                <li>Date of the trip: {customPackage.date}</li>
                </ul>
            )
        }
        </>
    )
}