import React from "react";

function BalanceWidget({ title, value }) {
  return (
    <div class="d-flex" style={{ width: "300px" }}>
      <div class="card p-2 m-2 " id="balance" style={{ width: "200px" }}>
        <div class="card-bottom pt-3 px-3 mb-2">
          <div class="d-flex flex-row justify-content-between text-align-center">
            <div class="d-flex flex-column" id="balance">
              <span>{title}</span>
              <p>
                &#8358;|{" "}
                <span class="text-white" id="balance">
                  {value}
                </span>
              </p>
            </div>
            {/* <button class="btn btn-secondary" id="balance">
              <i class="fas fa-arrow-right text-white" id="balance"></i>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceWidget;
