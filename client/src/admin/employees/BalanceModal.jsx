import React from "react";
import { Modal, Button, Row } from "react-bootstrap";
import BalanceWidget from "../../components/utilities/BalanceWidget";

function BalanceModal({ data, show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
      }}
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header closeButton>
        <div className="nk-modal-head mb-2 mb-sm-4">
          <h4 className="nk-modal-title title">
            RSA PIN #<small className="text-primary">{data?.rsaPin}</small>
          </h4>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="nk-block">
          <div
            className="widget d-inline-flex justify-content-center  w-100"
            id="balance"
          >
            <BalanceWidget
              title="Current Balance"
              value={data?.balance?.currentBalance}
            />

            <BalanceWidget
              title="Total Contribution"
              value={data?.balance?.totalContributions}
            />
          </div>
          <div
            className="widget d-inline-flex justify-content-center w-100"
            id="balance"
          >
            <BalanceWidget title="Gain/Loss" value={data?.balance?.gain_loss} />

            <BalanceWidget
              title="Total Withdrawal"
              value={data?.balance?.totalWithdraws}
            />
          </div>

          <hr />
          <div className="divider md stretched" />
          <h5 className="overline-title">Additional Details</h5>

          <div className="divider md stretched" />
          <div className="m-3">
            <div className="nk-wgacc-group flex-lg-nowrap gx-4">
              <div className="nk-wgacc-sub">
                <div className="nk-wgacc-amount">
                  <div className="number">Transaction Type</div>
                </div>
                <div className="nk-wgacc-subtitle">Payment Gateway</div>
                <div className="nk-wgacc-subtitle">Wallet address</div>
              </div>
              <div className="nk-wgacc-sub">
                <span className="nk-wgacc-sign text-soft">
                  <em className="icon ni ni-plus" />
                </span>
                <div className="nk-wgacc-amount">
                  <div className="number">{data?.transactionType}</div>
                </div>
                <div className="nk-wgacc-subtitle">{data?.gateway}</div>
                <div className="nk-wgacc-subtitle">{data?.walletAddress}</div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-md btn-success"
          id="confirm"
          onClick={(e) => {
            handleClose();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BalanceModal;
