import React from "react";
import { LMImgProductModalProps } from "./types";
import styles from "./styles.module.scss";
import { closeIconLM } from "../LMIcons";

const LMImgProductModal: React.FC<LMImgProductModalProps> = ({
  img,
  onClose,
}) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div
          className={styles.modal}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className={styles.title}>
            <div className={styles.close} onClick={onClose}>
              {closeIconLM}
            </div>
          </div>
          <img {...img} />
        </div>
      </div>
    </>
  );
};

export default LMImgProductModal;
