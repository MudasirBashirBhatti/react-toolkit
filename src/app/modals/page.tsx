"use client";
import Modal from "@/components/modals/Modal/Modal";
import { useState } from "react";

const ModalsPage = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <Modal onClose={() => setisOpen(false)} showCloseButton>
          <div>This is panel</div>
        </Modal>
      )}

      <button onClick={() => setisOpen(true)}>Show Panel</button>
    </div>
  );
};

export default ModalsPage;
