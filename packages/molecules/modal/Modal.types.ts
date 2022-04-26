export type IModalProps = {
  isOpen: boolean;
  noBackdrop?: boolean;
  dialogTitle?: string | React.ReactNode;
  dialogDescription?: string | React.ReactNode;
  noCloseBtn?: boolean;
  children: React.ReactNode;
  stickyFooterContent?: React.ReactNode;
  DialogTrigger: React.ReactNode;
  preventCloseOnEsc?: boolean;
  preventCloseOnOutsideClick?: boolean;
};
