import styled from "@emotion/styled";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon"
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled(motion.div)`
  width: 60%;
  height: auto;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 25px 20px;
  @media (max-width: 768px) {
    & {
      width: 90%;
      height: 80%;
    }
  }
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top:25px;
  right: 20px;
  cursor: pointer;
  border:none;
  
  outline:none;
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" },
};

export default function Modal({ handleClose, children, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
          className="overlay"
          onClick={(e) => {
            if (e.target.classList[0] === "overlay") {
              handleClose();
            }
          }}
        >
          <ModalContainer variants={containerVariant}>
            <CloseButton onClick={handleClose}>
              <Icon type={"close"} size={20}/>
            </CloseButton>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
}
