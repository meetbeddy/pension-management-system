import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import DialogModal from "../../components/utilities/DialogModal";
import ProfileDetailsTab from "../../components/utilities/ProfileDetailsTab";
import ProfileImageCard from "../../components/utilities/ProfileImageCard";
import { useSelector, useDispatch } from "react-redux";
import { confirmRSA } from "../../store/actions/adminActions";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../store/actions/notificationsActions";

function ProfileOverView(props) {
  const [smShow, setSmShow] = useState(false);
  const handleShowModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  const { _id } = props.location.state;

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    if (notification.success?.message) {
      toast.success("user comfirmed successfully");
      handleCloseModal();
      dispatch(clearNotifications());
    }
    if (notification.errors?.message) {
      const { message } = notification.errors.message;
      toast.error(message);
    }
    dispatch(clearNotifications());
    handleCloseModal();
  }, [notification, dispatch]);

  const handleSubmit = () => {
    dispatch(confirmRSA(_id));
  };

  return (
    <ContentWrapper title="profile overwiew">
      <section className="content">
        <Row>
          <ProfileImageCard handleShowModal={handleShowModal} {...props} />
          <ProfileDetailsTab {...props} />
        </Row>
      </section>
      <DialogModal
        smShow={smShow}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
      />
      <ToastContainer position="top-center" />
    </ContentWrapper>
  );
}

export default ProfileOverView;
