import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCustomPackages } from "../../store/actions/customPackage/customPackagesActions";
import styles from "../../styles/Admin/Input.module.scss";

export const CustomPackage = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [customPackages] = useSelector((state) => state.customPackages);

    useEffect(() => {
        dispatch(getAllCustomPackages());
    }, []);


    return !show ? (
        <div onClick={() => setShow(!show)}>
          <h1 className={styles.drop}>Show Custom Packages</h1>
        </div>
    ) : (
        <div className={styles.form}>
        <h3 className={styles.drop} onClick={() => setShow(!show)}>
            Custom Packages
        </h3>
        {
            customPackages?.length > 0 &&
            customPackages.map(customPackage => 
                <>
                <hr />
                &nbsp;<br />
                <div><strong>Client</strong>: {customPackage.clientName} ({customPackage.clientEmail})</div>
                <div><strong>Destination</strong>: {customPackage.destination} / {customPackage.type} / {customPackage.category}</div>
                <div>Package for {customPackage.membersQuantity} person(s) - {customPackage.totalDays} days</div>
                <div>Date of the trip: {customPackage.date}</div>
                &nbsp;<br />
                </>
            )
        }
        </div>
    )
}