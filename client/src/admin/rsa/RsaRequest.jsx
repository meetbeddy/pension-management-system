import React from "react";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { rsaRequest } from "../../store/actions/adminActions";
import NewMembersTable from "./NewMemberstable";
import { Card } from "react-bootstrap";

function RsaRequest(props) {
  const dispatch = useDispatch();

  const pensioners = useSelector((state) => state.admin.rsaRequests);

  React.useEffect(() => {
    dispatch(rsaRequest());
  }, [dispatch]);

  return (
    <ContentWrapper>
      <Card>
        {pensioners.length > 0 ? (
          <NewMembersTable {...props} pensioners={pensioners} />
        ) : (
          <p>loading...</p>
        )}
      </Card>
    </ContentWrapper>
  );
}

export default RsaRequest;
