import React from "react";
import PurchaseTable from "./PurchaseTable";

function PurchasePanel() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-11/12 bg-white rounded-xl py-12 px-10">
          <div className="border-b border-slate-300 py-4">
            <h3 className="font-semibold text-xl">Enrollment</h3>
          </div>
          <div>
            <PurchaseTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchasePanel;
