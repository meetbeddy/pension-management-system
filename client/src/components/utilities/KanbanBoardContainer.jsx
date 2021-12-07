import React from "react";

function KanbanBoardContainer(props) {
  return (
    <div className="content-wrapper kanban">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h1>Summary Report</h1>
            </div>
          </div>
        </div>
      </section>
      {props.children}
    </div>
  );
}

export default KanbanBoardContainer;
