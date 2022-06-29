import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addContribution, addRoi } from "../../store/actions/adminActions";
import { clearNotifications } from "../../store/actions/notificationsActions";
import { fetchEmployees } from "../../store/actions/adminActions";

function AddContributionPreview() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { amount, month, type, status } = history.location.state;
  const notification = useSelector((state) => state.notification);

  React.useEffect(() => {
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);

      return dispatch(clearNotifications());
    }
    if (notification?.success?.message) {
      const { message } = notification?.success;
      toast.success(message);

      dispatch(clearNotifications());
      dispatch(fetchEmployees());
      return history.goBack();
    }
  }, [dispatch, history, notification]);

  function handleConfirm() {
    if (type === "roi") {
      dispatch(addRoi(history.location.state));
    } else {
      dispatch(addContribution(history.location.state));
    }
  }

  return (
    <ContentWrapper>
      <section className="cmn-section">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-md-8">
              <div className="card ">
                <div className="card-body">
                  <ul className="list-group text-center">
                    <h3>
                      {" "}
                      {type === "roi"
                        ? "ROI Details"
                        : "Contibution details"}{" "}
                    </h3>
                    {type === "roi" ? (
                      <p
                        className={
                          status === `gain`
                            ? `text-success list-group-item font-weight-bold`
                            : `text-danger list-group-item font-weight-bold`
                        }
                      >
                        ADD A {status === "gain" ? "GAIN" : "LOSS"} OF
                      </p>
                    ) : (
                      <p className="list-group-item font-weight-bold text-success ">
                        ADD A CONTRIBUTION OF{" "}
                      </p>
                    )}
                    <p className="list-group-item font-weight-bold">
                      Amount:{"  "}
                      <strong className="text-primary">&#8358;{amount} </strong>
                    </p>

                    <p className="list-group-item font-weight-bold">
                      For the Month of: {"  "}
                      <strong>
                        <Moment format="MMM YYYY ">{month}</Moment>
                      </strong>
                    </p>
                  </ul>
                  <button
                    className="btn btn-block btn-secondary py-3 font-weight-bold mt-4 cmn-btn"
                    onClick={() => {
                      handleConfirm();
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-block btn-danger py-3 font-weight-bold mt-4 cmn-btn"
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" />
    </ContentWrapper>
  );
}

export default AddContributionPreview;
