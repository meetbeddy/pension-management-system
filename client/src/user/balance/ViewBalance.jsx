import React from "react";
import { Container, Row } from "react-bootstrap";
import BalanceWidget from "../../components/utilities/BalanceWidget";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import { useSelector } from "react-redux";
import ContributionHistory from "./ContributionHistory";
import TransactionHistory from "./TransactionHistory";

function ViewBalance() {
  const user = useSelector((user) => user.userProfile.userProfile);

  const { balance, contributions } = user;

  const contributionsHistory = contributions?.contributions?.filter(
    (contribution) => {
      return contribution.depositType === "contribution";
    }
  );
  console.log(contributions);

  return (
    <ContentWrapper>
      <div className="card" id="cart">
        <div className="row">
          <div className="col-md-12 cart">
            <div className="title">
              <div className="col">
                <h4>
                  <b>BALANCES</b>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* content */}

        <div>
          <Row>
            <div className="col-3">
              <BalanceWidget
                title="Current Balance"
                value={balance.currentBalance}
              />
            </div>
            <div className="col-3">
              <BalanceWidget
                title="Total Contribution"
                value={balance?.totalContributions}
              />
            </div>
            <div className="col-3">
              <BalanceWidget title="Gain/Loss" value={balance.gain_loss} />
            </div>
            <div className="col-3">
              <BalanceWidget
                title="Total Withdrawal"
                value={balance.totalWithdraws}
              />
            </div>
          </Row>
        </div>

        <div className="title m-3">
          <h5>
            <b>TRANSACTION HISTORY</b>
          </h5>
        </div>
        {/* <ContributionHistory contributionsHistory={contributionsHistory} /> */}
        <TransactionHistory />
      </div>
    </ContentWrapper>
  );
}

export default ViewBalance;
