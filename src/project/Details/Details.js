import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetails } from "../../redux/actions/contacts.action";
import styles from "./Details.module.css";

export default function Details() {
  const { id } = useParams();
  const { details } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id]);

  return (
    <>
      <h1 className={styles.title}>
        Welcome <span> {details?.first_name} </span>
      </h1>
      <p className={styles.mailPart}>
        Your mail <span>{details?.email} </span>
      </p>
    </>
  );
}
