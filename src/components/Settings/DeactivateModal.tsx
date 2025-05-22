import React from "react";

interface DeactivateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeactivateModal: React.FC<DeactivateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg py-8 px-6 max-w-sm w-full text-center shadow-lg">
        <h3 className="text-lg font-semibold text-black mb-4 max-w-xs mx-auto">
          Are you sure you want to delete/deactivate your account?
        </h3>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onConfirm}
            className="flex-1 text-sm text-black tracking-[-0.28px] min-h-[40px] py-2 rounded-lg border border-[#6B047C] transition-all duration-200 hover:bg-[#6B047C] hover:text-white hover:shadow-sm"
          >
            Deactivate
          </button>
          <button
            onClick={onClose}
            className="flex-1 text-sm text-white tracking-[-0.28px] min-h-[40px] bg-[#6B047C] py-2 rounded-lg transition-all duration-200 hover:bg-[#4B025A] hover:shadow-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}; 