import { toast } from "react-toastify";

const successToast = (message: string) => {
  toast.success(message, {
    className:
      "bg-dark! font-Vazirmatn-Medium! text-gray-200! rounded-lg! top-6!",
    progressClassName: "bg-green-500!",
  });
};

const errorToast = (message: string) => {
  toast.error(message, {
    className:
      "bg-dark! font-Vazirmatn-Medium! text-gray-200! rounded-lg! top-6!",
    progressClassName: "bg-red-500!",
  });
};

export { successToast, errorToast };
