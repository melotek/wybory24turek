import React from 'react';
import { Modal, ModalProps } from '@mui/material';

type Props = {
    children: React.ReactNode;
    // <h2 id="modal-title">My Title</h2>
    // <p id="modal-description">My Description</p>
} & ModalProps;
// aria-labelledby="modal-title" aria-describedby="modal-description"
//   open={open}
//   onClose={handleClose}

const CustomModal = ({ children, ...rest }: Props) => {
    return <Modal {...rest}>{children}</Modal>;
};

export default CustomModal;
