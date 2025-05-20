// components/ProcessingModal.tsx
import React from 'react';
import { Loader2, CreditCard, CheckCircle } from 'lucide-react';

interface ProcessingModalProps {
  status?: 'processing' | 'success' | 'error';
  message?: string;
}

const ProcessingModal: React.FC<ProcessingModalProps> = ({
  status = 'processing',
  message,
}) => {
  const statusConfig = {
    processing: {
      icon: <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />,
      defaultMessage: 'Processing Payment...',
      color: 'text-blue-500',
    },
    success: {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      defaultMessage: 'Payment Successful!',
      color: 'text-green-500',
    },
    error: {
      icon: <CreditCard className="w-8 h-8 text-red-500" />,
      defaultMessage: 'Payment Failed',
      color: 'text-red-500',
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-4 w-80 max-w-full shadow-xl animate-popIn">
        <div className="p-3 rounded-full bg-gray-50">
          {currentStatus.icon}
        </div>
        <h3 className={`text-lg font-semibold ${currentStatus.color}`}>
          {message || currentStatus.defaultMessage}
        </h3>
        {status === 'processing' && (
          <p className="text-sm text-gray-500 text-center">
            Please wait while we process your transaction
          </p>
        )}
      </div>
    </div>
  );
};

export default ProcessingModal;